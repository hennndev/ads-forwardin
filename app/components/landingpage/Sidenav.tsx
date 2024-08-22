import React from 'react'
import clsx from 'clsx'
import { sidebarNav } from '@/app/utils/utils'

type PropsTypes = {
    currentSection: string
    classesContainer?: string
    classesChild?: string
}

const Sidenav = ({currentSection, classesContainer, classesChild}: PropsTypes) => {
    return (
        <aside 
            className={clsx('hidden xl:flex flex-col space-y-3 w-[97px] border-l-[1.5px] border-solid border-[#00000066] pl-[10px]', classesContainer ? classesContainer : '')}>
            {sidebarNav.map(obj => (
                <a 
                    href={obj.href} 
                    key={obj.id} 
                    className={clsx('text-[14px] font-[500] leading-[16.94px] tracking-[0.0025em] text-left', 
                        currentSection === obj.title.toLowerCase().replace(' ', '') ? 'text-secondary' : 'text-[#00000066]', 
                        classesChild ? currentSection === obj.title.toLowerCase().replace(' ', '') ? 
                            `!text-white ${classesChild}` : classesChild 
                        : '')}>
                    {obj.title}
                </a>
            ))}
        </aside>
    )
}

export default Sidenav