import React from "react";
import { IconProps } from "@/interfaces/interfaces";

const DarkModeIcon = ({
  size = 40,
  innerColor,
  outerColor,
  ...props
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="32" height="32" rx="16" fill={outerColor} />
      <g clipPath="url(#clip0_2067_3203)">
        <path
          d="M16.09 25C14.83 25 13.6489 24.76 12.5467 24.28C11.4445 23.8 10.4845 23.1514 9.6667 22.3342C8.8489 21.517 8.2 20.557 7.72 19.4542C7.24 18.3514 7 17.17 7 15.91C7 13.72 7.6975 11.7889 9.0925 10.1167C10.4875 8.4445 12.265 7.4056 14.425 7C14.155 8.485 14.2375 9.9364 14.6725 11.3542C15.1075 12.772 15.8575 14.0131 16.9225 15.0775C17.9875 16.1419 19.2289 16.8919 20.6467 17.3275C22.0645 17.7631 23.5156 17.8456 25 17.575C24.61 19.735 23.575 21.5125 21.895 22.9075C20.215 24.3025 18.28 25 16.09 25Z"
          fill={innerColor}
        />
      </g>
    </svg>
  );
};

export default DarkModeIcon;
