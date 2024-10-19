"use client";

import React, { forwardRef } from "react";
import Link from "next/link";

// Forwarding ref to allow parent to access the DOM node
const NavLink = forwardRef<HTMLAnchorElement, { path: string; title: string }>(
  ({ path, title }, ref) => {
    return (
      // <Link
      //   ref={ref} // Attach the ref here
      //   className="h-5 group text-foreground font-bold overflow-visible"
      //   href={path}
      // >
      //   <span className="pointer-events-none group-hover:-translate-y-[100%] group-hover:opacity-0 opacity-100 block duration-500">{`<${title}>`}</span>
      //   <span className="pointer-events-none group-hover:-translate-y-[100%] group-hover:opacity-100 opacity-0 block translate-y-[100%] duration-500">{`<${title}/>`}</span>
      // </Link>

      <Link
        ref={ref}
        className="h-5 group text-foreground font-bold overflow-clip"
        href={path}
      >
        <span className="group-hover:-translate-y-[100%] group-hover:opacity-0 opacity-100 block  duration-300">{`<${title}>`}</span>
        <span className="group-hover:-translate-y-[100%] group-hover:opacity-100 opacity-0 block translate-y-[100%]  duration-300">{`<${title}/>`}</span>
      </Link>
    );
  }
);

// Set display name for better debugging
NavLink.displayName = "NavLink";

export default NavLink;

// <Link
//   onMouseEnter={() => hoverHandler(true)}
//   onMouseLeave={() => hoverHandler(false)}
//   className="h-5 group text-foreground font-bold overflow-clip"
//   href={path}
// >
//   <span className="group-hover:-translate-y-[100%] group-hover:opacity-0 opacity-100 block  duration-300">{`<${title}>`}</span>
//   <span className="group-hover:-translate-y-[100%] group-hover:opacity-100 opacity-0 block translate-y-[100%]  duration-300">{`<${title}/>`}</span>
// </Link>
