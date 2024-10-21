import Image from "next/image";
import React from "react";

interface ExperienceCardProp {
  img: string;
  company: string;
  role: string;
  start: string | number;
  end: string | number;
  tech?: string[];
}

const ExperienceCard = ({
  img,
  company,
  role,
  start,
  end,
  tech,
}: ExperienceCardProp) => {
  return (
    <div className="flex gap-3">
      <div>
        <div className="max-xl:w-20 max-lg:hidden relative w-24 aspect-square  ">
          <Image
            className="object-contain w-full h-full"
            fill
            src={img}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <span className="text-secondary font-bold text-lg">{role}</span>
          <span className="text-sm text-foreground font-bold">{company}</span>
          <span className="text-xs text-foreground">
            {start} - {end}
          </span>
        </div>
        <div className="flex flex-wrap gap-x-2 gap-y-4">
          {tech?.map((t, index) => (
            <div key={index} className="text-xs text-foreground ">
              <span className="font-semibold bg-background px-2 py-1 rounded-lg shadow-sm">
                {t}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
