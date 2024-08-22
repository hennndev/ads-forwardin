"use client"
import React from 'react'
import Sidenav from '@/app/components/landingpage/Sidenav'
import WhiteLogo from '@/app/components/ui/logo/WhiteLogo'

const ContactUs = () => {
    return (
        <section id='contactus' className='h-auto mt-[50px] xl:mt-[150px] flex items-center justify-center xl:justify-start xl:pl-[83px]'>
            <section className="flex min-h-[441px]">
                <Sidenav currentSection='contactus' classesContainer='border-[#FFFFFF66] self-start' classesChild='text-[#FFFFFF66]'/>


                <section className='flex flex-col lg:flex-row justify-between space-y-[47px] lg:space-y-0 w-[316px] lg:w-[800px] xl:w-[995px] min-h-[200px] xl:ml-[120px]'>

                    <section className='w-full lg:w-[280px] xl:w-[351.34px] h-[201.12px] flex-between items-start flex-col'>
                        <WhiteLogo/>
                        <p className='text-white text-[12px] font-[500] leading-[14.52px] tracking-[0.005em]'>
                            Fowardin is your ultimate communication management solution. We empower businesses of all sizes with efficient message forwarding, streamlined contact management, and powerful campaign scheduling. Our mission is to simplify your communication processes, helping you engage with your audience effectively and effortlessly. Join us in transforming your communication game today!
                        </p>
                    </section>
                    <section className='w-[258.86px] h-[181.77px] flex-between items-start flex-col space-y-[21.39px]'>
                        <p className='text-white text-[16px] font-[700] leading-[19.36px] tracking-[0.0015em]'>Contact Us</p>
                        <p className='text-white text-[12px] font-[500] leading-[14.52px] tracking-[0.005em]'>
                            Join our mailing list to receive updates, exclusive content, and early access to upcoming events. By signing up, you become an integral part of our community, spreading the message of compassion and making a difference.
                        </p>
                        <section className='flex flex-col'>
                            <p className='text-[12px] font-[500] leading-[14.52px] tracking-[0.005em] text-white'>Email: info@fowardin</p>
                            <p className='text-[12px] font-[500] leading-[14.52px] tracking-[0.005em] text-white'>Phone: +1 (123) 456-7890 </p>
                        </section>
                    </section>
                    <section className='w-[167.02px] h-[90.83px] flex-between items-start flex-col'>
                        <p className='text-white text-[16px] font-[700] leading-[19.36px] tracking-[0.0015em]'>Let's Talk</p>
                        <section className='flex flex-col'>
                            <p className='text-white text-[12.22px] font-[400] leading-[14.79px]'>Facebook</p>
                            <p className='text-white text-[12.22px] font-[400] leading-[14.79px]'>Instagram</p>
                            <p className='text-white text-[12.22px] font-[400] leading-[14.79px]'>Twitter</p>
                            
                        </section>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default ContactUs