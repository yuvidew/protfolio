import Image from 'next/image'
import React from 'react'
import img from "@/public/yuvi.png"
import { Button } from '@/components/ui/button'
import { InstagramIcon, Linkedin, Twitter } from 'lucide-react'

export const Hero = () => {
    return (
        <div className=' overflow-hidden rounded-lg'>
            <section className={"hero relative  h-[15rem] rounded-lg overflow-hidden"}>
                <div className=' relative z-10 h-full flex items-center gap-[3rem] p-[5rem]'>
                    <div className='flex items-center justify-start w-[25%]'>
                        <Image 
                            src={img} 
                            alt='img'
                            className='w-[10rem] h-[10rem] border-[.3rem] border-yellow-400 rounded-full'
                        />
                    </div>
                    <div className=''>
                        <h1 className=' text-[1.6rem] text-stone-50 font-medium'>Yuvraj Dewangan</h1>
                        <p className=' opacity-80'>@Yuvidew108</p>
                        <div className=' mt-5 flex items-center gap-3'>
                            <Button variant={"instagram"} size={"icon"}>
                                <InstagramIcon className='w-5 h-5' />
                            </Button>
                            <Button variant={"twitter"} size={"icon"} >
                                <Twitter className='w-5 h-5' />
                            </Button>
                            <Button variant={"twitter"} size={"icon"} >
                                <Linkedin className='w-5 h-5' />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
