import React from 'react'
import { Karla } from 'next/font/google'
import { Metadata } from 'next'
import ProjectsForMobile from './components/ProjectsForMobile'
import ProjectsForDesktop from './components/ProjectsForDesktop'
import Socials from '@/components/Socials'
import Link from 'next/link'
import MoreArrow from '@/components/MoreArrow'
const karla = Karla({ subsets: ['latin'] })

let projects = [
  {
      title: "React POS",
      desc: "This is not a traditional pos with a bunch of table layout. I used clean component card layout ui. I implemented TanStack Query to that app with Supabase. I still maintaining this app as long as with my SvelteKit Friends app.",
      demo: "https://wyml-react-pos.vercel.app",
      github: "https://github.com/wyMinLwin/react-pos",
      image: 'ReactPos.png',
      tools: ["React","TanStackQuery","Supabase","Redux Toolkit","Tailwind"]
  },
  {
      title: "Next Zodiac",
      desc: "NextJS 13 SSG with framer motion. The project idea was from <a class='underline' href='/https://github.com/sannlynnhtun-coding/Zodiac/'>this repo<a/> and also I was willing to implement framer motion. So this is the result. ",
      demo: "https://zodiac-next.vercel.app/",
      github: "https://github.com/wyMinLwin/zodiac-next",
      image: 'NextZodiac.png',
      tools: ["Next","Framer Motion","PNPM","TypeScript","Tailwind"]
  },
  {
      title: "Svelte Friends",
      desc: "This is my SvelteKit app that I still maintaining. My goal about this project is to give seamless user experiences to users. I mainly focused on user interaction. The purpose of app is like tinder with in case of friends. Me and one of my coder friends about to collaborate in this project.",
      demo: "https://svelte-friends.vercel.app/login",
      github: "https://github.com/wyMinLwin/svelte-friends",
      image: 'SvelteFriend.png',
      tools: ["SvelteKit","TypeScript","Tailwind","PNPM"]
  },
  {
    title: "Portfolio v3",
    desc: "",
    demo: "https://waiyanminlwin-v3.vercel.app",
    github: "https://github.com/wyMinLwin/svelte-portfolio",
    image: 'V3.png',
    tools: ["SvelteKit","TypeScript","Tailwind","Vite"]
},
  {
      title: "React Terminal",
      desc: "The idea of developing this app is really personal cause I really like to use terminal and CLI. I build the project with Vite As a first I started working on layout to get a clean layout. Since there was one page It was easy to create a layout. I used Redux Toolkit to store the history of command and write a bunch of straight forward JavaScirpt method to give a response to user. The major problem I faced with this projects are getting the history with the key storke and try to display that on the screen and think about how should the command typing work without using the HTML built-in Input tag.",
      demo: "https://wyminlwin-terminal-ts.netlify.app/",
      github: "https://github.com/wyMinLwin/terminal-react-ts",
      image: 'ReactTerminal.png',
      tools: ["React","TypeScript","Tailwind","Redux Toolkit","Vite"]
  },
  {
      title: "Typing Speed Test",
      desc: "As long as I remember this is my first React project with my own idea without any tutorial base. I used Bootstrap for theme. I used a JavaScript library to generate words. The most difficult problems were rendering out reactively which words are wrong or right. I was also about to add a virtual keyboard which would what keys you are typing. But due to render issues, I decide not to add cause I didn't know so much at those time.",
      demo: "https://wyminlwin-type.netlify.app/",
      github: "https://github.com/wyMinLwin/typing-speed",
      image: 'TypingSpeed.png',
      tools: ["React","JavaScript","Bootstrap"]
  },
  {
      title: "Note App",
      desc: "I created this web to train React. The idea was orginally came from a video about managing state in React and I started create this. I used React, Bootstrap, Sass a little bit and React router dom.",
      demo: "https://wyminlwin-dropnote.netlify.app/",
      github: "https://github.com/wyMinLwin/dropnote/",
      image: 'NoteApp.png',
      tools: ["React","Bootstrap","Sass",]
  },
  {
      title: "Portfolio v1",
      desc: "After I focused on React, I decided to write a portfolio with React. I didn't a bunch of research and create this portfolio.",
      demo: "https://wyminlwin.netlify.app/",
      github: "https://github.com/wyMinLwin/react-portfolio",
      image: 'Portfolio.png',
      tools: ["React","Bootstrap"]
  },
  
]

export const metadata: Metadata = {
  title: 'Projects | Wai Yan Min Lwin',
  description: 'Wai Yan Min Lwin - I have done various types of interesting projects and I am willing to contribute in open-source projects.',
  keywords: ["Wai Yan","Min Lwin", "Wai Yan Min Lwin","Projects"]
}

const Projects = () => {
  return (
    <section className='h-full px-3 sm:px-6 md:px-10 lg:px-60 py-2 md:py-2 flex flex-col justify-start gap-y-6 md:gap-y-8 lg:gap-y-20'>
        <h1 className={karla.className + ' text-2xl sm:text-3xl md:text-5xl font-bold'}>Projects.</h1>
        <ProjectsForMobile projects={projects} />
        <ProjectsForDesktop projects={projects} />
        <Link href={'/contact'} className='flex items-center text-lg'>
             Contact me through here <MoreArrow />
        </Link>
        <Socials />
    </section>
  )
}

export default Projects