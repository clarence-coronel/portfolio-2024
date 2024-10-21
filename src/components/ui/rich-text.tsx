import React from "react";

type Section = {
  heading: string;
  paragraphs: string[];
};

interface RichTextProps {
  data: Section[];
}

const RichText = ({ data }: RichTextProps) => {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-5 items-center w-full max-w-[900px]">
        {data.map((content, index1) => (
          <div className="flex flex-col gap-5" key={index1}>
            <h2 className="font-semibold text-lg">{content.heading}</h2>
            <div className="flex flex-col gap-3">
              {content.paragraphs.map((p, index2) => (
                <p className="text-pretty" key={index2}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RichText;
