"use client";
import React, { useEffect, useRef, useState } from "react";
import LogoIcon from "../icons/logo-icon";
import Link from "next/link";
import GitIcon from "../icons/git-icon";
import FileIcon from "../icons/file-icon";
import LinkedinIcon from "../icons/linkedin-icon";
import EmailIcon from "../icons/email-icon";
import HighlightText from "../ui/highlight-text";
import NavLink from "./components/nav-link";
import IconLink from "./components/icon-link";

import useScroll from "@/hooks/useScroll";
import useWindowSize from "@/hooks/useWindowSize";
import { animate } from "popmotion";

interface Link {
  path: string;
  title: string;
}

const links = [
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/skills",
    title: "Skills",
  },
  {
    path: "/projects",
    title: "Projects",
  },
  {
    path: "/contact",
    title: "Contact",
  },
];

const iconLinks = [
  { title: "Github", Icon: GitIcon },
  { title: "Resume", Icon: FileIcon },
  { title: "Linkedin", Icon: LinkedinIcon },
];

const Navigation = () => {
  const scrolled = useScroll();
  const windowSize = useWindowSize();

  const navRef = useRef<HTMLElement | null>(null);
  const iconsContainerRef = useRef<HTMLDivElement | null>(null);

  // Create an array of refs for each NavLink
  const navLinkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const iconRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const getNavLinkRects = () => {
    const posArrTemp: any[] = [];
    navLinkRefs.current.forEach((linkRef, index) => {
      if (linkRef) {
        const rect = linkRef.getBoundingClientRect();
        posArrTemp.push(rect);
      }
    });

    return posArrTemp;
  };

  const getIconLinkRects = () => {
    const posArrTemp: any[] = [];
    iconRefs.current.forEach((linkRef, index) => {
      if (linkRef) {
        const rect = linkRef.getBoundingClientRect();
        posArrTemp.push(rect);
      }
    });

    return posArrTemp;
  };

  useEffect(() => {
    if (scrolled) {
      const initialPosTemp = getNavLinkRects();

      navRef.current?.classList.add("flex-col");

      const finalPosTemp = getNavLinkRects();

      const tempFinalPosWindow = { ...windowSize };

      initialPosTemp?.forEach((pos, index) => {
        const deltaX = pos.x - finalPosTemp[index].x;
        const deltaY = pos.y - finalPosTemp[index].y;

        navLinkRefs.current[
          index
        ].style.transform = `translate(${deltaX}px, ${deltaY}px)`;

        // animate back to the final position
        animate({
          from: 1,
          to: 0,
          duration: 1000,
          onUpdate: (progress) => {
            navLinkRefs.current[index].style.transform = `translate(${
              deltaX * progress
            }px, ${deltaY * progress}px)`;
          },
        });
      });

      const initialIconPosTemp = getIconLinkRects();

      iconsContainerRef.current?.classList.add("flex-col");

      const finalIconPosTemp = getIconLinkRects();

      initialIconPosTemp?.forEach((pos, index) => {
        const deltaX = pos.x - finalIconPosTemp[index].x;
        const deltaY = pos.y - finalIconPosTemp[index].y;

        iconRefs.current[
          index
        ].style.transform = `translate(${deltaX}px, ${deltaY}px)`;

        // animate back to the final position
        animate({
          from: 1,
          to: 0,
          duration: 1000,
          onUpdate: (progress) => {
            iconRefs.current[index].style.transform = `translate(${
              deltaX * progress
            }px, ${deltaY * progress}px)`;
          },
        });
      });
    } else {
      const initialPosTemp = getNavLinkRects();

      navRef.current?.classList.remove("flex-col");

      const finalPosTemp = getNavLinkRects();

      initialPosTemp?.forEach((pos, index) => {
        const deltaX = pos.x - finalPosTemp[index].x;
        const deltaY = pos.y - finalPosTemp[index].y;

        navLinkRefs.current[
          index
        ].style.transform = `translate(${deltaX}px, ${deltaY}px)`;

        // animate back to the final position
        animate({
          from: 1,
          to: 0,
          duration: 1000,
          onUpdate: (progress) => {
            navLinkRefs.current[index].style.transform = `translate(${
              deltaX * progress
            }px, ${deltaY * progress}px)`;
          },
        });
      });

      const initialIconPosTemp = getIconLinkRects();

      iconsContainerRef.current?.classList.remove("flex-col");

      const finalIconPosTemp = getIconLinkRects();

      initialIconPosTemp?.forEach((pos, index) => {
        const deltaX = pos.x - finalIconPosTemp[index].x;
        const deltaY = pos.y - finalIconPosTemp[index].y;

        iconRefs.current[
          index
        ].style.transform = `translate(${deltaX}px, ${deltaY}px)`;

        // animate back to the final position
        animate({
          from: 1,
          to: 0,
          duration: 1000,
          onUpdate: (progress) => {
            iconRefs.current[index].style.transform = `translate(${
              deltaX * progress
            }px, ${deltaY * progress}px)`;
          },
        });
      });
    }
  }, [scrolled]);

  return (
    <header className="z-50 max-lg:px-16 max-md:px-5 max-md:py-5 px-28 py-10 fixed w-screen h-screen flex flex-col justify-between items-center">
      <div className="max-w-[1900px] w-full flex flex-col justify-between h-full">
        <div className="z-10 w-full flex justify-between items-start">
          <Link href="/" className="hover:rotate-180 duration-500">
            <LogoIcon
              className="max-md:hidden"
              size={60}
              innerColor="var(--secondary)"
            />
            <LogoIcon
              className="md:hidden"
              size={50}
              innerColor="var(--secondary)"
            />
          </Link>
          <nav
            ref={navRef}
            className={`max-md:hidden max-lg:gap-8 max-xl:gap-10 flex max-md:gap-5 gap-14 z-50 my-auto`}
          >
            {links.map((link, index) => (
              <NavLink
                key={link.path}
                title={link.title}
                path={link.path}
                ref={(el) => (navLinkRefs.current[index] = el)}
              />
            ))}
          </nav>
        </div>

        <div
          className={`${
            scrolled ? "landing-page-text-exit" : "landing-page-text-intro"
          } z-10 max-lg:gap-8 max-md:gap-5 max-sm:gap-3 flex flex-col justify-center items-center gap-10 pb-28 max-md:pb-48 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]`}
        >
          <h2 className="max-md:text-xl max-xl:text-2xl font-semibold text-3xl tracking-[0.25em] text-center">
            <HighlightText>C</HighlightText>LARENCE{" "}
            <HighlightText>C</HighlightText>ORONEL
          </h2>
          <h1 className="tracking-tighter max-md:text-3xl max-xl:text-5xl font-bold text-7xl max-w-[900px] text-balance text-center">
            {`<Full-stack Developer `}
            <HighlightText>
              passionate={"{"}true{"}"}
            </HighlightText>{" "}
            <HighlightText>experience="Junior"</HighlightText>
            {`/>`}
          </h1>
        </div>

        <div
          className={`${
            scrolled ? "landing-page-bg-exit" : "landing-page-bg-intro"
          } fixed -z-1 left-0 top-0 w-screen h-screen`}
        >
          <LogoIcon innerColor="var(--primary)" type="bg1" />
        </div>

        <div
          ref={iconsContainerRef}
          className={`w-fit mr-auto flex gap-14 z-50`}
        >
          {iconLinks.map((iconLink, index) => (
            <IconLink
              key={index}
              title={iconLink.title}
              ref={(el) => (iconRefs.current[index] = el)} // Assign the ref to each IconLink
            >
              <iconLink.Icon
                size={30}
                className="text-foreground cursor-pointer"
                innerColor="var(--background)"
              />
            </IconLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navigation;