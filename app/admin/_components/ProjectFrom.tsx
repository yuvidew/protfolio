
import React from 'react'
import { ProjectTitle } from './ProjectTitle'
import { TechSkills } from './TechSkills'
import { UploadImg } from './UploadImg'


export const ProjectFrom = () => {
    return (
        <section>
            <ProjectTitle/>
            <br />
            <UploadImg/>
            <br />
            <TechSkills/>
        </section>
    )
}
