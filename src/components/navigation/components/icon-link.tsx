import React, { forwardRef } from "react";

interface IconLinkProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  title: string;
}

// Use forwardRef to forward the ref to the div element
const IconLink = forwardRef<HTMLDivElement, IconLinkProps>(
  ({ children, title, ...props }, ref) => {
    return (
      <div ref={ref} {...props} className="group relative">
        {children}
        <span className="truncate font-semibold pointer-events-none text-sm select-none group-hover:opacity-100 group-hover:-top-[110%] opacity-0 absolute bg-foreground text-background rounded-full px-2 py-1 left-1/2 -translate-x-[50%] top-[100%] duration-500">
          {title}
        </span>
      </div>
    );
  }
);

// Set display name for better debugging
IconLink.displayName = "IconLink";

export default IconLink;
