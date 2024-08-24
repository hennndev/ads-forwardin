import React from 'react'
import Link from 'next/link'

export const metadata = {
    title: "Page not found"
}
const NotFound = () => {
    return (
        <section className='flex-center flex-col min-h-screen'>
            <h1 className='text-secondary text-lg leading-[16.94px] font-lexend-deca mb-6'>Page not found</h1>
            <Link href="/" className="bg-primary rounded-[5px] py-[12px] px-[36px] text-[14px] font-[500] leading-[16.94px] tracking-[0.0125em] text-center text-light-gray">
                Kembali
            </Link>
        </section>
    )
}
export default NotFound