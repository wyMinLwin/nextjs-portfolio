import React from "react";
import { Karla } from "next/font/google";
import { Metadata } from "next";
import Socials from "@/components/Socials";
import Link from "next/link";
import MoreArrow from "@/components/MoreArrow";
const karla = Karla({ subsets: ["latin"] });
const experiences = [
    {
        company: "Foreign Company",
        position: "Frontend Developer",
        startDate: "Dec 2022",
        endDate: "Apr 2023",
        skills: [
            "JavaScript",
            "Tailwind",
            "React",
            "React Native",
            "Next",
            "Redux Toolkit",
        ],
        desc: "I started my first ever software engineering job as a junior frontend developer in this company. Since that is a startup company, I only needed to contribute in both mobile and web video player platform app by using React and React Native. And I was on the team which migrate web app of that video player plaform with Next.",
    },
    {
        company: "InnoScript",
        position: "Frontend Developer",
        startDate: "Apr 2023",
        endDate: "Aug 2023",
        skills: [
            "JavaScript",
            "TypeScript",
            "React",
            "Tailwind",
            "Redux Toolkit",
        ],
        desc: "I worked as a project-based part-time developer in there. I developed the wireframe of UI into acutal web. I am at the team of POS and University Landing sites.",
    },
    {
        company: "Thetys Myanmar",
        position: "Web Developer",
        startDate: "May 2023",
        endDate: "Present",
        skills: ["JavaScript", "Vue", "VueX", "Vuetify", "ASP.NetCore"],
        desc: "I have to maintain the team's core POS app by using both Vue and ASP.NetCore. I develop new features by sprint by sprint. Contributed a little bit to Fusion Chatbot since Fusion Solution is the parent company. Weekly code review with Technial Lead from Fusion Solution.",
    },
    {
        company: "Code Mal",
        position: "Frontend Developer",
        startDate: "Dec 2023",
        endDate: "Present",
        skills: ["TypeScript", "React", "Next", "Shadcn", "Tailwind"],
        desc: "Code Mal is youth's organization which provide youths with quality courses. In Code Mal I migrate Code Mal learing web app into NextJS app. I enhanced Code Mal app with Server Side Rendering through out the app. And developing on new community features.",
    },
];
export const metadata: Metadata = {
    title: "About Me | Wai Yan Min Lwin",
    description: "I am a 20 years old Software Engineer from Yangon, Myanmar.",
    keywords: [
        "InnoScript Myanmar",
        "Thetys Myanmar",
        "Wai Yan Min Lwin",
        "Wai Yan",
        "Min Lwin",
        "Code Mal",
    ],
};
export default function About() {
    return (
        <section className="flex h-full flex-col justify-start gap-y-6 px-3 py-2 sm:px-6 md:gap-y-8 md:px-10 md:py-2 lg:gap-y-20 lg:px-60">
            <h1
                className={
                    karla.className +
                    " text-2xl font-bold sm:text-3xl md:text-5xl"
                }
            >
                About Me.
            </h1>
            <div>
                <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl">
                    Personal
                </h2>
                <article className="mt-3">
                    20 years old Software Engineer who base in Yangon, Myanmar.
                    Back in late 2020, I found how to code in HTML. Then I
                    decided to learn more about programming. At the start of the
                    day, I {"didn't"} think too much and learned Python. I knew
                    I love programming and I decided not to attend University
                    and then I learned web development. In June of 2022, I
                    focused Web development and started as Junior Frontend
                    Developer at the end of 2022.
                </article>
                <article className="mt-3">
                    I like to work together around with the team. I always hold
                    the key of a balance team. Personally active to help
                    everyone around and always enthusiastic to keep in touch
                    with new technology trends.
                </article>
            </div>
            <div>
                <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl">
                    Experiences
                </h2>
                <ul className="timeline ml-3 before:bg-black dark:before:bg-white">
                    {experiences.map((experience) => (
                        <li
                            className="my-5 ml-7 before:border-2 before:border-black before:backdrop-blur-3xl dark:before:border-white"
                            key={experience.company}
                        >
                            <h3>
                                <span className="text-xl">
                                    {experience.company}
                                </span>{" "}
                                &bull;{" "}
                                <span className="text-lg">
                                    {experience.position}
                                </span>
                            </h3>
                            <p className="opacity-60 dark:opacity-75">
                                {experience.startDate}{" "}
                                &mdash;&mdash;&mdash;&mdash;{" "}
                                {experience.endDate}
                            </p>
                            <article>{experience.desc}</article>
                            <div className="flex flex-wrap gap-2">
                                {experience.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-lg px-1.5 py-0.5"
                                        style={{ border: "1px solid" }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <Link href={"/projects"} className="flex items-center text-lg">
                Checkout my projects <MoreArrow />
            </Link>
            <Socials />
        </section>
    );
}
