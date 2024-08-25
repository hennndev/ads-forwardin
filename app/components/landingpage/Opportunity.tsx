"use client"
import React from 'react'
import Image from 'next/image'
import { BsCaretDownFill } from "react-icons/bs"
import Sidenav from '@/app/components/landingpage/Sidenav'

const Opportunity = () => {
    return (
        <section id='opportunity' className='h-auto md:h-[740px] bg-white lg:-mt-[30px] flex items-center justify-center xl:justify-start xl:pl-[83px]'>
            <section className='flexx'>
                <Sidenav currentSection='opportunity'/>
                
                <section className='flex-center flex-col xl:ml-[120px]'>
                    <h4 className='text-primary section-title text-center w-[312px] md:w-[500px] lg:w-[691px] font-lexend-deca mb-[58px]'>"One Step Closer to More Effective and Connected Communication!"</h4>

                    <section className='w-[312px] md:w-[450px] lg:w-[900px] xl:w-auto flexx flex-col lg:flex-row xl:space-x-[50px]'>
                        <section className='relative w-[253px] md:w-[300px] lg:w-[253px] h-[243px]'>
                            <Image src='/images/opportunity.svg' fill alt='opportunity' priority={true} className='w-full h-full object-cover'/>
                        </section>
                        <section className='w-full lg:w-auto flex flex-1 flex-col xl:w-[621px] space-y-[30px]'>
                            <section className='flexx flex-col lg:flex-row space-y-[10px] lg:space-y-0 lg:space-x-[10px]'>
                                <div className='bg-primary rounded-[10px] py-[10px] px-[25px] flex-center w-full lg:w-auto'>
                                    <p className='text-[14px] font-[500] leading-[16.94px] tracking-[1.25%] text-center text-white'>
                                        Bisnis dan Pemasaran
                                    </p>
                                    <BsCaretDownFill className='lg:hidden text-sm text-white ml-1 mt-0.5'/>
                                </div>
                                <div className='bg-[#F3F5F8] lg:bg-transparent lg:border-[1px] lg:border-primary border-solid rounded-[10px] py-[10px] px-[25px] flex-center w-[90%] lg:w-auto'>
                                    <p className='text-[14px] font-[500] leading-[16.94px] tracking-[1.25%] text-center text-primary'>Komersial dan Penjualan</p>
                                </div>
                                <div className='bg-transparent lg:bg-transparent lg:border-[1px] lg:border-primary border-solid rounded-[10px] py-[10px] px-[25px] flex-center w-full lg:w-auto'>
                                    <p className='text-[14px] font-[500] leading-[16.94px] tracking-[1.25%] text-center text-primary'>Organisasi Sosial</p>
                                </div>
                            </section>
                            <p className='section-paragraph'>
                                Bidang ini dapat memanfaatkan fitur Broadcast untuk mengirim promosi, pengumuman, dan informasi produk kepada pelanggan dalam jumlah besar secara efisien. Selain itu, fitur Campaign dapat membantu merencanakan dan menyampaikan pesan iklan dengan waktu yang tepat kepada target audiens yang sesuai.
                            </p>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default Opportunity