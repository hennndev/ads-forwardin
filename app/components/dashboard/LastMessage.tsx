"use client"
import React from 'react'
import { FaUser  } from "react-icons/fa6"

const LastMessage = () => {
    return (
        <section className='bg-white dark:bg-[#0F0E0E] flex-1 p-[15px]'>
            <h6 className='text-secondary font-nunito-sans dark:text-white text-[16px] font-[700] leading-[21.82px] tracking-[0.0125em]'>
                Pesan Terakhir
            </h6>
            <div className='mt-3 flex flex-col space-y-[7px]'>
                <div className='bg-[#F3F5F8] dark:bg-[#31363F] flex-between rounded-[10px] p-3'>
                    <div className='flexx space-x-[10px]'>
                        <div className='rounded-full bg-primary p-2'>       
                            <FaUser className='text-md text-white'/>
                        </div> 
                        <div className='flex flex-col space-y-[4px]'>
                            <p className='text-secondary dark:text-white text-[10px] font-[700] leading-[12.1px] tracking-[0.004em]'>Anda</p>
                            <p className='text-secondary dark:text-white text-[10px] font-[400] leading-[12.1px] tracking-[0.004em]'>Hai, apa kabarmu hari ini? Semoga...</p>
                        </div>
                    </div>
                    <div className='bg-primary py-[2px] px-[5px] rounded-[5px]'>
                        <p className='text-white text-[10px] font-[400] leading-[12.1px] tracking-[0.004em]'>Terkirim</p>
                    </div>
                </div>

                <div className='bg-[#F3F5F8] dark:bg-[#31363F] flex-between rounded-[10px] p-3'>
                    <div className='flexx space-x-[10px]'>
                        <div className='rounded-full bg-primary p-2'>       
                            <FaUser className='text-md text-white'/>
                        </div> 
                        <div className='flex flex-col space-y-[4px]'>
                            <p className='text-secondary dark:text-white text-[10px] font-[700] leading-[12.1px] tracking-[0.004em]'>Anda</p>
                            <p className='text-secondary dark:text-white text-[10px] font-[400] leading-[12.1px] tracking-[0.004em]'>Hai, apa kabarmu hari ini? Semoga...</p>
                        </div>
                    </div>
                    <div className='bg-primary py-[2px] px-[5px] rounded-[5px]'>
                        <p className='text-white text-[10px] font-[400] leading-[12.1px] tracking-[0.004em]'>Terkirim</p>
                    </div>
                </div>

                <div className='bg-[#F3F5F8] dark:bg-[#31363F] flex-between rounded-[10px] p-3'>
                    <div className='flexx space-x-[10px]'>
                        <div className='rounded-full bg-primary p-2'>       
                            <FaUser className='text-md text-white'/>
                        </div> 
                        <div className='flex flex-col space-y-[4px]'>
                            <p className='text-secondary dark:text-white text-[10px] font-[700] leading-[12.1px] tracking-[0.004em]'>Ihsanul Afkar</p>
                            <p className='text-secondary dark:text-white text-[10px] font-[400] leading-[12.1px] tracking-[0.004em]'>Hai, apa kabarmu hari ini? Semoga...</p>
                        </div>
                    </div>
                    <div className='bg-[#4FBEAB] py-[2px] px-[5px] rounded-[5px]'>
                        <p className='text-white text-[10px] font-[400] leading-[12.1px] tracking-[0.004em]'>Terkirim</p>
                    </div>
                </div>

            </div>
            <p className='text-[14px] font-[500] leading-[16.94px] tracking-[0.00125em] text-center mt-5 text-primary dark:text-blue-400'>Tampilkan Lainnya</p>
        </section>
    )
}

export default LastMessage