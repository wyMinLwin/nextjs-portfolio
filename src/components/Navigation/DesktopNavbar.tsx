"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useMemo } from 'react'
import ThemeToggler from './ThemeToggler'
const paths = ['about','project','contact']

const DesktopNavbar = () => {
  const pathName = usePathname();
  const pathsToRender = useMemo(() => {
    return paths.filter(path => '/'+path != pathName)
  },[pathName]);
  return (  
      <nav className='w-full hidden sm:flex justify-end gap-x-5 items-center'>
        {
          pathsToRender.map(path => (
            <Link href={path} className='text-lg' key={path}>
              <span className='underline-effect before:bg-black dark:before:bg-white capitalize'>{path}</span>
            </Link>
          ))
        }
        <ThemeToggler />
      </nav>
  )
}

export default DesktopNavbar