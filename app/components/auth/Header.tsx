"use client"
import React from 'react'
import Link from 'next/link'
import Logo from '@/app/components/ui/logo/Logo'

const Header = () => {    
    return (
        <header className='flex items-center justify-center lg:flex-none lg:items-start lg:justify-normal lg:pl-[150px] pt-[40px] lg:pt-[20.93px]'>
            <Link href='/'>
                <Logo classes='w-[177px] h-[33.63px] cursor-pointer'/>
            </Link>
        </header>
    )
}

export default Header