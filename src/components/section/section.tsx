import React from "react";

interface SectionProps {
  children: React.ReactNode;
  name: string;
  id: string;
}

const Section = ({ children, name, id }: SectionProps) => {
  return (
    <div id={id} className="w-full flex flex-col gap-5">
      <div className="text-3xl font-semibold w-full flex justify-start items-center">
        <span className="text-foreground">{`<${name}>`}</span>
      </div>
      <div className="my-10 px-16 max-lg:px-8 max-md:px-3 max-md:my-5">
        {children}
      </div>
      <div className="text-3xl font-semibold w-full flex justify-end items-center">
        <span className="text-foreground">{`</${name}>`}</span>
      </div>
    </div>
  );
};

export default Section;
