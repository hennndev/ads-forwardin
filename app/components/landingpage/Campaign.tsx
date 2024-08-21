"use client"
import React from 'react'
import Image from 'next/image'
import Sidenav from '@/app/components/landingpage/Sidenav'

const Campaign = () => {
    return (
        <section className='h-[740px] bg-white flex items-center -mt-[30px] space-x-[105px] pl-[83px]'>
            <section className='flexx'>
                <Sidenav/>
                <section className='flexx space-x-[114px] ml-[120px] w-[942.9px]'>
                    <section className="w-[367px]">
                        <h4 className="text-secondary text-[34px] font-[700] leading-[42.5px] tracking-[0.25%] mb-[30px] font-lexend-deca">
                            Right Time, Effective Messages
                        </h4>
                        <p className='text-secondary text-[14px] font-[500] leading-[16.94px] tracking-[0.25%]'>
                            Fowardin memungkinkan Anda untuk merencanakan pengiriman iklan yang tepat sasaran. Manfaatkan fitur Campaign kami untuk mengoptimalkan pesan iklan Anda sehingga hasilnya lebih akurat dan sukses. Dengan Fowardin, setiap pesan iklan memiliki dampak yang lebih besar.
                        </p>
                    </section>
                    <div className='relative w-[461.9px] h-[350.93px]'>
                        <Image src="/images/campaign-img.svg" alt="campaign-img" fill priority className='w-full h-full object-cover'/>
                    </div>
                </section>
            </section>
        </section>
    )
}

export default Campaign