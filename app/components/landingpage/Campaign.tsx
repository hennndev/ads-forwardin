"use client"
import React from 'react'
import Image from 'next/image'
import Sidenav from '@/app/components/landingpage/Sidenav'

const Campaign = () => {
    return (
        <section id='campaign' className='h-[790px] md:h-[740px] lg:-mt-[30px] flex items-center justify-center xl:justify-start xl:pl-[83px]'>
            <section className='flexx'>
                <Sidenav currentSection='campaign'/>
                <section className='w-[313px] md:w-auto flexx flex-col-reverse lg:flex-row lg:space-x-[30px] xl:space-x-[114px] xl:ml-[120px]'>
                    <section className="w-full md:w-[370px] space-y-[30px]">
                        <h4 className="section-title">
                            Right Time, Effective Messages
                        </h4>
                        <p className='section-paragraph'>
                            Fowardin memungkinkan Anda untuk merencanakan pengiriman iklan yang tepat sasaran. Manfaatkan fitur Campaign kami untuk mengoptimalkan pesan iklan Anda sehingga hasilnya lebih akurat dan sukses. Dengan Fowardin, setiap pesan iklan memiliki dampak yang lebih besar.
                        </p>
                    </section>
                    <div className='relative w-full h-[248.28px] md:w-[380px] md:h-[250px] lg:w-[461.9px] lg:h-[350.93px]'>
                        <Image src="/images/campaign-img.svg" alt="campaign-img" priority={true} fill className='w-full h-full object-cover'/>
                    </div>
                </section>
            </section>
        </section>
    )
}

export default Campaign