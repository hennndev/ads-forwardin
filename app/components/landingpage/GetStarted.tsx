"use client"
import React from 'react'
import Image from 'next/image'
import { IoMdArrowForward } from "react-icons/io"
import Sidenav from '@/app/components/landingpage/Sidenav'


const GetStarted = () => {
    return (
        <section className="h-[845px] bg-hero-bg-image bg-cover bg-center bg-no-repeat -mt-[30px] flex items-center pl-[83px]">
            <section className='flexx'>
                <Sidenav/>
                <section className='flexx space-x-[112px] ml-[120px]'>
                    <section className='w-[367px] space-y-[30px]'>
                        <h4 className="text-[34px] text-secondary font-[700] leading-[42.5px] tracking-[0.25%] font-lexend-deca">
                            Elevate Your Messaging Efficiency with Our Innovative Admin Tools
                        </h4>
                        <p className="text-[14px] text-secondary font-[500] leading-[16.94px] tracking-[0.25%]">
                            Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih mudah dengan Admin Tools kami. Tingkatkan komunikasi Anda dan pelanggan dengan fitur pesan otomatis. Menyimpan kontak menjadi lebih praktis dengan fitur sinkronasi Google Concact. Dapatkan kendali penuh pesan dengan manajemen konten yang praktis.
                        </p>
                        <div className='flex'>   
                            <button className="w-[184px] h-[41px] rounded-s-[5px] bg-secondary text-white">
                                Daftar Sekarang
                            </button>
                            <button className='bg-secondary rounded-e-[5px] h-[41px] px-[12px] border-l border-white'>
                                <IoMdArrowForward className='h-[41px] text-white'/>
                            </button>
                        </div>
                    </section>
                    <section className="relative w-[558px] h-[351px]">
                        <Image src="/images/hero-img.svg" fill priority alt="hero-img" className="w-full h-full object-cover"/>
                    </section>

                </section>
            </section>
        </section>
    )
}

export default GetStarted