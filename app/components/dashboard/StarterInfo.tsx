import React from 'react'

const StarterInfo = () => {
    return (
        <section className='h-auto flex flex-col justify-between bg-white dark:bg-[#0F0E0E] w-[719px] pt-[35px] pb-[15px] px-[30px]'>
            <div className="flex flex-col space-y-[35px]">
                <div className='flex-between'>
                    <div className='flexx space-x-[22px]'>
                        <p className='w-[56px] text-[12px] leading-[14.52px] font-[500]'>Paket saat ini</p>
                        <div className='flexx space-x-[6.67px]'>
                            <h5 className='text-secondary dark:text-white text-[24px] font-[700] font-lexend-deca leading-[30px]'>Starter</h5>
                            <div className='bg-secondary dark:bg-white py-[2px] px-[5px] rounded-[6.67px]'>
                                <p className='text-white dark:text-secondary text-[10px] leading-[12.1px] font-[400] tracking-[0.004em] text-center'>Free</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-[3px]'>
                        <p className='text-[#777C88] dark:text-gray-400 text-[10px] font-[400] leading-[12.1px] tracking-[0.004em] text-right'>Aktif sampai dengan</p>
                        <p className='text-secondary dark:text-white font-nunito-sans text-[11px] font-[700] leading-[15px] tracking-[0.0125em] text-right'>Selasa, 29 Agustus 2023</p>
                    </div>
                </div>    
                <div className='flex-between'>
                    <div className='flexx space-x-[22px]'>
                        <p className='w-[56px] text-[12px] leading-[14.52px] font-[500]'>Devices</p>
                        <div className='flex flex-col space-y-[5px]'>
                            <div className="w-[242px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div className="bg-[#D14343] h-2.5 rounded-full w-[207px]"></div>
                            </div>
                            <p className='text-[#777C88] text-[10px] font-[400] leading-[12.1px] tracking-[0.04em]'>8 dari 10 device yang tersedia</p>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-[3px]'>
                        <p className='w-[211px] text-secondary dark:text-white font-nunito-sans text-[12px] font-[700] leading-[15px] tracking-[0.005em] text-right'>Upgrade paket untuk meningkatkan batasan fitur yang ada</p>
                    </div>
                </div> 

                <div className='flex-between'>
                    <div className='flexx space-x-[22px]'>
                        <p className='w-[56px] text-[12px] leading-[14.52px] font-[500]'>Contacts</p>
                        <div className='flex flex-col space-y-[5px]'>
                            <div className="w-[242px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div className="bg-[#4FBEAB] h-2.5 rounded-full w-[49.01px]"></div>
                            </div>
                            <p className='text-[#777C88] text-[10px] font-[400] leading-[12.1px] tracking-[0.04em]'>5 dari 100 kontak tersedia</p>
                        </div>
                    </div>
                    <button className='py-[12px] px-[55px] text-primary dark:text-blue-400 rounded-[5px] border border-solid border-primary dark:border-blue-400 text-[14px] leading-[16.94px] font-[500] tracking-[0.0125em] text-center'>
                        Upgrade Paket
                    </button>
                </div>    
               
            </div>

            <p className='text-[14px] font-[500] leading-[16.94px] tracking-[0.00125em] text-center mt-5 text-[#B0B4C5]'>
                Tampilkan kapasitas fitur lainnya
            </p>
        </section>
    )
}

export default StarterInfo