import React from 'react'
import Link from 'next/link'
import Socials from '@/components/Socials'
import { Karla } from 'next/font/google'
import { Metadata } from 'next'
import MoreArrow from '@/components/MoreArrow'
const karla = Karla({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Wai Yan Min Lwin',
  description: 'Wai Yan Min Lwin - Software Engineer',
}
export default function Home() {
  return (
    <section className='grow px-3 sm:px-6 md:px-10 lg:px-60 py-2 md:py-2 flex flex-col justify-center gap-y-16 lg:gap-y-28'>
      <h1 className='text-lg sm:text-2xl md:text-4xl text-center'>Hello 👋, I am <span className={karla.className + 'text-2xl sm:text-3xl md:text-5xl font-bold'}>Wai Yan Min Lwin</span></h1>
      <div>
        <p>
          An innovative Software Engineer from Myanmar who is likely to enjoy writing codes. I spend most of the times of my days to writing codes and learning things about software engineering.
        </p>
        <p className='mt-4'>I am also doing various projects by my own. Here you can check in <Link className='font-bold text-lg' href={'/project'}>Project</Link> section. Since I am open source enthusiast, you can contact me for your open-source projects in <Link className='font-bold text-lg' href={'/contact'}>Contact</Link> section.</p>
      </div>
      <Link href={'/about'} className='flex items-center text-lg'>
        Read more about me <MoreArrow />
      </Link>
      <span className='pb-4'>
        <Socials />
      </span>
    </section>
  )
}
