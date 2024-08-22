"use client"
import React from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

type FormTypes = {
    email: string
    password: string
}

const LoginForm = () => {

    const { register, handleSubmit, formState: {errors} } = useForm<FormTypes>({
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const onSubmit = (values: FormTypes) => {
        console.log(values)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-[466px] py-[40px] px-[20px] space-y-[40px] lg:shadow-pricing-card lg:bg-white rounded-[10px]'>
            <section>
                <h5 className='text-secondary text-[24px] leading-[30px] font-lexend-deca font-[700] text-center'>Welcome Back</h5>
                <p className='text-secondary text-[14px] font-[500] leading-[16.94px] tracking-[0.0025em] text-center'>We’re so excited to see you again!</p>
            </section>

            <section className='flex flex-col space-y-[16px]'>
                <input 
                    {...register('email', {
                        required: 'Email required',
                        pattern: {
                            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                            message: "Email not valid!"
                        }
                    })}
                    type="email" 
                    placeholder='Email' 
                    className={clsx('py-[12px] px-[21px] rounded-[5px] border border-solid border-[#B0B4C5] text-base text-secondary placeholder:text-[12px] font-[500] leading-[14.52px] tracking-[0.005em] placeholder:text-[#B0B4C5] outline-none focus:ring-1 focus:ring-secondary', errors.email ? 'border-red-500 focus:ring-0' : '')}/>

                <input 
                    {...register('password', {
                        required: 'Password required',
                        minLength: {
                            value: 8,
                            message: 'Minimum password length is 8 character or more!'
                        },
                        pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),./;'])[A-Za-z\d@$!%*?&.,/;']{8,}$/,
                            message: 'Password not valid'
                        }
                        
                    })}
                    type="password" 
                    placeholder='Password' 
                    className={clsx('py-[12px] px-[21px] rounded-[5px] border border-solid border-[#B0B4C5] text-base text-secondary placeholder:text-[12px] font-[500] leading-[14.52px] tracking-[0.005em] placeholder:text-[#B0B4C5] outline-none focus:ring-1 focus:ring-secondary', errors.password ? 'border-red-500 focus:ring-0' : '')}/>

                <p className='text-primary text-[14px] font-[500] leading-[16.94px] tracking-[0.0125em]'>Lupa Password</p>
            </section>

            <button type='submit' className='bg-primary py-[12px] rounded-[5px] text-[14px] font-[500] leading-[16.94px] tracking-[0.0125em] text-center text-white outline-none'>
                Sign In
            </button>

            <p className='text-[14px] leading-[16.94px] font-[500] tracking-[0.0125em] text-center'>
                Butuh buat akun? 
                <Link href="/register" className='text-primary'> Daftar di sini</Link>
            </p>
        </form>
    )
}

export default LoginForm