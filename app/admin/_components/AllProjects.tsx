"use client";

import React from 'react';
import { Item, useFetch } from '@/hook/useFetch';
import { useQuery } from '@tanstack/react-query';
import { Skeleton } from "@/components/ui/skeleton";
import { enqueueSnackbar } from 'notistack';

import {
    Card,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator"

import { Button } from '@/components/ui/button';
import { Edit, Trash2 } from 'lucide-react';
import Link from 'next/link';



export const AllProjects = () => {
    const { fetchData } = useFetch();
    
    const { data, isLoading, isError } = useQuery<Item[]>({
        queryKey:['fetch cover letters'],
        queryFn: () => fetchData(`https://profile-yd-108.onrender.com/api/get/projects`),
    });

    if (isLoading) {
        return (
            <section className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2">
                {[1, 2, 3, 4, 5].map((ele) => (
                    <Skeleton key={ele} className="h-[15rem]" />
                ))}
            </section>
        );
    }

    if (isError || !data) {
        enqueueSnackbar("Failed to Fetch Projects", { variant: 'error' });
        return null;
    }

    return (
        <section className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2">
            {data.map((ele : any, index) => (
                <Card key={index} className=' overflow-hidden'>
                    <img src={ele.img} alt={`${ele.title} image`} />
                    <CardHeader>
                        <CardTitle className=' text-[1rem] font-light '>
                            <Link href={`/admin/${ele._id}`}>
                                {ele.title}
                            </Link>
                        </CardTitle>
                    </CardHeader>

                    <CardFooter >
                        <Separator/>
                        <div className='flex items-center justify-end gap-2 mt-2'>
                            <Button variant={"destructive"} className='p-2'  size={"icon"} >
                                <Trash2 className=' w-4 h-4' />
                            </Button>
                            <Button variant={"ghost"} className='p-2' size={"icon"} >
                                <Edit className='w-4 h-4' />
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            ))}
        </section>
    );
};
