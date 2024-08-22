import React from 'react'
import Image from 'next/image'
import RegisterForm from '@/app/components/auth/RegisterForm'

export const metadata = {
    title: "FORWARDIN | Register"
}

const Register = () => {
    return (
        <section className='flex-1 flex-center px-[20px] xl:px-0 xl:space-x-[120px] pb-[20px]'>
            <section className='hidden xl:flex flex-col space-y-[25px]'>
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
            <RegisterForm/>
        </section>
    )
}

export default Register