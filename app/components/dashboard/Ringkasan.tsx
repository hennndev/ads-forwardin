"use client"
import React from 'react'
import { FaChevronDown } from 'react-icons/fa6'

const Ringkasan = () => {
    return (
        <div className='w-[388px] rounded-[5px] border border-solid border-[#B0B4C5] dark:border-[#31363F] py-[30px] px-[30px] flex flex-col space-y-[25px]'>
            <p className='text-[16px] font-[700] leading-[19.36px] tracking-[0.0015em]'>Ringkasan  hari ini</p>

            <div className='flex space-x-[14px]'>
                <div className='flex-between w-[179px] bg-[#F3F5F8] dark:bg-[#31363F] py-[15px] px-[10px]'>
                    <p className='text-secondary dark:text-white text-[10px] font-[400] leading-[12.1px] tracking-[0.004em]'>
                        Device <br /> 
                        <span className='text-[14px] font-[600] leading-[16.94px] tracking-[0.001em]'>RMX3263</span>
                    </p>
                    <FaChevronDown/>
                </div>
                
                <div className='flex-center flex-1 bg-[#F3F5F8] rounded-[5px] dark:bg-[#31363F]'>
                    <p className='text-secondary dark:text-white text-[10px] font-[400] leading-[12.1px] tracking-[0.04em]'>
                        Aktif sejak <br />
                        <span className='text-[14px] font-[600] leading-[16.94px] tracking-[0.001em]'>29.8.2023</span>
                    </p>
                </div>
            </div>


            <div className='flex-between'>
                <p className='text-secondary dark:text-white text-[10px] font-[400] leading-[12.1px] tracking-[0.04em]'>
                    Pesan Kelar <br /> <span className='text-[14px] font-[600] leading-[16.94px] tracking-[0.001em]'>24</span>
                </p>
                <p className='text-secondary dark:text-white text-[10px] font-[400] leading-[12.1px] tracking-[0.04em]'>
                    Pesan Masuk <br /> <span className='text-[14px] font-[600] leading-[16.94px] tracking-[0.001em]'>7</span>
                </p>
                <p className='text-secondary dark:text-white text-[10px] font-[400] leading-[12.1px] tracking-[0.04em]'>
                    Pesan Gagal <br /> <span className='text-[14px] font-[600] leading-[16.94px] tracking-[0.001em]'>0</span>
                </p>
            </div>
        </div>
    )
}

export default Ringkasan