import React from 'react'

type PropsTypes = {
    isHover: boolean
}

const DashboardIcon = () => {
    return (
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_885_528" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="-1" width="17" height="18">
                <rect y="-0.000366211" width="17" height="17" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_885_528)">
                <path d="M3.45121 15.558C2.93067 15.558 2.48506 15.3726 2.11437 15.002C1.74369 14.6313 1.55835 14.1857 1.55835 13.6651V3.45084C1.55835 2.9303 1.74369 2.4847 2.11437 2.11402C2.48506 1.74333 2.93067 1.55798 3.45121 1.55798H7.61192V15.558H3.45121ZM9.50478 15.558V8.55798H15.5583V13.6651C15.5583 14.1857 15.373 14.6313 15.0023 15.002C14.6316 15.3726 14.186 15.558 13.6655 15.558H9.50478ZM9.50478 6.66513V1.55798H13.6655C14.186 1.55798 14.6316 1.74333 15.0023 2.11402C15.373 2.4847 15.5583 2.9303 15.5583 3.45084V6.66513H9.50478Z"/>
            </g>
        </svg>

    )
}

export default DashboardIcon