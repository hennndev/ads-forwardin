"use client"
import React from 'react'
import Image from 'next/image'
import Sidenav from './Sidenav'

const AutoReply = () => {
    return (
        <section id='autoreply' className='h-[790px] md:h-[740px] lg:-mt-[30px] flex items-center justify-center xl:justify-start xl:pl-[83px]'>
            <section className='flexx'>
                <Sidenav currentSection='autoreply'/>
                <section className='w-[313px] md:w-auto flexx flex-col lg:flex-row lg:space-x-[30px] xl:space-x-[105px] xl:ml-[120px]'>
                    <section className='relative w-full h-[147.4px] md:w-[380px] md:h-[250px] lg:w-[550px] lg:h-[310.76px]'> 
                        <Image src="/images/autoreply-img.svg" fill priority={true} alt="autoreply-img" className="w-full h-full object-cover"/>
                    </section>
                    <section className='w-full md:w-[370px] space-y-[30px]'>
                        <h4 className='section-title'>Respond Faster with the Convenience of Auto Reply</h4>
                        <p className='section-paragraph'>
                            Fowardin mempermudah Anda untuk memberikan respon cepat kepada pesan dari banyak kontak dan grup sekaligus. Dengan fitur Auto Reply kami, Anda dapat menjawab pertanyaan atau memberikan respon otomatis, menghemat waktu dan energi Anda. Tanggap lebih cepat dengan Fowardin.
                        </p>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default AutoReply