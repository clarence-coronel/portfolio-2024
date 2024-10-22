import Image from "next/image";
import React from "react";
import { skills } from "@/data/skills";
import Tippy from "@tippyjs/react";
// import "tippy.js/dist/tippy.css"; // optional
import { followCursor } from "tippy.js";

const Skills = () => {
  return (
    <div className="flex flex-col gap-16">
      {Object.keys(skills).map((category) => (
        <div key={category} className="flex flex-col gap-5">
          {/* Display the category name (frontend, backend, tools) */}
          <span className="text-lg font-bold">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </span>
          <div className="flex flex-wrap gap-5 justify-start items-center">
            {/* Iterate through the skills in the current category */}
            {(skills[category as keyof typeof skills] || []).map(
              (skill: { name: string; icon: string; desc: string }) => (
                <Tippy
                  followCursor={true}
                  plugins={[followCursor]}
                  key={skill.name}
                  content={skill.desc}
                  className="bg-background border-border border text-foreground px-3 py-2 text-sm rounded-md"
                >
                  <div className="hover:shadow-md hover:scale-110 max-md:w-24 max-md:rounded-lg duration-200 w-32 flex flex-col justify-center items-center bg-background aspect-square p-2 rounded-3xl gap-2">
                    <div className="max-md:w-10 w-16 aspect-square relative">
                      <Image
                        fill
                        src={skill.icon}
                        alt={`${skill.name}'s icon.`}
                      />
                    </div>
                    <span className="text-sm select-none text-center font-medium duration-200">
                      {skill.name}
                    </span>
                  </div>
                </Tippy>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
