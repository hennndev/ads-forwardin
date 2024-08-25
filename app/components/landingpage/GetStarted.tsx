"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IoMdArrowForward } from "react-icons/io"
import Sidenav from '@/app/components/landingpage/Sidenav'


const GetStarted = () => {
    return (
        <section id='getstarted' className="h-[790px] md:h-[845px] bg-hero-bg-image bg-cover bg-center bg-no-repeat lg:-mt-[30px] flex items-center justify-center xl:justify-start xl:pl-[83px]">
            <section className='flexx '>
                <Sidenav currentSection='getstarted'/>
                <section className='w-[318.08px] md:w-auto flexx flex-col-reverse lg:flex-row lg:space-x-[30px] xl:space-x-[112px] xl:ml-[120px]'>
                    <section className='w-full md:w-[367px] space-y-[30px]'>
                        <h4 className="text-[24px] md:text-[28px] lg:text-[34px] leading-[30px] text-secondary font-[700] md:leading-[42.5px] tracking-[0.0025em] font-lexend-deca">
                            Elevate Your Messaging Efficiency with Our Innovative Admin Tools
                        </h4>
                        <p className="section-paragraph">
                            Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih mudah dengan Admin Tools kami. Tingkatkan komunikasi Anda dan pelanggan dengan fitur pesan otomatis. Menyimpan kontak menjadi lebih praktis dengan fitur sinkronasi Google Concact. Dapatkan kendali penuh pesan dengan manajemen konten yang praktis.
                        </p>
                        <Link href="/register" className='flex'>   
                            <button className="rounded-s-[5px] bg-secondary py-[12px] px-[36px] text-[14px] font-[500] leading-[16.94px] tracking-[0.0125em] text-center text-light-gray">
                                Daftar Sekarang
                            </button>
                            <button className='bg-secondary rounded-e-[5px] px-[12px] border-l border-light-gray'>
                                <IoMdArrowForward className='h-[41px] text-light-gray'/>
                            </button>
                        </Link>
                    </section>
                    <section className="relative w-full h-[199.94px] md:w-[380px] md:h-[250px] lg:w-[558px] lg:h-[351px]">
                        <Image src="/images/hero-img.svg" fill priority={true} alt="hero-img" className="w-full h-full object-cover"/>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default GetStarted