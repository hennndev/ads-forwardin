"use client"
import React from 'react'
import Ringkasan from './Ringkasan'
import AnalyticGraph from './AnalyticGraph'
import TotalStatistikPesan from './TotalStatistikPesan'

const Analytic = () => {
    return (
        <section className='flex flex-col space-y-[20px] bg-white dark:bg-[#0F0E0E] flex-1 p-[30px] mt-10'>
            <h5 className='text-secondary dark:text-white text-[24px] font-[700] leading-[30px] font-lexend-deca'>
                Analitik
            </h5>
            <section className='flex space-x-[15px]'>
                <Ringkasan/>
                <TotalStatistikPesan/>
            </section>
            <AnalyticGraph/>
        </section>
    )
}

export default Analytic