"use client"
import React from 'react'
import Image from 'next/image'
import { pricingData } from '@/app/utils/utils'
import Sidenav from '@/app/components/landingpage/Sidenav'
import clsx from 'clsx'

const Pricing = () => {
    return (
        <section className='h-[740px] bg-gradient-pricing flex items-center -mt-[30px] space-x-[105px] pl-[83px]'>
            <section className='flexx'>
                <Sidenav/>
                <section className='flex-center flex-col ml-[120px] w-[993px] h-[633.01px]'>
                    <h4 className='text-secondary text-[34px] font-[700] leading-[42.5px] tracking-[0.25%] text-center w-[524px] font-lexend-deca mb-[58px]'>
                        Our Pricing
                    </h4>

                    <section className='flexx space-x-[4.59px] h-[450.01px]'>
                        {pricingData.map(obj => (
                            <article key={obj.id} className={clsx('flex flex-col space-y-[16.88px] px-[16.88px] pt-[16.88px] pb-[21.1px] rounded-[8.44px] w-[244.81px] h-[450.01px]', obj.title === 'basic' ? 'bg-white shadow-pricing-card' : 'bg-transparent')}>

                                <section>
                                    <section className='flex flex-col space-y-[4.22px] mb-[21.1px]'>
                                        <h5 className='text-[20.26px] text-secondary font-lexend-deca font-[700] leading-[25.33px] capitalize'>{obj.title}</h5>
                                        <p className='text-secondary font-[500] text-[10.13px] leading-[12.26px] tracking-[0.5%]'>{obj.description}</p>
                                    </section>

                                    <section>
                                        <h5 className='text-secondary text-[20.26px] leading-[25.33px] font-[700] font-lexend-deca mb-[6.75px]'>
                                            {obj.pricePerMonth === null ? 'Gratis' : `Rp. ${obj.pricePerMonth.toLocaleString()}`} 
                                            {obj.pricePerMonth && <span className='font-[500] text-[11.82px] leading-[14.3px] tracking-[0.25%]'> /bulan</span>}
                                        </h5>
                                        <h6 className='text-[#777C88] text-[11.82px] leading-[14.3px] font-[600]'>
                                            {obj.pricePerYear ? `Rp. ${obj.pricePerYear.toLocaleString()} /tahun` : '-'} 
                                        </h6>
                                    </section>
                                </section>

                                <button className={clsx('w-full rounded-[4.22px] py-[10.13px] px-[30.39px] text-white text-[13px]', obj.title === 'basic' ? 'bg-[#FFB020]' : 'bg-primary')}>
                                    {obj.title !== 'starter' ? 'Get Started' : 'Start Now'}
                                </button>


                                <section className='flex flex-col space-y-[10.13px]'>
                                    <p className='text-[11.82px] font-[500] text-secondary leading-[14.3px] tracking-[0.25%]'>Auto reply</p>
                                    <p className='text-[11.82px] font-[500] text-secondary leading-[14.3px] tracking-[0.25%]'>Broadcast</p>
                                    <p className='text-[11.82px] font-[500] text-secondary leading-[14.3px] tracking-[0.25%]'>Campaign</p>
                                    <p className='text-[11.82px] font-[500] text-secondary leading-[14.3px] tracking-[0.25%]'>Contact</p>
                                    <p className='text-[11.82px] font-[500] text-secondary leading-[14.3px] tracking-[0.25%]'>Device</p>
                                    <p className='text-[11.82px] font-[500] text-secondary leading-[14.3px] tracking-[0.25%]'>Excel / CSV Contact Import</p>
                                    <p className='text-[11.82px] font-[500] text-secondary leading-[14.3px] tracking-[0.25%]'>Google Contact Sync</p>
                                </section>
                            </article>
                        ))}
                    </section>
                </section>
            </section>
        </section>
    )
}

export default Pricing