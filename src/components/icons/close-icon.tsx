import React from "react";
import { IconProps } from "@/interfaces/interfaces";

interface CloseIconProps extends Omit<IconProps, "outerColor"> {
  innerColor: string;
}

const CloseIcon = ({ size = 40, innerColor, ...props }: CloseIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke={innerColor}
        stroke-dasharray="12"
        stroke-dashoffset="12"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 12l7 7M12 12l-7 -7M12 12l-7 7M12 12l7 -7"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          dur="0.3s"
          values="12;0"
        />
      </path>
    </svg>
  );
};

export default CloseIcon;
