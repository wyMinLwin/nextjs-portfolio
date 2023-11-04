import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
type ProjectsForMobilePropsTypes = Array<{
    title: string
    desc: string,
    demo: string,
    github: string,
    image: string,
    tools: Array<string>
}>
const ProjectsForMobile = ({projects}:{projects:ProjectsForMobilePropsTypes}) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 lg:hidden'>
      {
        projects.map(project => (
          <Link href={project.demo} key={project.github}>
            <div className='col-span-1 relative rounded-lg overflow-hidden hover:drop-shadow-lg'>
              <Image src={'/images/'+project.image} alt={project.title} width={2880} height={1628}  className='w-full'/>
              <article className='h-full w-full px-3.5 absolute rounded-lg project-overlay bottom-0 left-0 right-0 flex flex-col justify-end py-3'>
                
                  <h2 className='text-white text-lg'>{project.title}</h2>
                  <div className='flex flex-wrap gap-2'>
                    {
                      project.tools.map(tool => (
                        <span className='px-1.5 text-white rounded-lg' style={{background:'#c0c0c0c0'}} key={tool}>{tool}</span>
                      ))
                    }
                  </div>
                
              </article>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default ProjectsForMobile