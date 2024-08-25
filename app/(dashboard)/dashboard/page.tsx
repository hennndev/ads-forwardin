import React from 'react'
import dynamic from 'next/dynamic'
import Header from '@/app/components/dashboard/Header'
import StarterInfo from '@/app/components/dashboard/StarterInfo'
import LastMessage from '@/app/components/dashboard/LastMessage'
const Analytic = dynamic(() => import('@/app/components/dashboard/analytic/Analytic'))


export const metadata = {
    title: 'FORWARDIN | Dashboard'
}

const Dashboard = () => {
    return (
        <section className=''>
            <Header/>
            <section className='flex space-x-[15px] mt-10'>
                <StarterInfo/>
                <LastMessage/>
            </section>
            <Analytic/>
        </section>
    )
}

export default Dashboard