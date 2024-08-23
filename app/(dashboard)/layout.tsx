import React from 'react'
import Badge from '@/app/components/dashboard/Badge'
import Sidebar from '@/app/components/dashboard/Sidebar'
import ThemeWrapper from "@/app/components/wrapper/ThemeWrapper"

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <ThemeWrapper attribute='class'>
            <main className='flex'>
                <Sidebar/>
                <section className='flex-1 bg-[#F3F5F8] dark:bg-[#000] py-[20px] px-[30px]'>
                    <Badge/>
                    {children}
                </section>
            </main>
        </ThemeWrapper>
    )
}
export default DashboardLayout