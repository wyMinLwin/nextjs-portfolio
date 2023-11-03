import React from 'react'
import { Karla } from 'next/font/google'
import { Metadata } from 'next'
import Socials from '@/components/Socials';
const karla = Karla({ subsets: ['latin'] });
const experiences = [
    {
        company:"Foreign Company",
        position:"Frontend Developer",
        startDate:"Dec 2022",
        endDate:"Apr 2023",
        skills:["JavaScript","Tailwind","React","React Native","Next","Redux Toolkit"],
        desc: "I started my first ever software engineering job as a junior frontend developer in this company. Since that is a startup company, I only needed to contribute in both mobile and web video player platform app by using React and React Native. And I was on the team which migrate web app of that video player plaform with Next."
    },
    {
        company:"InnoScript",
        position:"Frontend Developer",
        startDate:"Apr 2023",
        endDate:"Present",
        skills:["JavaScript","TypeScript","React","Tailwind","Redux Toolkit"],
        desc: "I work as a project-based part-time developer in there. I have to develop the wireframe of UI into acutal web. I am at the team of POS and University Landing sites."
    },
    {
        company:"Thetys Myanmar",
        position:"Web Developer",
        startDate:"May 2023",
        endDate:"Present",
        skills:["JavaScript","Vue","VueX","Vuetify","ASP.NetCore"],
        desc: "I have to maintain the team's core POS app by using both Vue and ASP.NetCore. I develop new features by sprint by sprint. Contributed a little bit to Fusion Chatbot since Fusion Solution is the parent company. Weekly code review with Technial Lead from Fusion Solution."
    },
    
];
export const metadata: Metadata = {
    title: 'About Me | Wai Yan Min Lwin',
    description: 'Wai Yan Min Lwin - Software Engineer',
    keywords: ["InnoScript Myanmar","Thetys Myanmar"]
  }
export default function About() {
  return (
    <section className='h-full px-3 sm:px-6 md:px-10 lg:px-60 py-2 md:py-2 flex flex-col justify-start gap-y-6 md:gap-y-8 lg:gap-y-20'>
        <h1 className={karla.className + ' text-2xl sm:text-3xl md:text-5xl font-bold'}>About Me.</h1>
        <div>
            <h2 className='text-xl sm:text-2xl md:text-3xl font-semibold'>Personal</h2>    
            <article className='mt-3'>
                20 years old Software Engineer who base in Yangon, Myanmar. Back in late 2020, I found how to code in HTML. Then I decided to learn more about programming. At the start of the day, I {"didn't"} think too much and learned Python. I knew I love programming and I decided not to University and then I learned web development. In June of 2022, I focused Web development and started as Junior Frontend Developer at the end of 2022. 
            </article>  
            <article className='mt-3'>
                I like to work together around with the team. I always hold the key of a balance team. Personally active to help everyone around and always enthusiastic to keep in touch with new technology trends.
            </article>
        </div>
        <div>
            <h2 className='text-xl sm:text-2xl md:text-3xl font-semibold'>Experiences</h2>
            <ul className='timeline ml-3 before:bg-black dark:before:bg-white'>
                {
                    experiences.map(experience => (
                        <li className="ml-7 before:border-2 before:border-black dark:before:border-white before:backdrop-blur-3xl my-5" key={experience.company}>
                            <h3><span className='text-xl'>{experience.company}</span> &bull; <span className='text-lg'>{experience.position}</span></h3>
                            <p className='opacity-60 dark:opacity-75'>{experience.startDate} &mdash;&mdash;&mdash;&mdash; {experience.endDate}</p>
                            <article>{experience.desc}</article>
                            <div className='flex flex-wrap gap-2'>
                                {
                                    experience.skills.map(skill => (
                                        <span key={skill} className='px-1.5 py-0.5 rounded-lg' style={{border:'1px solid'}}>{skill}</span>
                                    ))
                                }
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
        <Socials />
    </section>
  )
}
