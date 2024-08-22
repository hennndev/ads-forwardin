"use client"
import { useState } from 'react'
import clsx from 'clsx'
import { pricingData } from '@/app/utils/utils'
import { pricingIcons } from '@/app/utils/utils'
import Sidenav from '@/app/components/landingpage/Sidenav'

const Pricing = () => {

    const [pricingToggle, setPricingToggle] = useState<'monthly' | 'yearly'>('yearly')

    const choosePricing = (value: 'monthly' | 'yearly') => {
        setPricingToggle(value)
    }

    return (
        <section id='pricing' className='mt-[120px] lg:mt-[30px] min-h-[740px] bg-gradient-pricing flex items-center justify-center xl:justify-start xl:pl-[83px] pb-[100px]'>
            <section className='flexx'>
                <Sidenav currentSection='pricing'/>

                <section className='flex-center flex-col xl:ml-[120px] space-y-[40px] md:space-y-[20px]'>
                    <h4 className='hidden lg:inline-flex text-secondary text-[34px] font-[700] leading-[42.5px] tracking-[0.025em] text-center font-lexend-deca'>
                        Our Pricing
                    </h4>
                    <div className="flex-center flex-col lg:hidden space-y-[5px]">
                        <h6 className='inline-flex text-secondary text-[20px] font-[600] leading-[25px] tracking-[0.0015em] font-lexend-deca text-center'>Our Pricing</h6>
                        <h4 className='inline-flex section-title text-center'>Subscription</h4>
                    </div>

                    <section className='flexx space-x-[9px] shadow-pricing-toggle rounded-full bg-white py-[6px] px-[10px]'>
                        <div className={clsx('rounded-[20px] py-[10px] px-[25px]', pricingToggle === 'monthly' ? 'bg-primary' : 'bg-transparent')}>
                            <label 
                                htmlFor="monthly" 
                                className={clsx('text-[14px] font-[500] leading-[16.94px] tracking-[0.0125em] cursor-pointer', pricingToggle === 'monthly' ? 'text-white' : 'text-secondary')}>
                                Monthly
                            </label>
                            <input type="radio" id="monthly" checked={pricingToggle === 'monthly'} className='hidden' onChange={() => choosePricing('monthly')}/>
                        </div>
                        <div className={clsx('rounded-[20px] py-[10px] px-[25px]', pricingToggle === 'yearly' ? 'bg-primary' : 'bg-transparent')}>
                            <label 
                                htmlFor="yearly" 
                                className={clsx('text-[14px] font-[500] leading-[16.94px] tracking-[0.0125em] cursor-pointer', pricingToggle === 'yearly' ? 'text-white' : 'text-secondary')}>
                                Yearly
                            </label>
                            <input type="radio" id="yearly" checked={pricingToggle === 'yearly'} className='hidden' onChange={() => choosePricing('yearly')}/>
                        </div>
                    </section>

                    <section className='hidden md:inline-flex bg-[#E6E8F0] p-[8px] rounded-[10px]'>
                        <p className='text-[12px] font-[500] leading-[14.52px] tracking-[0.005em] text-center text-primary'>Hemat hingga 25% dengan paket tahunan</p>
                    </section>

                    <section className='flex-center flex-col md:flex-row md:flex-wrap space-y-[4.59px] lg:space-y-0 lg:space-x-[4.59px]'>
                        {pricingData.map(obj => (
                            <article key={obj.id} className={clsx('flex flex-col space-y-[16.88px] px-[16.88px] pt-[16.88px] pb-[21.1px] rounded-[8.44px] w-[244.81px] h-[470.01px]', obj.title === 'basic' ? 'bg-white shadow-pricing-card' : 'bg-transparent')}>

                                <section className='flex flex-col space-y-[15.1px]'>
                                    <section className='flex flex-col space-y-[4.22px]'>
                                        <h5 className='text-[20.26px] text-secondary font-lexend-deca font-[700] leading-[25.33px] capitalize'>{obj.title}</h5>
                                        <p className='text-secondary font-[500] text-[10.13px] leading-[12.26px] tracking-[0.005em]'>{obj.description}</p>
                                    </section>
                                    <section>
                                        <h5 className='text-secondary text-[20.26px] leading-[25.33px] font-[700] font-lexend-deca mb-[6.75px]'>
                                            {obj.pricePerMonth === null ? 'Gratis' : `Rp. ${obj.pricePerMonth.toLocaleString()}`} 
                                            {obj.pricePerMonth && <span className='font-[500] text-[11.82px] leading-[14.3px] tracking-[0.025em]'> /bulan</span>}
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
                                    {pricingIcons.map(({Icon, ...obj}) => (
                                        <div className='flexx space-x-[6.75px]' key={obj.id}>
                                            <Icon/>
                                            <p className='text-[11.82px] font-[500] text-secondary leading-[14.3px] tracking-[0.0025em]'>{obj.title}</p>
                                        </div>
                                    ))}
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