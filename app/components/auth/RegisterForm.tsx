"use client"
import { useState } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { signupUser } from '@/app/lib/actions/auth.actions'
import { IoMdCheckmark, IoLogoGoogle } from "react-icons/io"

type FormTypes = {
    email: string
    username: string
    phoneNumber: string
    password: string
}

const RegisterForm = () => {
    const [isSuccess, setIsSuccess] = useState<string | null>(null)
    const [isError, setIsError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { register, handleSubmit, formState: {errors}, watch, reset } = useForm<FormTypes>({
        defaultValues: {
            username: '',
            email: '',
            phoneNumber: '',
            password: ''
        }
    })
    const onSubmit = async (values: FormTypes) => {
        setIsLoading(true)
        setIsError(null)
        setIsSuccess(null)
        try {
            const phone_number = '62'.concat(values.phoneNumber)
            const res = await signupUser(values.username, values.email, values.password, phone_number)
            if(res?.error) {
                throw res?.error
            } 
            if(res?.success) {
                setIsSuccess(res.success)
                reset()
            }
        } catch (error: any) {
            setIsError(error)
        } finally {
            setIsLoading(false)
        }
    }
    const signinGoogle = async () => await signIn('google', {callbackUrl: '/dashboard'}) 

    const pass1Low = (value: string) => /[a-z]/.test(value)
    const pass1Cap = (value: string) => /[A-Z]/.test(value) 
    const pass1Num = (value: string) => /[0-9]/.test(value)
    const pass1Uniq = (value: string) => /[!@#$%^&*(),./;']/.test(value)
    const regexPhoneID = /^(81|82|83|84|85|86|87|88|89)[0-9]{6,10}$/

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-[466px] py-[40px] px-[20px] space-y-[25px] lg:shadow-pricing-card bg-white rounded-[10px]'>
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

            {isError && (
                <div className='py-[12px] px-[20px] bg-[#F3F5F8] rounded-[5px] opacity-80'>
                    <p className='text-[12px] font-[500] leading-[14.52px] tracking-[0.005em] text-red-500'>
                        {isError}
                    </p>
                </div>
            )}

            {isSuccess && (
                <div className='py-[12px] px-[20px] bg-[#F3F5F8] rounded-[5px] opacity-80'>
                    <p className='text-[12px] font-[500] leading-[14.52px] tracking-[0.005em] text-green-500'>
                        {isSuccess}
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
                    {...register('username', {
                        required: 'Username required'
                    })}
                    type="text" 
                    placeholder='Username' 
                    className={clsx('py-[12px] px-[21px] rounded-[5px] border border-solid border-[#B0B4C5] text-base text-secondary placeholder:text-[12px] font-[500] leading-[14.52px] tracking-[0.005em] placeholder:text-[#B0B4C5] outline-none', errors.username ? 'border-red-500 bg-red-50' : 'focus:ring-1 focus:ring-secondary')}/>
                
                <div className='w-full flexx md:space-x-[10px]'>
                    <select className='hidden md:inline py-[12px] px-[21px] rounded-[5px] border border-solid border-[#B0B4C5] text-base text-secondary text-[12px] font-[500] leading-[14.52px] tracking-[0.005em] appearance-none outline-none'>
                        <option value="62">(ID) + 62</option>
                    </select>
                    <input 
                        {...register('phoneNumber', {
                            required: 'Phone number required',
                            pattern: {
                                value: regexPhoneID,
                                message: 'Not valid as Indonesia phone number'
                            },
                        })}
                        type="text" 
                        placeholder='Whatsapp Phone Number' 
                        className={clsx('flex-1 py-[12px] px-[21px] rounded-[5px] border border-solid border-[#B0B4C5] text-base text-secondary placeholder:text-[12px] font-[500] leading-[14.52px] tracking-[0.005em] placeholder:text-[#B0B4C5] outline-none', errors.phoneNumber ? 'border-red-500 bg-red-50' : 'focus:ring-1 focus:ring-secondary')}/>
                </div>

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
                
                <div className='py-[12px] px-[20px] bg-[#F3F5F8] rounded-[5px]'>
                    <div className='text-[12px] font-[500] leading-[14.52px] tracking-[0.005em] text-gray-500'>
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

            <button type='submit' className={clsx('py-[12px] rounded-[5px] text-[14px] font-[500] leading-[16.94px] tracking-[0.0125em] text-center outline-none', isLoading ? 'bg-[#F3F5F8] opacity-80 text-gray-500' : 'bg-primary text-white')}>
                {isLoading ? 'Loading' : 'Sign Up'}
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
                Sudah punya akun? 
                <Link href="/login" className='text-primary'> Masuk di sini</Link>
            </p>
        </form>
    )
}

export default RegisterForm