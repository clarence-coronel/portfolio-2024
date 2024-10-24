import Link from "next/link";
import React from "react";
import ProjectCard from "./components/project-card";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <div className="flex flex-col gap-20">
      {projects.map((p, index) => (
        <ProjectCard
          key={index}
          name={p.name}
          desc={p.desc}
          tech={p.tech}
          url={p.url}
          img={p.img}
          date={p.date}
        />
      ))}

      <Link
        className="group gap-1 flex items-center  mx-auto hover:text-secondary mt-10"
        href="/projects"
      >
        <span className="font-bold">View Project Archive</span>
        <svg
          className="group-hover:translate-x-1 duration-200"
          xmlns="http://www.w3.org/2000/svg"
          width="1rem"
          height="1rem"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path stroke-dasharray="20" stroke-dashoffset="20" d="M3 12h17.5">
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                dur="0.2s"
                values="20;0"
              />
            </path>
            <path
              stroke-dasharray="12"
              stroke-dashoffset="12"
              d="M21 12l-7 7M21 12l-7 -7"
            >
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                begin="0.2s"
                dur="0.2s"
                values="12;0"
              />
            </path>
          </g>
        </svg>
      </Link>
    </div>
  );
};

export default Projects;
