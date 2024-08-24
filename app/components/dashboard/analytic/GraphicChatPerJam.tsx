"use client"
import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js'


const data = {
    labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
    datasets: [
        {
            data: [0.6, 0.55, 0.7, 0.8, 0.65, 0.62, 0.51, 0.5, 0.9, 0.8, 0.4, 0.45, 0.67, 0.59, 0.71, 0.51, 0.44, 0.88, 0.5, 0.4, 0.77, 0.81, 0.91, 0.67],
            borderColor: "#3366FF",
            backgroundColor: 'rgba(51, 102, 255, 0.25)',
            fill: true
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

const GraphicChatPerJam = () => {
    return (
        <div className='flex flex-col space-y-[14px]'>
            <p className='text-[14px] font-[600] leading-[16.94px] tracking-[0.001em]'>Grafik chat perjam</p>
            <Line data={data} options={options}/>
        </div>
    )
}

export default GraphicChatPerJam