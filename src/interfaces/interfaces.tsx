import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  innerColor: string;
  outerColor: string;
}