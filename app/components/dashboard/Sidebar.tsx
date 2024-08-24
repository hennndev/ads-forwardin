"use client"
import { useState } from 'react'
import clsx from 'clsx'
import { signOut } from 'next-auth/react'
import { FaCaretDown } from "react-icons/fa"
import { usePathname } from 'next/navigation'
import { sidebarItems } from '@/app/utils/utils'
import BlueLogo from '@/app/components/ui/logo/BlueLogo'


const Sidebar = () => {
    const pathname = usePathname().split('/').reverse()[0]
    const [showDropdownContacts, setShowDropdownContacts] = useState<boolean>(false)
    const [showDropdownMessages, setShowDropdownMessages] = useState<boolean>(false)

    const primary = sidebarItems.slice(0, 4)
    const tools = sidebarItems.slice(4, 10)
    const others = sidebarItems.slice(10)

    const handleClick = (child: boolean, title: string) => {
        if(child && title === 'Contacts') {
            setShowDropdownContacts(!showDropdownContacts)
        } else if(child && title === 'Message List') {
            setShowDropdownMessages(!showDropdownMessages)
        }
    }

    const handleLogout = () => signOut() 

    return (
        <aside className='sticky top-0 w-[239px] bg-white dark:bg-[#0F0E0E] py-[30px] px-[16px] h-screen scrollbar-hide overflow-y-auto'>
            <section className='flex flex-col space-y-[30px]'>
                <div className="flex-center">
                    <BlueLogo/>
                </div>
                
                <section className='flex flex-col space-y-[8px]'>
                    {primary.map(({Icon, ...obj}) => (
                        <div key={obj.title}>
                            <div 
                                className={clsx('group flex-between py-[12px] px-[23px] rounded-[12px] hover:bg-primary cursor-pointer', !obj.child && pathname === obj.title.toLowerCase() ? 'bg-primary' : '',
                                obj.child && obj.title === 'Contacts' && showDropdownContacts ? 'bg-[#F3F5F8] dark:bg-[#1F1F21] hover:dark:bg-[#1F1F21] hover:bg-[#F3F5F8]' : '',
                                obj.child && obj.title === 'Message List' && showDropdownMessages ? 'bg-[#F3F5F8] dark:bg-[#1F1F21] hover:dark:bg-[#1F1F21] hover:bg-[#F3F5F8]' : ''
                            )} 
                                onClick={() => handleClick(Boolean(obj?.child), obj.title)}>
                                <div className="flexx space-x-[10px]">
                                    <Icon 
                                        className={clsx('group-hover:text-white text-[17px]', !obj.child && pathname === obj.title.toLowerCase() ? 'text-white' : 'text-secondary dark:text-white',
                                            obj.child && obj.title === 'Contacts' && showDropdownContacts ? 'group-hover:!text-secondary group-hover:dark:!text-white' : '',
                                            obj.child && obj.title === 'Message List' && showDropdownMessages ? 'group-hover:!text-secondary group-hover:dark:!text-white' : '')}/>
                                    <p 
                                        className={clsx('group-hover:text-white text-[14px] font-[500] leading-[16.94px] tracking-[0.0125]', !obj.child && pathname === obj.title.toLowerCase() ? 'text-white' : 'text-secondary dark:text-white',
                                        obj.child && obj.title === 'Contacts' && showDropdownContacts ? 'group-hover:!text-secondary group-hover:dark:!text-white' : '',
                                        obj.child && obj.title === 'Message List' && showDropdownMessages ? 'group-hover:!text-secondary group-hover:dark:!text-white' : '')}>
                                        {obj.title}
                                    </p>
                                </div>
                                {obj.child && <FaCaretDown className={clsx('text-secondary dark:text-white group-hover:text-white text-[14px]', 
                                    obj.child && obj.title === 'Contacts' && showDropdownContacts ? 'group-hover:!text-secondary group-hover:dark:!text-white' : '',
                                    obj.child && obj.title === 'Message List' && showDropdownMessages ? 'group-hover:!text-secondary group-hover:dark:!text-white' : ''
                                )}/>}
                            </div>

                            {obj?.child && obj.title === 'Contacts' && showDropdownContacts && (
                                obj?.child.map(({Icon, ...obj}) => (
                                    <div 
                                        key={obj.title} 
                                        className='ml-[15px] group flex-between py-[12px] px-[23px] rounded-[12px] hover:bg-primary cursor-pointer'>
                                        <div className="flexx space-x-[10px]">
                                            <Icon 
                                                className='text-secondary dark:text-white group-hover:text-white text-[17px]'/>
                                            <p 
                                                className='text-secondary dark:text-white group-hover:text-white text-[14px] font-[500] leading-[16.94px] tracking-[0.0125]'>{obj.title}</p>
                                        </div>
                                    </div>
                                ))
                            )}
                            {obj?.child && obj.title === 'Message List' && showDropdownMessages && (
                                obj?.child.map(({Icon, ...obj}) => (
                                    <div 
                                        key={obj.title} 
                                        className='ml-[15px] group flex-between py-[12px] px-[23px] rounded-[12px] hover:bg-primary cursor-pointer'>
                                        <div className="flexx space-x-[10px]">
                                            <Icon 
                                                className='text-secondary dark:text-white group-hover:text-white text-[17px]'/>
                                            <p 
                                                className='text-secondary dark:text-white group-hover:text-white text-[14px] font-[500] leading-[16.94px] tracking-[0.0125]'>{obj.title}</p>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    ))}
                    <p className='text-[10px] font-[400] leading-[12.1px] tracking-[0.015em]'>Tools</p>
                    {tools.map(({Icon, ...obj}) => (
                        <div key={obj.title} className='group flexx space-x-[10px] py-[12px] px-[23px] rounded-[12px] hover:bg-primary cursor-pointer'>
                            <Icon className='text-secondary dark:text-white group-hover:text-white text-[17px]'/>
                            <p className='text-secondary dark:text-white group-hover:text-white text-[14px] font-[500] leading-[16.94px] tracking-[0.0125]'>{obj.title}</p>
                        </div>
                    ))}
                    <p className='text-[10px] font-[400] leading-[12.1px] tracking-[0.015em]'>Others</p>
                    {others.map(({Icon, ...obj}) => (
                        <div key={obj.title} className='group flexx space-x-[10px] py-[12px] px-[23px] rounded-[12px] hover:bg-primary cursor-pointer' onClick={() => obj.title === 'Logout' && handleLogout()}>
                            <Icon className='text-secondary dark:text-white group-hover:text-white text-[17px]'/>
                            <p className='text-secondary dark:text-white group-hover:text-white text-[14px] font-[500] leading-[16.94px] tracking-[0.0125]'>{obj.title}</p>
                        </div>
                    ))}
                </section>
            </section>
        </aside>
    )
}

export default Sidebar