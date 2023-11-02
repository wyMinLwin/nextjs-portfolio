"use client"
import { useTheme } from 'next-themes'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const ThemeToggler = () => {
    const {theme,setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) {
        return null;
    }

  return (
    <div className='my-auto'>
        <button value={theme} onClick={() => setTheme('light')} className='hidden dark:inline px-2.5 py-1.5 rounded-3xl backdrop-blur-lg border drop-shadow click-effect'>
            <Image priority src={'/images/moon.svg'} alt='moon svg' height={24} width={24} />
        </button>
        <button value={theme} onClick={() => setTheme('dark')} className='dark:hidden px-2.5 py-1.5 rounded-3xl backdrop-blur-lg border drop-shadow click-effect'>
            <Image priority src={'/images/sun.svg'} alt='sun svg' height={24} width={24} />
        </button>
    </div>
  )
}

export default ThemeToggler