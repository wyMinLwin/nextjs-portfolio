import Image from "next/image";
import Link from "next/link";
import React from "react";
const socials = [
    {
        img: "github.svg",
        url: "https://github.com/wyMinLwin",
    },
    {
        img: "instagram.svg",
        url: "https://www.instagram.com/neil_the_butterfly/",
    },
    {
        img: "linkedin.svg",
        url: "https://www.linkedin.com/in/wyMinLwin",
    },
    {
        img: "facebook.svg",
        url: "https://www.facebook.com/waiyan.minlwin.161/",
    },
];
const Socials = () => {
    return (
        <div className="flex items-center gap-x-10 py-2">
            {socials.map((social) => (
                <Link href={social.url} key={social.url}>
                    <Image
                        priority
                        src={"/images/" + social.img}
                        alt={social.url}
                        width={20}
                        height={20}
                    />
                </Link>
            ))}
        </div>
    );
};

export default Socials;
