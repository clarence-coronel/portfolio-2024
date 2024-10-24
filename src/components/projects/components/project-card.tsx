import Image from "next/image";
import React, { useState } from "react";

interface ProjectCardProps {
  name: string;
  desc: string;
  tech: string[];
  url: string;
  img: string;
  date: string;
}

const MAX_CHAR_LIMIT = 200;

const ProjectCard = ({
  name,
  desc,
  tech,
  url,
  img,
  date,
}: ProjectCardProps) => {
  const [seeMore, setSeeMore] = useState(false);

  const truncate = (str: string): string => {
    if (str.length > MAX_CHAR_LIMIT) {
      return str.substring(0, MAX_CHAR_LIMIT) + "...";
    }
    return str;
  };

  return (
    <div className="w-full flex gap-7 max-lg:flex-col">
      <div className="max-w-[350px] max-xl:max-w-[300px] w-full h-fit group bg-background rounded-xl overflow-hidden relative justify-center items-center flex">
        <div className="bg-background w-full h-full group-hover:scale-110 relative aspect-video duration-500 flex justify-center items-center">
          <Image className="object-cover object-center" src={img} fill alt="" />
        </div>
      </div>

      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-3">
          <div>
            <a
              href={url}
              target="_blank"
              className="w-fit group hover:text-secondary font-bold text-xl flex items-center"
            >
              <span className="duration-200 ">{name}</span>
              <svg
                className="group-hover:translate-x-1 group-hover:-translate-y-1 duration-200"
                xmlns="http://www.w3.org/2000/svg"
                width="1rem"
                height="1rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1a1 1 0 0 0 1-1Z"
                />
              </svg>
            </a>
            <div className="text-xs">{date}</div>
          </div>
          <p className="max-w-[500px]">
            {seeMore ? desc : truncate(desc)}
            {desc.length > MAX_CHAR_LIMIT && (
              <button
                onClick={() => setSeeMore(!seeMore)}
                className="cursor-pointer text-blue-500"
              >
                &nbsp;{seeMore ? "see less" : "see more"}
              </button>
            )}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 gap-y-4 max-w-[400px]">
          {tech.map((t, index) => (
            <div key={index} className="text-xs text-foreground ">
              <span className="font-semibold bg-background px-2 py-1 rounded-full shadow-sm">
                {t}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
