"use client"
import React from 'react'
import {motion} from 'framer-motion'
type ProjectOverlayDesktopPropsType = {
    title: string
    desc: string,
    demo: string,
    github: string,
    image: string,
    tools: Array<string>
}
const ProjectOverlayDesktop = ({project}:{project:ProjectOverlayDesktopPropsType}) => {
  return (
    <motion.article
      initial={{opacity:0,y:10}}
      whileHover={{opacity:1,y:0}}
      className='h-full w-full px-3.5 absolute rounded-lg project-overlay bottom-0 left-0 right-0 flex flex-col justify-end py-3'>      
        <h2 className='text-white text-lg'>{project.title}</h2>
        <div className='flex flex-wrap gap-2'>
          {
            project.tools.map(tool => (
              <span className='bg-white px-1.5 rounded-lg' key={tool}>{tool}</span>
            ))
          }
        </div>     
    </motion.article>
  )
}

export default ProjectOverlayDesktop