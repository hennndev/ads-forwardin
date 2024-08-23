"use client"
import { useState } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { IoLogoGoogle } from "react-icons/io"
import { signIn } from 'next-auth/react'

type FormTypes = {
    email: string
    password: string
}

const LoginForm = () => {
    const router = useRouter()
    const [isError, setIsError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { register, handleSubmit, formState: {errors} } = useForm<FormTypes>({
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const onSubmit = async (values: FormTypes) => {
        setIsLoading(true)
        setIsError(null)
        try {
            const res = await signIn('credentials', {
                email: values.email,
                password: values.password,
                redirect: false
            })
            if(res?.error) {
                throw res?.error
            } else {
                router.push('/admin/dashboard')
            }
        } catch (error: any) {
            setIsError(error)
        } finally {
            setIsLoading(false)
        }
    }
    const signinGoogle = async () => await signIn('google', {callbackUrl: '/admin/dashboard'}) 

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-[466px] py-[40px] px-[20px] space-y-[25px] lg:shadow-pricing-card lg:bg-white rounded-[10px]'>
            <section>
                <h5 className='text-secondary text-[24px] leading-[30px] font-lexend-deca font-[700] text-center'>Welcome Back</h5>
                <p className='text-secondary text-[14px] font-[500] leading-[16.94px] tracking-[0.0025em] text-center'>We’re so excited to see you again!</p>
            </section>

            {isError && (
                <div className='py-[12px] px-[20px] bg-[#F3F5F8] rounded-[5px] opacity-80'>
                    <p className='text-[12px] font-[500] leading-[14.52px] tracking-[0.005em] text-red-500'>
                        {isError}
                    </p>
                </div>
            )}

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
                    className={clsx('py-[12px] px-[21px] rounded-[5px] border border-solid border-[#B0B4C5] text-base text-secondary placeholder:text-[12px] font-[500] leading-[14.52px] tracking-[0.005em] placeholder:text-[#B0B4C5] outline-none', errors.email ? 'border-red-500 bg-red-50' : 'focus:ring-1 focus:ring-secondary')}/>

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
                    className={clsx('py-[12px] px-[21px] rounded-[5px] border border-solid border-[#B0B4C5] text-base text-secondary placeholder:text-[12px] font-[500] leading-[14.52px] tracking-[0.005em] placeholder:text-[#B0B4C5] outline-none', errors.password ? 'border-red-500 bg-red-50' : 'focus:ring-1 focus:ring-secondary')}/>

                <button type='button' onClick={() => router.push('/login')} className='text-primary text-[14px] font-[500] leading-[16.94px] tracking-[0.0125em] outline-none self-start'>
                    Lupa Password
                </button>
            </section>

            <button type='submit' className={clsx('py-[12px] rounded-[5px] text-[14px] font-[500] leading-[16.94px] tracking-[0.0125em] text-center outline-none', isLoading ? 'bg-[#F3F5F8] opacity-80 text-gray-500' : 'bg-primary text-white')}>
                {isLoading ? 'Loading' : 'Sign In'}
            </button>
            
            <hr />
            <div className='bg-white self-center py-1 px-6 !-mt-3'>
                <p className='text-center text-[14px] text-secondary leading-[16.94px] tracking-[0.005em]'>Or</p>
            </div>

            <button 
                type='button' 
                onClick={signinGoogle}
                className='flex-center bg-[#F3F5F8] opacity-80 py-[12px] rounded-[5px] text-[14px] font-[500] leading-[16.94px] tracking-[0.0125em] text-center text-secondary outline-none'>
                <IoLogoGoogle className='mr-2 text-lg text-red-500'/>
                Sign In with Google
            </button>

            <p className='text-[14px] leading-[16.94px] font-[500] tracking-[0.0125em] text-center'>
                Butuh buat akun? 
                <Link href="/register" className='text-primary'> Daftar di sini</Link>
            </p>
        </form>
    )
}

export default LoginForm