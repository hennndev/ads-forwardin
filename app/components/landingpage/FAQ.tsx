"use client"
import { useState } from 'react'
import clsx from 'clsx'
import { IoSearch } from "react-icons/io5"
import { FiMinus, FiPlus } from "react-icons/fi"
import Sidenav from '@/app/components/landingpage/Sidenav'

const FAQ = () => {

    const [isAccordion, setIsAccordion] = useState<null | string>(null)

    const handleAccordion = (value: null | string) => {
        setIsAccordion(value)
    }

    return (
        <section id='faq' className='min-h-[741.3px] flex items-center justify-center xl:justify-start -mt-[30px] xl:pl-[83px]'>
            <section className="flexx">
                <Sidenav currentSection='faq' classesContainer='border-[#FFFFFF66]' classesChild='text-[#FFFFFF66]'/>

                <section className="flex-center flex-col xl:!ml-[350px] space-y-[62px]">
                    <h5 className='text-[24px] leading-[30px] font-[700] font-lexend-deca text-center text-white'>Frequently Asked Questions</h5>
                    <section className='w-[317px] md:w-[400px] xl:w-[512px] flex flex-col space-y-[35px]'>
                        <section className='w-full flexx space-x-[11px]'>
                            <input type="text" className='outline-none flex-1 bg-white h-[37px] rounded-[5.16px] border-[1.03px] border-solid border-[#3366FF] text-secondary px-[10px] text-[14px]'/>
                            <IoSearch className='text-white text-2xl leading-[17.77px] '/>
                        </section>

                        <section className='flex flex-col space-y-[10px]'>
                            {/* accordion1 */}
                            <section className='py-[13px] px-[14px] bg-white rounded-[5px] flex flex-col space-y-[9px]'>
                                <section className="flex-between">
                                    <p className='text-secondary text-[16px] font-[700] leading-[19.36px] tracking-[0.0015em]'>
                                        Apa itu Forwardin?
                                    </p>
                                    <button className='w-[22px] h-[22px] bg-primary flex-center cursor-pointer' onClick={() => handleAccordion(isAccordion === 'accord1' ? null : 'accord1')}>
                                        {isAccordion === 'accord1' ? 
                                            <FiMinus className='text-lg text-white text-center'/>  :
                                            <FiPlus className='text-lg text-white text-center'/>
                                        }
                                    </button>
                                </section>
                                <div className={clsx(isAccordion === 'accord1' ? 'inline-flex' : 'hidden')}>
                                    <p className='text-secondary text-[12px] font-[500] leading-[14.52px] tracking-[0.005em]'>
                                        Forwardin adalah sebuah platform alat pengelolaan pesan WhatsApp yang dirancang untuk membantu Anda mengirim pesan ke banyak nomor dan grup WhatsApp secara bersamaan. Forwardin juga menyediakan berbagai fitur canggih seperti auto-reply, fitur broadcast, manajemen kampanye, serta sinkronisasi kontak WhatsApp dan kontak Google.
                                    </p>
                                </div>
                            </section>
                            


                            {/* accordion2 */}
                            <section className='py-[13px] px-[14px] bg-white rounded-[5px] flex flex-col space-y-[9px]'>
                                <section className="flex-between">
                                    <p className='text-secondary text-[16px] font-[700] leading-[19.36px] tracking-[0.0015em]'>
                                        Apakah Forwardin cocok untuk saya?
                                    </p>
                                    <button className='w-[22px] h-[22px] bg-primary flex-center cursor-pointer' onClick={() => handleAccordion(isAccordion === 'accord2' ? null : 'accord2')}>
                                        {isAccordion === 'accord2' ? 
                                            <FiMinus className='text-lg text-white text-center'/>  :
                                            <FiPlus className='text-lg text-white text-center'/>
                                        }
                                    </button>
                                </section>      
                                <section className={clsx(isAccordion === 'accord2' ? 'inline-flex' : 'hidden')}>
                                    <p className='text-secondary text-[12px] font-[500] leading-[14.52px] tracking-[0.005em]'>
                                        Forwardin adalah sebuah platform alat pengelolaan pesan WhatsApp yang dirancang untuk membantu Anda mengirim pesan ke banyak nomor dan grup WhatsApp secara bersamaan. Forwardin juga menyediakan berbagai fitur canggih seperti auto-reply, fitur broadcast, manajemen kampanye, serta sinkronisasi kontak WhatsApp dan kontak Google.
                                    </p>
                                </section>
                            </section>


                            <section className='py-[13px] px-[14px] bg-white rounded-[5px] flex flex-col space-y-[9px] '>
                                <section className="flex-between">
                                    <p className='text-secondary text-[16px] font-[700] leading-[19.36px] tracking-[0.0015em]'>
                                        Apakah Forwardin perlu di-install ke komputer?
                                    </p>
                                    <button className='w-[22px] h-[22px] bg-primary flex-center cursor-pointer' onClick={() => handleAccordion(isAccordion === 'accord3' ? null : 'accord3')}>
                                        {isAccordion === 'accord3' ? 
                                            <FiMinus className='text-lg text-white text-center'/>  :
                                            <FiPlus className='text-lg text-white text-center'/>
                                        }
                                    </button>
                                </section>

                                <section className={clsx(isAccordion === 'accord3' ? 'inline-flex' : 'hidden')}>
                                    <p className='text-secondary text-[12px] font-[500] leading-[14.52px] tracking-[0.005em]'>
                                        Forwardin adalah sebuah platform alat pengelolaan pesan WhatsApp yang dirancang untuk membantu Anda mengirim pesan ke banyak nomor dan grup WhatsApp secara bersamaan. Forwardin juga menyediakan berbagai fitur canggih seperti auto-reply, fitur broadcast, manajemen kampanye, serta sinkronisasi kontak WhatsApp dan kontak Google.
                                    </p>
                                </section>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
            
        </section>
    )
}

export default FAQ