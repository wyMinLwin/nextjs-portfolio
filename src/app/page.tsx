import React from "react";
import Link from "next/link";
import Socials from "@/components/Socials";
import { Karla } from "next/font/google";
import { Metadata } from "next";
import MoreArrow from "@/components/MoreArrow";
const karla = Karla({ subsets: ["latin"] });
export const metadata: Metadata = {
    title: "Software Engineer | Wai Yan Min Lwin",
    description:
        "I am Wai Yan Min Lwin. I currectly build accessible and maintainable products for the web.",
    keywords: ["Wai Yan Min Lwin", "Wai Yan", "Min Lwin", "Software Engineer"],
};
export default function Home() {
    return (
        <section className="flex grow flex-col justify-center gap-y-16 px-3 py-2 sm:px-6 md:px-10 md:py-2 lg:gap-y-28 lg:px-60">
            <h1 className="text-center text-lg sm:text-2xl md:text-4xl">
                Hello 👋, I am{" "}
                <span
                    className={
                        karla.className +
                        "text-2xl font-bold sm:text-3xl md:text-5xl"
                    }
                >
                    Wai Yan Min Lwin
                </span>
            </h1>
            <div>
                <p>
                    An innovative Software Engineer from Myanmar who is likely
                    to enjoy solving problems and writing codes. I spend most of
                    the times of my days to writing codes and learning things
                    about software engineering.
                </p>
                <p className="mt-4">
                    I am also doing various projects by my own. Here you can
                    check in{" "}
                    <Link className="text-lg font-bold" href={"/projects"}>
                        Projects
                    </Link>{" "}
                    section. Since I am open source enthusiast, you can contact
                    me for your open-source projects in{" "}
                    <Link className="text-lg font-bold" href={"/contact"}>
                        Contact
                    </Link>{" "}
                    section.
                </p>
            </div>
            <Link href={"/about"} className="flex items-center text-lg">
                Read more about me <MoreArrow />
            </Link>
            <span className="pb-4">
                <Socials />
            </span>
        </section>
    );
}
