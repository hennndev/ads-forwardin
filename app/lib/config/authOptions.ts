import bcrypt from 'bcryptjs'
import { NextAuthOptions } from 'next-auth'
import { Users } from "@/app/lib/models/user.model"
import { connectDB } from "@/app/lib/utils/mongoose"
import GoogleProvider from 'next-auth/providers/google'
import Credentials from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions = {
    session: {
      strategy: 'jwt'  
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string
        }),
        Credentials({
            name: 'credentials',
            //@ts-ignore
            async authorize(credentials) {
                const { email, password } = credentials as { email: string, password: string}  
                await connectDB()
                const checkExistUser = await Users.findOne({email: email})
                if(checkExistUser) {
                    if(checkExistUser.signup_method !== 'credentials') {
                        throw new Error('Email ini terdaftar login dengan google.')
                    }
                    const checkPassword = await bcrypt.compare(password, checkExistUser.password)
                    if(checkPassword) {
                        if(checkExistUser.signup_method === 'credentials') {
                            return {
                                userId: checkExistUser?._id,
                                name: checkExistUser?.username,
                                email: checkExistUser?.email,
                                role: checkExistUser?.role,
                            }
                        } 
                    } else {
                        throw new Error('Password salah, silahkan coba lagi.')
                    }
                } else {
                    throw new Error('Email belum terdaftar.')
                }
            } 
        })
    ],
    callbacks: {
        async signIn({account, profile, user}) {
            if(account?.provider === 'google') {
                await connectDB()
                const checkExistUser = await Users.findOne({email: profile?.email})
                if(!checkExistUser) {
                    await Users.create({
                        email: profile?.email,
                        username: profile?.name,
                        image_profile: {
                            image_profile_url: user.image
                        },
                        signup_method: 'google'
                    })
                } 
                return true
            } 
            return true
        },
        //@ts-ignore
        async jwt({token, user, account, profile, trigger, session}: {token: any, user: any, account: any, profile: any, trigger: any, session: any}) {
            if(user) {
                token.role = account?.provider === 'google' ? 'user' : user.role
            }
            if(account?.provider === 'google') {
                await connectDB()
                const checkExistUser = await Users.findOne({email: profile?.email})
                if(checkExistUser) {
                    user.name = checkExistUser.username
                    token.userId = checkExistUser._id
                    token.name = checkExistUser.username
                    token.picture = checkExistUser.image_profile.image_profile_url
                }
            }
            if(trigger === 'update' && (session.image === null || session.image)) {
                token.picture = session?.image
            } 
            return {...token, ...user}
        },
        async session({session, token, trigger, newSession}: {session: any, token: any, trigger: any, newSession: any}) {
            session.user.name = token.name
            session.user.userId = token.userId
            session.user.image = token.picture
            session.user.role = token.role
            if(trigger === 'update' && newSession.image) {
                session.user.image = newSession.image
            }
            return session
        },
    },
    pages: {
        signIn: '/login'
    }
}
