"use client";
import React, { useEffect, useRef } from "react";
import LogoIcon from "../icons/logo-icon";
import Link from "next/link";

import NavLink from "./components/nav-link";

import useScroll from "@/hooks/useScroll";
import { animate } from "popmotion";

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

const Navigation = () => {
  const scrolled = useScroll();

  const navRef = useRef<HTMLElement | null>(null);

  const navLinkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const getNavLinkRects = () => {
    const posArrTemp: DOMRect[] = [];
    navLinkRefs.current.forEach((linkRef) => {
      if (linkRef) {
        const rect: DOMRect = linkRef.getBoundingClientRect();
        posArrTemp.push(rect);
      }
    });

    return posArrTemp;
  };

  useEffect(() => {
    if (window.scrollY > 500) {
      // setHasScrolled(true);
    }
  }, []);

  useEffect(() => {
    if (scrolled) {
      // setTimeout(() => {
      //   document.body.classList.add("bg-primary");
      // }, 2000);

      const initialPosTemp = getNavLinkRects();

      navRef.current?.classList.add("flex-col");

      const finalPosTemp = getNavLinkRects();

      initialPosTemp?.forEach((pos, index) => {
        const deltaX = pos.x - finalPosTemp[index].x;
        const deltaY = pos.y - finalPosTemp[index].y;

        if (navLinkRefs.current[index]) {
          navLinkRefs.current[
            index
          ].style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        }

        // animate back to the final position
        animate({
          from: 1,
          to: 0,
          duration: 1000,
          onUpdate: (progress) => {
            const navLink = navLinkRefs.current[index];
            if (navLink) {
              navLink.style.transform = `translate(${deltaX * progress}px, ${
                deltaY * progress
              }px)`;
            }
          },
        });
      });
    } else {
      // document.body.classList.remove("bg-primary");
      const initialPosTemp = getNavLinkRects();

      navRef.current?.classList.remove("flex-col");

      const finalPosTemp = getNavLinkRects();

      initialPosTemp?.forEach((pos, index) => {
        const deltaX = pos.x - finalPosTemp[index].x;
        const deltaY = pos.y - finalPosTemp[index].y;

        const navLink = navLinkRefs.current[index];
        if (navLink) {
          navLink.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        }

        // animate back to the final position
        animate({
          from: 1,
          to: 0,
          duration: 1000,
          onUpdate: (progress) => {
            const navLink = navLinkRefs.current[index];
            if (navLink) {
              navLink.style.transform = `translate(${deltaX * progress}px, ${
                deltaY * progress
              }px)`;
            }
          },
        });
      });
    }
  }, [scrolled]);

  return (
    <header
      className={`${
        !scrolled && "z-50"
      } max-lg:px-16 max-md:px-5 max-md:py-5 px-28 py-10 fixed w-screen h-screen flex flex-col justify-between items-center`}
    >
      <div className="max-w-[1900px] w-full flex flex-col justify-between h-full">
        <div className=" w-full flex justify-between items-start">
          <Link href="/" className="hover:rotate-180 duration-500 ">
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
            className={`max-md:hidden max-lg:gap-8 max-xl:gap-10 flex max-md:gap-5 gap-14 my-auto relative`}
          >
            {links.map((link, index) => (
              <NavLink
                key={link.path}
                title={link.title}
                path={link.path}
                ref={(el) => {
                  navLinkRefs.current[index] = el;
                }}
              />
            ))}
          </nav>
        </div>

        {/* <div className="w-full flex justify-between">
          <div
            ref={iconsContainerRef}
            className={`max-sm:flex-col w-fit mr-auto flex gap-14 z-50 `}
          >
            {iconLinks.map((iconLink, index) => (
              <IconLink
                key={index}
                title={iconLink.title}
                orientation="left"
                ref={(el: HTMLDivElement | null) => {
                  iconRefs.current[index] = el;
                }}
              >
                <iconLink.Icon
                  className="text-foreground cursor-pointer"
                  innerColor="var(--background)"
                  outerColor="var(--foreground)"
                />
              </IconLink>
            ))}
          </div>

          <div className="mt-auto">
            <IconLink orientation="right" title="Toggle Theme">
              <div className="flex">
                <ThemeBtn />
              </div>
            </IconLink>
          </div>
        </div> */}
      </div>
    </header>
  );
};

export default Navigation;
