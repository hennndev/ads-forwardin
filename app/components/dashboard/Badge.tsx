"use client"
import React from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import DarkMode from './DarkMode'
import { useSession } from 'next-auth/react'
import { FaBell, FaUser, FaGear  } from "react-icons/fa6"

const Badge = () => {
    const session = useSession()

    return (
        <section className='w-full'>
            <div className='flex-end'>
                <div className='flex-between w-[330px]'>
                    <div className='bg-white dark:bg-[#0F0E0E] rounded-full p-2 cursor-pointer'>
                        <FaBell className='text-md'/>
                    </div>

                    <div className='bg-white dark:bg-[#0F0E0E] flexx flex-row w-[186px] rounded-[20px] py-[2px] px-[5px]'>
                        <p className='flex-1 text-center text-[14px] font-[500] leading-[16.94px] tracking-[0.025em]'>
                            {session.data?.user?.name}
                        </p>
                        <div className={clsx('rounded-full self-end', !session.data?.user?.image ? 'bg-primary p-2' : 'relative w-9 h-9')}>       
                            {session.data?.user?.image ? (
                                <Image src={session.data?.user?.image} fill priority alt='profile-img' className='w-full h-full rounded-full'/>
                            ):(
                                <FaUser className='text-lg text-white'/>
                            )}
                        </div>
                    </div>
                    <div className='flexx space-x-[10px]'>
                        <div className='bg-white dark:bg-[#0F0E0E] rounded-full p-2 cursor-pointer'>
                            <FaGear className='text-md'/>
                        </div>
                        <div className='bg-white dark:bg-[#0F0E0E] rounded-full p-2 cursor-pointer'>
                            <DarkMode size={20}/>
                        </div>  

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Badge