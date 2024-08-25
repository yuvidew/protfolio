import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


export const Projects = () => {
    return (
        <div id='project' className=' mt-[1.1rem]'>
            <div className=' flex items-center justify-between'>
                <h1 className=' text-[1.6rem]'>Projects</h1>
                <Select >
                    <SelectTrigger className="w-[180px] border border-white">
                        <SelectValue placeholder="All.. " />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Full stack">Full stack</SelectItem>
                        <SelectItem value="Front end">Front end</SelectItem>
                        <SelectItem value="server">Server</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}
