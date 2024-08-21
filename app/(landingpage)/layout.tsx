import React, { Fragment } from 'react'
import Navbar from '@/app/components/landingpage/Navbar'

const LandingPageLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <Fragment>
            <Navbar/>
            <main>
                {children}
            </main>
        </Fragment>
    )
}

export default LandingPageLayout