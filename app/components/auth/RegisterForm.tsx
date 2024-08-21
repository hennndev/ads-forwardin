"use client"
import React from 'react'
import Link from 'next/link'

const RegisterForm = () => {
    return (
        <form className='flex flex-col w-[466px] py-[40px] px-[20px] space-y-[40px] lg:shadow-pricing-card bg-white rounded-[10px]'>
            <section>
                <h5 className='text-secondary text-[24px] leading-[30px] font-lexend-deca font-[700] text-center'>
                    Welcome to Fowardin
                </h5>
                <div className='flex-center'>
                    <p className='text-secondary text-[14px] font-[500] leading-[16.94px] tracking-[0.0025em] w-[264px] text-center'>
                        Revolutionize your communication journey with Fowardin today
                    </p>
                </div>
            </section>

            <section className='flex flex-col space-y-[16px]'>
                <input type="text" placeholder='Username/Email' className='py-[12px] px-[21px] rounded-[5px] border border-solid border-[#B0B4C5] text-[12px] font-[500] leading-[14.52px] tracking-[0.005em] text-[#B0B4C5]'/>
                <input type="password" placeholder='Password' className='py-[12px] px-[21px] rounded-[5px] border border-solid border-[#B0B4C5] text-[12px] font-[500] leading-[14.52px] tracking-[0.005em] text-[#B0B4C5]'/>
                <p className='text-primary text-[14px] font-[500] leading-[16.94px] tracking-[0.0125em]'>Lupa Password</p>
            </section>

            <button className='bg-primary py-[12px] rounded-[5px] text-[14px] font-[500] leading-[16.94px] tracking-[0.0125em] text-center text-white'>
                Sign In
            </button>

            <p className='text-[14px] leading-[16.94px] font-[500] tracking-[0.0125em] text-center'>
                Sudah punya akun? 
                <Link href="/login" className='text-primary'> Masuk di sini</Link>
            </p>
        </form>
    )
}

export default RegisterForm