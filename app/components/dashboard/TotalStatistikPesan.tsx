"use client"
import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

const data = {
    labels: [
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }]
}

ChartJS.register(ArcElement, Tooltip, Legend)

const TotalStatistikPesan = () => {
    return (
        <div className='flex-1 flex justify-between rounded-[5px] border border-solid border-[#B0B4C5] dark:border-[#31363F] py-[30px] px-[30px] space-y-[25px]'>
            <div className='w-[208px] flex justify-between flex-col'>
                <p className='text-[16px] font-[700] leading-[19.36px] tracking-[0.0015em]'>
                    Total statistik pesan
                </p>
                <div className='flexx flex-wrap'>
                    <p className='text-secondary dark:text-white text-[10px] font-[400] leading-[12.1px] tracking-[0.04em] mr-[12px] mb-[12px]'>
                        Pesan Kelar <br /> <span className='text-[14px] font-[600] leading-[16.94px] tracking-[0.001em]'>24</span>
                    </p>
                    <p className='text-secondary dark:text-white text-[10px] font-[400] leading-[12.1px] tracking-[0.04em] mr-[12px] mb-[12px]'>
                        Pesan Masuk <br /> <span className='text-[14px] font-[600] leading-[16.94px] tracking-[0.001em]'>7</span>
                    </p>
                    <p className='text-secondary dark:text-white text-[10px] font-[400] leading-[12.1px] tracking-[0.04em] mr-[12px] mb-[12px]'>
                        Pesan Masuk <br /> <span className='text-[14px] font-[600] leading-[16.94px] tracking-[0.001em]'>7</span>
                    </p>
                </div>
            </div>
            <div className='w-[129px] h-[129px]'>
                <Doughnut data={data} />
            </div>
        </div>
    )
}

export default TotalStatistikPesan