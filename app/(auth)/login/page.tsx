import React from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/lib/config/authOptions'
const LoginForm = dynamic(() => import('@/app/components/auth/LoginForm'))

export const metadata = {
    title: "FORWARDIN | Login"
}
const Login = async () => {
    const session = await getServerSession(authOptions)  
    if(session?.user) {
        return redirect('/dashboard')
    }
    return (
        <section className='flex-1 flex-center px-[20px] lg:px-0 lg:space-x-[120px]'>
            <section className='hidden lg:flexx flex-col space-y-[25px]'>
                <section className='relative w-[500px] h-[300.36px]'>
                    <Image src="/images/hero-img.svg" fill alt="login-img" loading='lazy' className='w-full h-full object-cover'/>
                </section>
                <section className='flex flex-col space-y-[15px] w-[465px]'>
                    <h5 className='text-secondary text-[24px] leading-[30px] font-[700] font-lexend-deca'>
                        Elevate Your Messaging Efficiency with Our Innovative Admin Tools
                    </h5>
                    <p className='text-[14px] font-[500] leading-[16.94px] tracking-[0.0025em]'>
                        Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih mudah dengan Admin Tools kami. Tingkatkan komunikasi Anda dan pelanggan dengan fitur pesan otomatis. Menyimpan kontak menjadi lebih praktis dengan fitur sinkronasi Google Concact. Dapatkan kendali penuh pesan dengan manajemen konten yang praktis.
                    </p>
                </section>
            </section>
            <LoginForm/>
        </section>
    )
}

export default Login