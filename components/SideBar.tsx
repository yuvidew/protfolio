"use client"

import { FileCode, FileText, Home, Waypoints } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

export const SideBar = () => {
    const [pathName , setPathName] = useState("#home")
    const links = [
        {
            icon : <Home className='w-5 h-5' />,
            text : "Home",
            href : "#home"
        },
        {
            icon : <FileCode  className='w-5 h-5' />,
            text : "Projects",
            href : "#project"
        },
        {
            icon : <FileText  className='w-5 h-5' />,
            text : "Blog's",
            href : "/blog"
        },
    ]

    return (
        <div className=' h-[100vh] w-[25rem] px-[1.5rem] fixed top-0 left-0'>
            <main className='mt-[5rem] p-[1rem] rounded-md w-full bg-stone-700 '>
                <div className=''>
                    {links.map((ele , index) => (
                        <Link 
                            href={ele.href} 
                            key={index} 
                            className={` flex items-center gap-2 p-3 rounded-md mb-2 text-stone-200 ${pathName.includes(ele.href) ? "bg-stone-800" : " opacity-60"}`}
                            onClick={() => setPathName(ele.href)}
                        >
                            {ele.icon}
                            {ele.text}
                        </Link>
                    ))}
                </div>
                <h3 className=' flex items-center gap-2 mt-3 p-3'> <Waypoints className='w-5 h-5 ' /> Social Media</h3>
                <div className=' ml-4'></div>
            </main>
        </div>
    )
}
