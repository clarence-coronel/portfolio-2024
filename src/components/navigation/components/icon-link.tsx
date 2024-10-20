import React, { forwardRef } from "react";
import useScroll from "@/hooks/useScroll";

interface IconLinkProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  title: string;
  orientation: "left" | "right";
}

// Use forwardRef to forward the ref to the div element
const IconLink = forwardRef<HTMLDivElement, IconLinkProps>(
  ({ children, title, orientation, ...props }, ref) => {
    const scrolled = useScroll();

    if (orientation === "left")
      return (
        <div ref={ref} {...props} className="group relative">
          <div className="max-sm:opacity-20 max-sm:hover:opacity-100 duration-200">
            {children}
          </div>

          {scrolled ? (
            <span className="max-sm:hidden truncate font-semibold pointer-events-none text-sm select-none group-hover:opacity-100 group-hover:left-[110%] opacity-0 absolute bg-foreground text-background rounded-full px-2 py-1 top-1/2 -translate-y-[50%] -left-[100%] duration-300">
              {title}
            </span>
          ) : (
            <span className="max-sm:hidden truncate font-semibold pointer-events-none text-sm select-none group-hover:opacity-100 group-hover:-top-[90%] opacity-0 absolute bg-foreground text-background rounded-full px-2 py-1 left-1/2 -translate-x-[50%] top-[100%] duration-300">
              {title}
            </span>
          )}
        </div>
      );
    else
      return (
        <div ref={ref} {...props} className="group relative">
          <div className="max-sm:opacity-20 max-sm:hover:opacity-100 duration-200">
            {children}
          </div>

          {scrolled ? (
            <span className="max-sm:hidden truncate font-semibold pointer-events-none text-sm select-none group-hover:opacity-100 group-hover:right-[110%] opacity-0 absolute bg-foreground text-background rounded-full px-2 py-1 top-1/2 -translate-y-[50%] -right-[100%] duration-300">
              {title}
            </span>
          ) : (
            <span className="max-sm:hidden truncate font-semibold pointer-events-none text-sm select-none group-hover:opacity-100 group-hover:-top-[90%] opacity-0 absolute bg-foreground text-background rounded-full px-2 py-1 left-1/2 -translate-x-[50%] top-[100%] duration-300">
              {title}
            </span>
          )}
        </div>
      );
  }
);

// Set display name for better debugging
IconLink.displayName = "IconLink";

export default IconLink;
