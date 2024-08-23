"use client"
import React from 'react'
import moment from 'moment'
import { FaRegCalendar } from "react-icons/fa6"
import { useSession } from 'next-auth/react'

const Header = () => {
    const session = useSession() 
    return (
        <div className='flex-between mt-10'>
            <h5 className='text-[24px] text-secondary dark:text-white font-[700] leading-[30px] font-lexend-deca'>Selamat Siang, {session.data?.user?.name}</h5>
            <div className='flexx space-x-[10px]'>
                <div className='flex flex-col'>
                    <p className='text-[12px] font-[500] text-[#B0B4C5] dark:text-gray-400 text-right self-end'>Tanggal hari ini</p>
                    <p className='text-[12px] font-[500] text-[#777C88] dark:text-gray-400 text-right self-end'>
                        {moment(new Date()).format('dddd, D MMMM YYYY')}
                    </p>
                </div>
                <FaRegCalendar className='text-[16px] text-secondary dark:text-white'/>
            </div>
        </div>
    )
}

export default Header