"use client"

import React from 'react'
import { ref, getStorage, uploadBytes, getDownloadURL } from 'firebase/storage'
import { app } from '@/firebase'
import { useMutation } from '@tanstack/react-query';
import { z } from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { useFetch } from '@/hook/useFetch';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/Spinner';
import { Input } from '@/components/ui/input';

const imgDB = getStorage(app)

interface objType {
    image: string | undefined
}

const FormSchema = z.object({
    image: z
        .any()
        .refine((files) => files && files.length > 0, "You must upload project image."),
});

export const UploadImg = () => {
    const {onUploadImage} = useFetch()
    const projectId = typeof window !== 'undefined' ? localStorage.getItem("project-id") : null;
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            image: null,
        },
    });

    const onConvertImageToUrl = async (img: File) => {
        try {
            const imageRef = ref(imgDB, `Img/${Math.floor(Math.random() * 1e10)}`);
            const snapshot = await uploadBytes(imageRef, img);
            const url = await getDownloadURL(snapshot.ref);
            return url
        } catch (error) {
            console.error("Error uploading image:", error);

        }
    };

    const onUploadResume = async (data: z.infer<typeof FormSchema>) => {
        let obj : objType = {
            image : undefined
        }
        try {
            const file = data.image[0];
            obj.image = await onConvertImageToUrl(file);

            if (obj.image) {
                await onUploadImage(`https://profile-yd-108.onrender.com/api/post/add-project-image/project/${projectId}`, obj);
            } else {
                console.error("Image URL is not available.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    }

    const {mutate , isPending} = useMutation({
        mutationKey : ["upload Resume"],
        mutationFn : onUploadResume
    })

    const onSubmit = async (data: z.infer<typeof FormSchema>) => {
        mutate(data)
    };
    return (
        <div className='p-5 bg-stone-600/50 rounded-md' >
            <h3>Create Project Note</h3>
            <br />
            <Form {...form}>
                <form 
                    onSubmit={form.handleSubmit(onSubmit)} 
                    className=' flex items-center gap-3'
                >
                    <FormField
                        control={form.control}
                        name="image"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        id="image"
                                        type="file"
                                        className='text-blue-500 font-bold cursor-pointer'
                                        onChange={(e) => field.onChange(e.target.files)} 
                                        required
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" variant={"green"} >
                        {isPending ? <Spinner color={'light'} /> : "Submit"}
                        {/* Submit */}
                    </Button>
                </form>
            </Form>
        </div>
    )
}
