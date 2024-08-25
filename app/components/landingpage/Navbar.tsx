"use client"
import { useState, useEffect, Fragment } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import Logo from '@/app/components/ui/logo/Logo'
import { BsCaretDownFill } from "react-icons/bs"
import MenuIcon from '@/app/components/ui/icons/MenuIcon'

const Navbar = () => {
    const [showNav, setShowNav] = useState<boolean>(false)
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
        <Fragment>
            <header className={clsx('fixed z-50 md:flex-center w-full md:px-[10px] top-0 transition-none md:transition-all duration-300 ease-in-out md:mt-[20px]', !isScrolled ? 'translate-y-0' : 'md:-translate-y-[100px]')}>
                <section className='flex-between w-full md:w-[691.31px] h-[61px] bg-white md:rounded-[8px] pl-[30px] pr-[30px] md:pl-[20px] md:pr-[10px] shadow-navbar'>
                    <Logo classes="h-[162.31px] h-[26.09px]"/>
                    <nav className='hidden md:flexx space-x-5'>
                        <a href="" className='text-primary flexx text-[14px] font-[500] leading-[16.94px] tracking-[0.0125em] hover:text-primary'>
                            Features
                            <BsCaretDownFill className='text-[12px] ml-2 mt-[1.5px]'/>
                        </a>
                        <a href="" className='text-[14px] font-[500] leading-[16.94px] tracking-[0.0125em] hover:text-primary'>Pricing</a>
                        <a href="" className='text-[14px] font-[500] leading-[16.94px] tracking-[0.0125em] hover:text-primary'>Demo</a>
                        <a href="" className='text-[14px] font-[500] leading-[16.94px] tracking-[0.0125em] hover:text-primary'>Blogs</a>
                    </nav>
                    <Link href="/login" className='hidden md:flex-center bg-primary w-[115px] h-[41px] text-white rounded-[8px] text-base'>
                        Sign In
                    </Link>
                    <MenuIcon classes='inline-block md:hidden cursor-pointer' handleClick={() => setShowNav(!showNav)}/>
                </section>
            </header>
            <section className={clsx('fixed w-full min-h-[300px] bg-white z-30 md:hidden top-0 duration-300 ease-in-out pt-[20px] pb-[50px]', 
                showNav ? 'translate-y-[60px]' : '-translate-y-[400px]'
            )}>
               <section className='flexx flex-col w-full space-y-[12px] p-[12px]'>
                    <button className='group flex-center bg-transparent w-[80%] py-[12px] px-[44px] rounded-[5px] text-[14px] leading-[16.94px] tracking-[0.0125em] font-[500] text-secondary hover:text-primary'>
                        Features
                        <BsCaretDownFill className='text-[12px] ml-1.5 mt-0.5 group-hover:text-primary'/>
                    </button>
                    <button className='bg-transparent w-[80%] py-[12px] px-[44px] rounded-[5px] text-[14px] leading-[16.94px] tracking-[0.0125em] font-[500] text-secondary hover:text-primary'>
                        Pricing
                    </button>
                    <button className='bg-transparent w-[80%] py-[12px] px-[44px] rounded-[5px] text-[14px] leading-[16.94px] tracking-[0.0125em] font-[500] text-secondary hover:text-primary'>
                        Demo
                    </button>
                    <button className='bg-transparent w-[80%] py-[12px] px-[44px] rounded-[5px] text-[14px] leading-[16.94px] tracking-[0.0125em] font-[500] text-secondary hover:text-primary'>
                        Blogs
                    </button>
                    <Link href='/login' className='bg-primary w-[80%] py-[12px] px-[44px] text-white rounded-[10px] text-[14px] leading-[16.94px] tracking-[0.0125em] font-[500]'>
                        Sign In
                    </Link>
                    <Link href='/login' className='bg-[#F3F5F8] opacity-50 w-[80%] py-[12px] px-[44px] text-secondary rounded-[5px] text-[14px] leading-[16.94px] tracking-[0.0125em] font-[500]'>
                        Sign In as Admin
                    </Link>
                    <Link href='/login' className='bg-transparent opacity-50 w-[80%] py-[12px] px-[44px] text-secondary rounded-[5px] text-[14px] leading-[16.94px] tracking-[0.0125em] font-[500]'>
                        Sign In as Customer Service
                    </Link>
               </section>
            </section>
        </Fragment>
    )
}

export default Navbar