import { Button } from '@/components/ui/button'
import React from 'react'

export const Skills = () => {
  const allSkills = [
    {
      heading : "Front end Skills",
      fSkills : [
        {
          skill : "React js",
          color : '#00d8ff'
        },
        {
          skill : "Next js",
          color : '#ffffff'
        },
        {
          skill : "JavaScript",
          color : '#F0DB4F'
        },
        {
          skill : "Tailwind css",
          color : '#3490dc'
        },
        {
          skill : "Shadcn-UI",
          color : '#ffffff'
        },
        {
          skill : "Material-UI",
          color : '#4287f5'
        },
        {
          skill : "Bootstrap",
          color : "#563d7c" 
        }
      ] 
    },
    {
      heading : "Back end Skills",
      fSkills : [
        {
          skill : "Node js",
          color : '#68a063'
        },
        {
          skill : "Express js",
          color : '#F0DB4F'
        },
      ] 
    },
    {
      heading : "Database",
      fSkills : [
        {
          skill : "Mongo DB",
          color : '#589636'
        },
        {
          skill : "Convex.dev",
          color : '#ffffff'
        },
        {
          skill : "firebase",
          color : '#F6820D'
        },
      ] 
    }
  ]



  return (
    <section className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 mt-[2rem]'>
      {allSkills.map((ele , index) => (
        <article key={index} className=' bg-stone-900 p-5 rounded-lg '>
          <h1 className=' opacity-80 mb-3'>{ele.heading}</h1>
          {ele.fSkills.map((ele , index) => (
            <Button 
              key={index} 
              variant={"dark"} 
              size={"sm"}
              style={{ borderColor : ele.color , color : ele.color}}
              className={`border opacity-80 mt-2 mr-2 font-light`}
            >
              {ele.skill}
            </Button>
          ))}
        </article>
      ))}
      <article>
        
      </article>
    </section>
  )
}
