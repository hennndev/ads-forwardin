"use client"
import { useState, useEffect } from 'react'
import clsx from 'clsx'
import Logo from '@/app/components/ui/Logo'

const Navbar = () => {
    const [lastScrollY, setLastScrollY] = useState(0)
    const [isScrolled, setIsScrolled] = useState<boolean>(false)

    const controlNavbar = () => {
        if (window.scrollY > lastScrollY) { 
            setIsScrolled(true)
        } else { 
            setIsScrolled(false);  
        }
        setLastScrollY(window.scrollY); 
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        }
    }, [lastScrollY]);

    return (
        <header className={clsx('fixed z-50 flex-center w-full px-[10px] top-2 duration-300 ease-in-out mt-[20px]', !isScrolled ? 'translate-y-0' : '-translate-y-[100px]')}>
            <section className='flex-between w-[691.31px] h-[61px] bg-white rounded-[8px] pl-[20px] pr-[10px]'>
                <Logo classes="h-[162.31px] h-[26.09px]"/>
                <nav className='flexx space-x-5'>
                    <a href="" className='text-[14px] font-[500] leading-[16.94px] tracking-[1.25%]'>Features</a>
                    <a href="" className='text-[14px] font-[500] leading-[16.94px] tracking-[1.25%]'>Pricing</a>
                    <a href="" className='text-[14px] font-[500] leading-[16.94px] tracking-[1.25%]'>Demo</a>
                    <a href="" className='text-[14px] font-[500] leading-[16.94px] tracking-[1.25%]'>Blogs</a>
                </nav>
                <button className='bg-primary w-[115px] h-[41px] text-white rounded-[8px] text-base'>
                    Sign In
                </button>
            </section>
        </header>
    )
}

export default Navbar