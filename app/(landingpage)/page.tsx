import React, { Fragment} from 'react'
import dynamic from 'next/dynamic'
import GetStarted from '@/app/components/landingpage/GetStarted'
const FAQ = dynamic(() => import('@/app/components/landingpage/FAQ'))
const Footer = dynamic(() => import('@/app/components/landingpage/Footer'))
const Pricing = dynamic(() => import('@/app/components/landingpage/Pricing'))
const Campaign = dynamic(() => import('@/app/components/landingpage/Campaign'))
const Broadcast = dynamic(() => import('@/app/components/landingpage/Broadcast'))
const AutoReply = dynamic(() => import('@/app/components/landingpage/AutoReply'))
const Opportunity = dynamic(() => import('@/app/components/landingpage/Opportunity'))
const ContactUs = dynamic(() => import('@/app/components/landingpage/ContactUs'))

export const metadata = {
    title: "FORWARDIN | Homepage"
}

const Homepage = () => {
    return (
        <Fragment>
            <GetStarted/>
            <Broadcast/>
            <Campaign/>
            <AutoReply/>
            <Opportunity/>
            <Pricing/>
            <section className='min-h-[1385px] bg-footer-bg-image bg-cover bg-center bg-no-repeat'>
                <FAQ/>
                <ContactUs/>
                <Footer/>
            </section>
        </Fragment>
    )
}

export default Homepage