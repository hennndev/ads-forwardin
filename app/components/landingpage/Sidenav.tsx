import React from 'react'

const Sidenav = () => {
    return (
        <aside className='flex flex-col space-y-3 w-[97px] border-l-[1.5px] border-secondary border-opacity-40 pl-[10px]'>
            <a href="#getstarted" className='text-[14px] font-[500] text-secondary leading-[16.94px] tracking-[0.25%]'>Get Started</a>
            <a href="#broadcast" className='text-[14px] opacity-40 font-[500] leading-[16.94px] tracking-[0.25%]'>Broadcast</a>
            <a href="#campaign" className='text-[14px] opacity-40 font-[500] leading-[16.94px] tracking-[0.25%]'>Campaign</a>
            <a href="#autoreply" className='text-[14px] opacity-40 font-[500] leading-[16.94px] tracking-[0.25%]'>Auto Reply</a>
            <a href="opportunity" className='text-[14px] opacity-40 font-[500] leading-[16.94px] tracking-[0.25%]'>Opportunity</a>
            <a href="#pricing" className='text-[14px] opacity-40 font-[500] leading-[16.94px] tracking-[0.25%]'>Pricing</a>
            <a href="#faq" className='text-[14px] opacity-40 font-[500] leading-[16.94px] tracking-[0.25%]'>FAQ</a>
            <a href="#contactus" className='text-[14px] opacity-40 font-[500] leading-[16.94px] tracking-[0.25%]'>Contact Us</a>
        </aside>
    )
}

export default Sidenav