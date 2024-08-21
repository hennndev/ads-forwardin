"use client"
import React from 'react'
import Image from 'next/image'
import Sidenav from '@/app/components/landingpage/Sidenav'

const Opportunity = () => {
    return (
        <section className='h-[740px] bg-white flexx -mt-[30px] space-x-[105px] pl-[83px]'>
            <section className='flexx'>
                <Sidenav/>
                <section className='flex-center flex-col ml-[120px] w-[941px]'>
                    <h4 className='text-primary text-[34px] font-[700] leading-[42.5px] tracking-[0.25%] text-center w-[691px] font-lexend-deca mb-[58px]'>"One Step Closer to More Effective and Connected Communication!"</h4>

                    <section className='flexx space-x-[50px]'>
                        <section className='relative w-[253px] h-[243px]'>
                            <Image src='/images/opportunity.svg' fill priority alt='opportunity' className='w-full h-full object-cover'/>
                        </section>
                        <section className='flex flex-col w-[621px]'>
                            <section className='flexx space-x-[10px] mb-[30px]'>
                                <div className='bg-primary rounded-[10px] py-[10px] px-[25px] flex-center'>
                                    <p className='text-[14px] font-[500] leading-[16.94px] tracking-[1.25%] text-center text-white'>Bisnis dan Pemasaran</p>
                                </div>
                                <div className='bg-transparent border-[1px] border-primary border-solid rounded-[10px] py-[10px] px-[25px] flex-center'>
                                    <p className='text-[14px] font-[500] leading-[16.94px] tracking-[1.25%] text-center text-primary'>Komersial dan Penjualan</p>
                                </div>
                                <div className='bg-transparent border-[1px] border-primary border-solid rounded-[10px] py-[10px] px-[25px] flex-center'>
                                    <p className='text-[14px] font-[500] leading-[16.94px] tracking-[1.25%] text-center text-primary'>Organisasi Sosial</p>
                                </div>
                            </section>
                            <p className='text-secondary text-[14px] font-[500] leading-[16.94px] tracking-[0.25%]'>
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