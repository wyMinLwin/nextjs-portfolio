import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectOverlayDesktop from "./ProjectOverlayDesktop";
type ProjectsForDesktopPropsTypes = Array<{
    title: string;
    desc: string;
    demo: string;
    github: string;
    image: string;
    tools: Array<string>;
}>;
const ProjectsForDesktop = ({
    projects,
}: {
    projects: ProjectsForDesktopPropsTypes;
}) => {
    return (
        <div className="hidden grid-cols-1 gap-3 sm:grid-cols-2 lg:grid 2xl:grid-cols-3">
            {projects.map((project) => (
                <Link href={project.demo} key={project.github}>
                    <div className="relative col-span-1 overflow-hidden rounded-lg hover:drop-shadow-lg">
                        <Image
                            priority
                            src={"/images/" + project.image}
                            alt={project.title}
                            width={2880 * 0.5}
                            height={1628 * 0.5}
                            className="w-full"
                        />
                        <ProjectOverlayDesktop project={project} />
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ProjectsForDesktop;
