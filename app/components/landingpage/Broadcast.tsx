"use client"
import React from 'react'
import Image from 'next/image'
import Sidenav from './Sidenav'

const Broadcast = () => {
    return (
        <section className='h-[740px] bg-section-primary flex items-center -mt-[30px] space-x-[105px] pl-[83px]'>
            <section className='flexx'>
                <Sidenav/>
                <section className='w-[943.02px] flexx space-x-[105px] ml-[120px]'>
                    <section className='relative w-[470.02px] h-[378.5px]'> 
                        <Image src="/images/broadcast-img.png" fill priority alt="broadcast-img" className="w-full h-full object-cover"/>
                    </section>
                    <section className='w-[370px]'>
                        <h4 className='text-[34px] text-secondary font-[700] leading-[42.5px] tracking-[0.25%] mb-[30px] font-lexend-deca'>Reach Further with Ease</h4>
                        <p className='text-[14px] text-secondary font-[500] leading-[16.94px] tracking-[0.25%]'>Fowardin memberikan Anda akses cepat untuk memperluas jangkauan komunikasi Anda. Dengan fitur Broadcast kami, Anda dapat mengirim pesan kepada banyak kontak dan grup sekaligus. Menjangkau audiens Anda tidak pernah semudah ini.</p>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default Broadcast