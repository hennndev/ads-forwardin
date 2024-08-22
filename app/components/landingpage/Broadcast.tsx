"use client"
import React from 'react'
import Image from 'next/image'
import Sidenav from './Sidenav'

const Broadcast = () => {
    return (
        <section id='broadcast' className='h-[790px] md:h-[740px] bg-section-primary lg:-mt-[30px] flex items-center justify-center xl:justify-start xl:pl-[83px]'>
            <section className='flexx bg-'>
                <Sidenav currentSection='broadcast'/>
                <section className='w-[313px] md:w-auto flexx flex-col lg:flex-row lg:space-x-[30px] xl:space-x-[105px] xl:ml-[120px]'>
                    <section className='relative w-full h-[248.28px] md:w-[380px] md:h-[250px] lg:w-[470.02px] lg:h-[378.5px]'> 
                        <Image src="/images/broadcast-img.svg" fill priority alt="broadcast-img" className="w-full h-full object-cover"/>
                    </section>
                    <section className='w-full md:w-[370px] space-y-[30px]'>
                        <h4 className='section-title'>Reach Further with Ease</h4>
                        <p className='section-paragraph'>Fowardin memberikan Anda akses cepat untuk memperluas jangkauan komunikasi Anda. Dengan fitur Broadcast kami, Anda dapat mengirim pesan kepada banyak kontak dan grup sekaligus. Menjangkau audiens Anda tidak pernah semudah ini.</p>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default Broadcast