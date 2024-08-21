"use client"
import React from 'react'
import Image from 'next/image'
import Sidenav from './Sidenav'

const AutoReply = () => {
    return (
        <section className='h-[740px] bg-section-primary flex items-center -mt-[30px] space-x-[105px] pl-[83px]'>
            <section className='flexx'>
                <Sidenav/>
                <section className='w-[943.02px] flexx space-x-[105px] ml-[120px]'>
                    <section className='relative w-[550px] h-[310.76px]'> 
                        <Image src="/images/autoreply-img.svg" fill priority alt="autoreply-img" className="w-full h-full object-cover"/>
                    </section>
                    <section className='w-[370px]'>
                        <h4 className='text-[34px] text-secondary font-[700] leading-[42.5px] tracking-[0.25%] mb-[30px] font-lexend-deca'>Respond Faster with the Convenience of Auto Reply</h4>
                        <p className='text-[14px] text-secondary font-[500] leading-[16.94px] tracking-[0.25%]'>
                            Fowardin mempermudah Anda untuk memberikan respon cepat kepada pesan dari banyak kontak dan grup sekaligus. Dengan fitur Auto Reply kami, Anda dapat menjawab pertanyaan atau memberikan respon otomatis, menghemat waktu dan energi Anda. Tanggap lebih cepat dengan Fowardin.
                        </p>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default AutoReply