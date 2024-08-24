import React from 'react'
import GraphicChatPerJam from './analytic/GraphicChatPerJam'

const AnalyticGraph = () => {
    return (
        <section className='rounded-[10px] border border-solid border-[#B0B4C5] dark:border-[#31363F] py-[27px] px-[23px] flex flex-col space-y-[10px]'>
            <div className='flex space-x-[14px] p-3'>
                <div className='bg-[#F3F5F8] dark:bg-[#31363F] w-[102px] h-[54px] flex items-center pl-4'>
                    <p className='text-secondary dark:text-white text-[10px] font-[400] leading-[12.1px] tracking-[0.004em]'>
                        Hari ini <br /> <span className='text-[14px] font-[600] leading-[16.94px] tracking-[0.001em]'>24</span>
                    </p>
                </div>
                <div className='bg-[#F3F5F8] dark:bg-[#31363F] w-[102px] h-[54px] flex items-center pl-4'>
                    <p className='text-secondary dark:text-white text-[10px] font-[400] leading-[12.1px] tracking-[0.004em]'>
                        Rata-rata harian <br /> <span className='text-[14px] font-[600] leading-[16.94px] tracking-[0.001em]'>7</span>
                    </p>
                </div>
                <div className='bg-[#F3F5F8] dark:bg-[#31363F] w-[102px] h-[54px] flex items-center pl-4'>
                    <p className='text-secondary dark:text-white text-[10px] font-[400] leading-[12.1px] tracking-[0.004em]'>
                        Bulan ini <br /> <span className='text-[14px] font-[600] leading-[16.94px] tracking-[0.001em]'>23</span>
                    </p>
                </div>
                <div className='bg-[#F3F5F8] dark:bg-[#31363F] w-[102px] h-[54px] flex items-center pl-4'>
                    <p className='text-secondary dark:text-white text-[10px] font-[400] leading-[12.1px] tracking-[0.004em]'>
                        Rata-rata waktu <br /> <span className='text-[14px] font-[600] leading-[16.94px] tracking-[0.001em]'>00:02:42</span>
                    </p>
                </div>
            </div>
            
            <GraphicChatPerJam/>
        </section>
    )
}

export default AnalyticGraph