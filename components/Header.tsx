import React from 'react'
import { Button } from './ui/button'
import { SendHorizontal } from 'lucide-react'

export const Header = () => {
    return (
        <header className=' lg:h-[4rem] md:h-[6rem] h-[5rem] fixed top-0 left-1/2 transform -translate-x-1/2  w-full z-50 px-[2rem] bg-stone-800 m-auto '>
                <main className=' flex items-center justify-between h-full'>
                    <div className=' flex items-center justify-start gap-2'>
                        <span className=' bg-red-500 w-5 h-5 rounded-full'></span>
                        <span className=' bg-orange-500 w-5 h-5 rounded-full'></span>
                        <span className=' bg-green-500 w-5 h-5 rounded-full'></span>
                    </div>
                    <Button variant={"green"} >
                        Contact me <SendHorizontal className=' ml-2 w-4 h-4' />
                    </Button>
                </main>
        </header>
    )
}
