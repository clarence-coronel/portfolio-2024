import Image from "next/image";
import React from "react";
import { skills } from "@/data/skills";

const Skills = () => {
  return (
    <div className="flex flex-col gap-16">
      {Object.keys(skills).map((category) => (
        <div key={category} className="flex flex-col gap-5">
          {/* Display the category name (frontend, backend, tools) */}
          <span className="text-lg font-bold">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </span>
          <div className="flex flex-wrap gap-5">
            {/* Iterate through the skills in the current category */}
            {(skills[category as keyof typeof skills] || []).map(
              (skill: { name: string; icon: string }) => (
                <div
                  key={skill.name}
                  className="hover:scale-105 duration-200 w-32 flex flex-col justify-center items-center bg-background aspect-square p-2 rounded-3xl gap-2"
                >
                  <div className="w-16 aspect-square relative">
                    <Image
                      fill
                      src={skill.icon}
                      alt={`${skill.name}'s icon.`}
                    />
                  </div>
                  <span className="text-sm select-none">{skill.name}</span>
                </div>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
