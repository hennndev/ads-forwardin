import React, { Fragment } from 'react'
import Header from '@/app/components/auth/Header'

const AuthLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <main className='bg-white lg:bg-section-primary min-h-screen flex flex-col'>
            <Header/>
            {children}
        </main>
    )
}

export default AuthLayout