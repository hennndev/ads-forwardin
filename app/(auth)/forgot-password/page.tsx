import React from 'react'
import Image from 'next/image'
import LoginForm from '@/app/components/auth/LoginForm'

export const metadata = {
    title: "FORWARDIN | Forgot Password"
}

const ForgotPassword = () => {
    return (
        <section className='flex-1 flex-center px-[20px] lg:px-0 lg:space-x-[120px]'>
            <section className='hidden lg:flex flex-col space-y-[25px]'>
                <section className='relative w-[500px] h-[300.36px]'>
                    <Image src="/images/hero-img.svg" fill priority alt="login-img" className='w-full h-full object-cover'/>
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

export default ForgotPassword