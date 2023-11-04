import React from 'react'
import { Karla } from 'next/font/google'
import { Metadata } from 'next';
import DirectMailButton from './components/DirectMailButton';
import MessageForm from './components/MessageForm';
import Socials from '@/components/Socials';
import Link from 'next/link';
import MoreArrow from '@/components/MoreArrow';
const karla = Karla({ subsets: ['latin']});

export const metadata: Metadata = {
    title: "Contact Me | Wai Yan Min Lwin",
    description: 'Wai Yan Min Lwin - You can contact me through a lot of major social platforms.',
    keywords: ["waiyanminlwin421@gmail.com","Wai Yan Min Lwin Contact"]

}
export default function Contact() {
  return (
    <section className='h-full px-3 sm:px-6 md:px-10 lg:px-60 py-2 md:py-2 flex flex-col justify-start gap-y-6 md:gap-y-8 lg:gap-y-12'>
        <h1 className={karla.className + ' text-2xl sm:text-3xl md:text-5xl font-bold'}>Contact Me.</h1>
        <p>You can directly contact me through <DirectMailButton /></p>
        <a className='px-2.5 py-0.5 rounded-lg border-2 border-black dark:border-white w-fit flex items-center' href='/pdf/Wai_Yan_Min_Lwin.pdf' download={true}><span>Get My Full Resume</span><span className='font-extrabold text-3xl ml-2'> &#10515;</span></a>
        <MessageForm />
        <Link href={'/'} className='flex items-center text-lg'>
            Go back to home <MoreArrow />
        </Link>
        <Socials />
    </section>
  )
}
