'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Skills } from '@/hook/useFetch'
import { X } from 'lucide-react'
import React, { useState } from 'react'

export const TechSkills = () => {
    const [value, setValue] = useState<string>("")
    const [techs, setTechs] = useState<Skills[]>([])

    const onAddTech = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (value.trim() !== "") {
            setTechs((prevTechs) => [...prevTechs, value as unknown as Skills]);
            setValue("");
        }
    };

    const deleteTech = (index: number) => {
        let data = techs.filter((_, i) => i !== index);
        setTechs(data);
    };

    return (
        <section className='p-5 bg-stone-600/50 rounded-md'>
            <h3>Add the Tech Skills which is used in the Project</h3>
            <br />
            <form onSubmit={onAddTech}>
                <Input 
                    placeholder='Enter tech name..'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </form>
            <div className='mt-[1rem]'>
                {techs.map((ele: Skills, index) => (
                    <Button 
                        key={index} 
                        variant={"secondary"} 
                        className='mr-3'
                    >
                        {ele as unknown as string}
                        <X className='w-4 h-4 ml-2' onClick={() => deleteTech(index)} />
                    </Button>
                ))}
            </div>
            <br />
            <Button variant={"green"} disabled = {!techs.length ? true : false} >
                Submit
            </Button>
        </section>
    )
}
