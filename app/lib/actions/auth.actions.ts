'use server'
import bcrypt from 'bcryptjs'
import { connectDB } from "@/app/lib/utils/mongoose"
import { Users } from '@/app/lib/models/user.model'

export const signupUser = async (username: string, email: string, password: string, phone_number: string) => {
    await connectDB()
    try {
        const checkUserExist = await Users.findOne({email: email})
        if(!checkUserExist) {
            const salt = await bcrypt.genSalt(10)
            const hashPassword = await bcrypt.hash(password, salt)
            const user = await Users.create({
                username, 
                email, 
                phone_number,
                password: hashPassword, 
                role: 'user',
                signup_method: 'credentials'
            })
            if(user) {
                return {
                    success: 'Akun baru berhasil dibuat, anda bisa login sekarang'
                }
            }
        } else {
            throw new Error('Email sudah terdaftar, silahkan menggunakan email lain')
        }
    } catch (error: any) {
        return {
            error: error.message
        }
    }
}
