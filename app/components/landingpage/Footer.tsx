import React from 'react'
import LogoText from '@/app/components/ui/logo/LogoText'
const Footer = () => {
    return (
        <footer className='flex-center space-x-[13px] mt-[50px] pb-[20px] lg:mt-0'>
            <p className='text-[14px] font-[300] leading-[16.94px] tracking-[0.0025em] text-white'>Powered By</p>
            <LogoText/>
        </footer>
    )
}

export default Footer