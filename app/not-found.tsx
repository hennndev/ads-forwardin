import React from 'react'
import Link from 'next/link'

export const metadata = {
    title: "Page not found"
}
const NotFound = () => {
    return (
        <section className='flex-center'>
            <h1 className='text-secondar text-lg leading-[16.94px]'>Page not found</h1>
        </section>
    )
}
export default NotFound