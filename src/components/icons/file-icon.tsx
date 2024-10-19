import React from "react";
import { IconProps } from "@/interfaces/interfaces";

const FileIcon = ({
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
      <path
        d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16Z"
        fill={innerColor}
      />
      <path d="M12 19L16 23L20 19H17.5V16H14.5V19H12Z" fill={outerColor} />
      <path d="M17 7.5V13H22.5L17 7.5Z" fill={outerColor} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM10 6H18L24 12V24C24 25.11 23.11 26 22 26H10C8.89 26 8 25.11 8 24V8C8 6.89 8.89 6 10 6Z"
        fill={outerColor}
      />
    </svg>
  );
};

export default FileIcon;
