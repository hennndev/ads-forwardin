import React, { Fragment} from 'react'
import GetStarted from '@/app/components/landingpage/GetStarted'
import Broadcast from '@/app/components/landingpage/Broadcast'
import Campaign from '@/app/components/landingpage/Campaign'
import AutoReply from '@/app/components/landingpage/AutoReply'
import Opportunity from '@/app/components/landingpage/Opportunity'
import Pricing from '@/app/components/landingpage/Pricing'
import FAQ from '@/app/components/landingpage/FAQ'
import ContactUs from '@/app/components/landingpage/ContactUs'

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
            <section className='h-[1385px] bg-footer-bg-image bg-cover bg-center bg-no-repeat'>
                <FAQ/>
                <ContactUs/>
            </section>
        </Fragment>
    )
}

export default Homepage