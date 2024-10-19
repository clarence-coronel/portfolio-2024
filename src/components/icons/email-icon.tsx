import React from "react";

interface EmailIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  innerColor: string;
}

const EmailIcon = ({ size = 40, innerColor, ...props }: EmailIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_2008_95)">
        <circle cx="16" cy="16" r="16" fill={innerColor} />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM6.18526 10.1053C6.18526 9.02456 7.05965 8.14035 8.14035 8.14035H23.8596C24.9404 8.14035 25.8246 9.02456 25.8246 10.1053V21.8947C25.8246 22.9754 24.9404 23.8596 23.8596 23.8596H8.14035C7.05965 23.8596 6.17544 22.9754 6.17544 21.8947L6.18526 10.1053ZM16 16.9825L23.8596 12.0702V10.1053L16 15.0175L8.14035 10.1053V12.0702L16 16.9825Z"
          fill="currentColor"
          className="duration-200"
        />
      </g>
    </svg>
  );
};

export default EmailIcon;
