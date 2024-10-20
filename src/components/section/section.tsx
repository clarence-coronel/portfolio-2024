import React from "react";

interface SectionProps {
  children: React.ReactNode;
  name: string;
  id: string;
}

const Section = ({ children, name, id }: SectionProps) => {
  return (
    <div id={id} className="w-full flex flex-col gap-5">
      <div className="text-3xl text-secondary font-semibold w-full flex justify-start items-center">
        {"<"}
        <span className="text-foreground">{name}</span>
        {">"}
      </div>
      <div>{children}</div>
      <div className="text-3xl text-secondary font-semibold w-full flex justify-end items-center">
        {"<"}
        <span className="text-foreground">{name}</span>
        {"/>"}
      </div>
    </div>
  );
};

export default Section;
