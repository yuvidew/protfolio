"use client"

import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { useFetch } from '@/hook/useFetch'
import { Spinner } from '@/components/Spinner'

const FormSchema = z.object({
    title: z.string().min(2, {
        message: "Title must be at least 2 characters."
    }),
    github: z.string().min(2, {
        message: "github repo. url is required."
    }),
    live: z.string().min(2, {
        message: "live app url is required."
    })
})

export const ProjectTitle = () => {
    const {onCreateProjectTitle} = useFetch()
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            title: "",
            github: "",
            live: "",
        },
    })

    const { mutate , isPending} = useMutation({
        mutationKey : [" create project note"] ,
        mutationFn : (data : z.infer<typeof FormSchema>) => onCreateProjectTitle("" , data)
    })

    const onSubmit = (data : z.infer<typeof FormSchema>) => mutate(data)

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)} 
                className='p-5 bg-stone-600/50 rounded-md'
            >
                <h3>Create Project Note</h3>
                <br />
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Enter project title.." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="w-full  grid lg:grid-cols-2 gap-4 grid-cols-1 mt-[1.5rem]">
                    <FormField
                        control={form.control}
                        name="github"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Enter project github repo.." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="live"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Enter project live url.." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <br />
                <Button type="submit" variant={"green"}  className=' mt-4 '>
                    {isPending ? <Spinner color={"light"} /> : "Submit"}
                    {/* Submit */}
                </Button>
            </form>
        </Form>
    )
}
