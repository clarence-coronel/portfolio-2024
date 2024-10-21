import React from "react";
import Image from "next/image";

interface EducationCardProp {
  img: string;
  school: string;
  course: string;
  start: string | number;
  end: string | number;
  others?: string[];
}

const EducationCard = ({
  img,
  school,
  course,
  start,
  end,
  others,
}: EducationCardProp) => {
  return (
    <div className="flex gap-3">
      <div>
        <div className="max-xl:w-20 max-lg:hidden relative w-24 aspect-square  ">
          <Image
            className="xobject-contain w-full h-full"
            fill
            src={img}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <span className="text-secondary font-bold text-lg">{school}</span>
          <span className="text-xs text-foreground">
            {start} - {end}
          </span>
        </div>
        <div>
          <div className="text-sm text-foreground font-medium">{course}</div>
          {others?.map((o, index) => (
            <div key={index} className="text-xs text-foreground ">
              {o}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
