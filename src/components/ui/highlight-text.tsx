import React from "react";

interface HighlightTextProps extends React.HTMLProps<HTMLSpanElement> {
  children: React.ReactNode;
}

const HighlightText = ({ children, ...props }: HighlightTextProps) => {
  return (
    <span {...props} className="text-secondary">
      {children}
    </span>
  );
};

export default HighlightText;
