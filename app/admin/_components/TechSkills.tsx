'use client'

import { Spinner } from '@/components/Spinner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {useFetch } from '@/hook/useFetch'
import { useMutation } from '@tanstack/react-query'
import { X } from 'lucide-react'
import React, { useState } from 'react'

export const TechSkills = () => {
    const { onAddTechSkills } = useFetch()
    const [value, setValue] = useState<string>("")
    const [techs, setTechs] = useState<string[]>([])

    const projectId = typeof window !== 'undefined' ? localStorage.getItem("project-id") : null;

    const onAddTech = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (value.trim() !== "") {
            setTechs((prevTechs) => [...prevTechs, value])
            setValue("")
        }
    }

    const deleteTech = (index: number) => {
        const updatedTechs = techs.filter((_, i) => i !== index)
        setTechs(updatedTechs)
    }

    const { mutate, isPending } = useMutation({
        mutationKey: ["addSkillsToProject"],
        mutationFn: (techs: any) => onAddTechSkills(`https://profile-yd-108.onrender.com/api/post/add-tech-skills/project/${projectId}`, {
            skills : techs
        }), // Ensure your function handles an array
    })

    return (
        <section className='p-5 bg-stone-600/50 rounded-md'>
            <h3>Add the Tech Skills used in the Project</h3>
            <br />
            <form onSubmit={onAddTech}>
                <Input 
                    placeholder='Enter tech name..'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </form>
            <div className='mt-4'>
                {techs.map((ele, index) => (
                    <Button 
                        key={index} 
                        variant="secondary" 
                        className='mr-3'
                    >
                        {ele}
                        <button 
                            type="button" 
                            onClick={() => deleteTech(index)}
                            className="ml-2 p-1"
                        >
                            <X className='w-4 h-4' />
                        </button>
                    </Button>
                ))}
            </div>
            <br />
            <Button 
                variant="green" 
                disabled={!techs.length} 
                onClick={() => mutate(techs)}
            >
                {isPending ? <Spinner color="light" /> : "Submit"}
            </Button>
        </section>
    )
}
