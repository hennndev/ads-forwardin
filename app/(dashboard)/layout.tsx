import React from 'react'
import Navbar from '@/app/components/landingpage/Navbar'
import ThemeWrapper from "@/app/components/wrapper/ThemeWrapper"

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <ThemeWrapper enableSystem={false} attribute="class">
            <Navbar/>
            <main>
                {children}
            </main>
        </ThemeWrapper>
    )
}
export default DashboardLayout