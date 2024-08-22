"use client"
import React from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { IoMdCheckmark } from "react-icons/io"

type FormTypes = {
    email: string
    username: string
    password: string
}

const RegisterForm = () => {

    const { register, handleSubmit, formState: {errors}, watch } = useForm<FormTypes>({
        defaultValues: {
            username: '',
            email: '',
            password: ''
        }
    })

    const onSubmit = (values: FormTypes) => {
        console.log(values)
    }

    const pass1Low = (value: string) => /[a-z]/.test(value)
    const pass1Cap = (value: string) => /[A-Z]/.test(value) 
    const pass1Num = (value: string) => /[0-9]/.test(value)
    const pass1Uniq = (value: string) => /[!@#$%^&*(),./;']/.test(value)

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-[466px] py-[40px] px-[20px] space-y-[40px] lg:shadow-pricing-card bg-white rounded-[10px]'>
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
                    {...register('username', {
                        required: 'Username required'
                    })}
                    type="text" 
                    placeholder='Username' 
                    className={clsx('py-[12px] px-[21px] rounded-[5px] border border-solid border-[#B0B4C5] text-base text-secondary placeholder:text-[12px] font-[500] leading-[14.52px] tracking-[0.005em] placeholder:text-[#B0B4C5] outline-none focus:ring-1 focus:ring-secondary', errors.username ? 'border-red-500 focus:ring-0' : '')}/>

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
                
                <div className='py-[12px] px-[20px] bg-[#F3F5F8] rounded-[5px]'>
                    <div className='text-[12px] font-[500] leading-[14.52px] tracking-[0.005em] text-gray-400'>
                        Password harus mengandung: <br />
                        <span className={clsx('flexx text-center', watch('password').length >= 8 ? 'text-green-500' : '' )}>
                           {watch('password').length >= 8 && <IoMdCheckmark className='mr-1 text-sm'/>} Paling tidak 8 karakter
                        </span> <br />
                        Paling tidak 4 dari syarat berikut: <br />
                        <span className={clsx('flexx text-center', pass1Low(watch('password')) ? 'text-green-500' : '' )}>
                           {pass1Low(watch('password')) && <IoMdCheckmark className='mr-1 text-sm'/>}  Huruf kecil (a-z)
                        </span>
                        <span className={clsx('flexx text-center', pass1Cap(watch('password')) ? 'text-green-500' : '' )}>
                           {pass1Cap(watch('password')) && <IoMdCheckmark className='mr-1 text-sm'/>}  Huruf besar (A-Z)
                        </span>
                        <span className={clsx('flexx text-center', pass1Num(watch('password')) ? 'text-green-500' : '' )}>
                           {pass1Num(watch('password')) && <IoMdCheckmark className='mr-1 text-sm'/>}  Angka
                        </span>
                        <span className={clsx('flexx text-center', pass1Uniq(watch('password')) ? 'text-green-500' : '' )}>
                           {pass1Uniq(watch('password')) && <IoMdCheckmark className='mr-1 text-sm'/>}  Karakter special (!@#$%^&*(),./;')
                        </span>
                    </div>
                </div>
            </section>

            <button type='submit' className='bg-primary py-[12px] rounded-[5px] text-[14px] font-[500] leading-[16.94px] tracking-[0.0125em] text-center text-white outline-none'>
                Sign Up
            </button>

            <p className='text-[14px] leading-[16.94px] font-[500] tracking-[0.0125em] text-center'>
                Sudah punya akun? 
                <Link href="/login" className='text-primary'> Masuk di sini</Link>
            </p>
        </form>
    )
}

export default RegisterForm