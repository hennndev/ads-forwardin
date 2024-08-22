"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import Logo from '@/app/components/ui/logo/Logo'

const Header = () => {
    const router = useRouter()
    
    return (
        <header className='flex items-center justify-center lg:flex-none lg:items-start lg:justify-normal lg:pl-[150px] pt-[40px] lg:pt-[20.93px]'>
            <Logo classes='w-[177px] h-[33.63px] cursor-pointer' handleClick={() => router.push('/')}/>
        </header>
    )
}

export default Header