"use client"
import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js'


const data = {
    labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
    datasets: [
        {
            data: [0.6, 0.58, 0.61, 0.578, 0.62, 0.58, 0.59, 0.56, 0.54, 0.53, 0.51, 0.52],
            borderColor: "#3366FF",
            backgroundColor: 'rgba(51, 102, 255, 0.25)',
            fill: false,
            tension: 0.4
        }
    ]
}

const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false, // Disable the legend
        },
        title: {
            display: false, // Disable the title
        },
    },
    scales: {
        y: {
            min: 0,
            max: 1,
            beginAtZero: true,
            ticks: {
                stepSize: 0.1,
            },
        },
    },
  };

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const TrendInteraksiPesan = () => {
    return (
        <div className='flex flex-col space-y-[14px]'>
            <p className='text-[14px] font-[600] leading-[16.94px] tracking-[0.001em]'>Trend Interaksi Pesan</p>
            <Line data={data} options={options}/>
        </div>
    )
}

export default TrendInteraksiPesan