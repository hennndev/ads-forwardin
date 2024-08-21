import React from 'react'
import Logo from '@/app/components/ui/Logo'

const Header = () => {
    return (
        <header className='flex items-center justify-center lg:flex-none lg:items-start lg:justify-normal lg:pl-[150px] pt-[40px] lg:pt-[20.93px]'>
            <Logo classes='w-[177px] h-[33.63px]'/>
        </header>
    )
}

export default Header