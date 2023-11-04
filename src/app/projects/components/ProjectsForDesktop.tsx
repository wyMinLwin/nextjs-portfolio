import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProjectOverlayDesktop from './ProjectOverlayDesktop'
type ProjectsForDesktopPropsTypes = Array<{
    title: string
    desc: string,
    demo: string,
    github: string,
    image: string,
    tools: Array<string>
}>
const ProjectsForDesktop = ({projects}:{projects:ProjectsForDesktopPropsTypes}) => {
  return (
    <div className='hidden lg:grid grid-cols-1 sm:grid-cols-2 gap-3'>
      {
        projects.map(project => (
          <Link href={project.demo} key={project.github}>
            <div className='col-span-1 relative rounded-lg overflow-hidden hover:drop-shadow-lg'>
              <Image src={'/images/'+project.image} alt={project.title} width={2880} height={1628}  className='w-full'/>
              <ProjectOverlayDesktop project={project} />
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default ProjectsForDesktop