import React from "react";
import { IconProps } from "@/interfaces/interfaces";

interface LogoIconProps extends Omit<IconProps, "outerColor"> {
  innerColor: string;
}

const ScrollIcon = ({ size = 40, innerColor, ...props }: LogoIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className="scroll-icon"
      {...props}
    >
      <path
        fill={innerColor}
        stroke={innerColor}
        stroke-linejoin="round"
        stroke-width="4"
        d="M36 19L24 31L12 19z"
      />
    </svg>
  );
};

export default ScrollIcon;
