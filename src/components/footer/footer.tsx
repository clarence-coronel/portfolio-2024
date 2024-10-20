"use client";
import React, { useEffect, useRef } from "react";
import IconLink from "../navigation/components/icon-link";
import ThemeBtn from "./components/theme-btn";
import { animate } from "popmotion";

import GitIcon from "../icons/git-icon";
import FileIcon from "../icons/file-icon";
import LinkedinIcon from "../icons/linkedin-icon";

import useScroll from "@/hooks/useScroll";

const iconLinks = [
  { title: "Github", Icon: GitIcon },
  { title: "Resume", Icon: FileIcon },
  { title: "Linkedin", Icon: LinkedinIcon },
];

const Footer = () => {
  const scrolled = useScroll();

  const iconRefs = useRef<(HTMLAnchorElement | HTMLDivElement | null)[]>([]);

  const iconsContainerRef = useRef<HTMLDivElement | null>(null);

  const getIconLinkRects = () => {
    const posArrTemp: DOMRect[] = [];
    iconRefs.current.forEach((linkRef) => {
      if (linkRef) {
        const rect: DOMRect = linkRef.getBoundingClientRect();
        posArrTemp.push(rect);
      }
    });

    return posArrTemp;
  };

  useEffect(() => {
    if (scrolled) {
      const initialIconPosTemp = getIconLinkRects();

      iconsContainerRef.current?.classList.add("flex-col");

      const finalIconPosTemp = getIconLinkRects();

      initialIconPosTemp?.forEach((pos, index) => {
        const deltaX = pos.x - finalIconPosTemp[index].x;
        const deltaY = pos.y - finalIconPosTemp[index].y;

        if (iconRefs.current[index]) {
          iconRefs.current[
            index
          ].style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        }

        // animate back to the final position
        animate({
          from: 1,
          to: 0,
          duration: 1000,
          onUpdate: (progress) => {
            const iconRef = iconRefs.current[index];
            if (iconRef) {
              iconRef.style.transform = `translate(${deltaX * progress}px, ${
                deltaY * progress
              }px)`;
            }
          },
        });
      });
    } else {
      const initialIconPosTemp = getIconLinkRects();

      iconsContainerRef.current?.classList.remove("flex-col");

      const finalIconPosTemp = getIconLinkRects();

      initialIconPosTemp?.forEach((pos, index) => {
        const deltaX = pos.x - finalIconPosTemp[index].x;
        const deltaY = pos.y - finalIconPosTemp[index].y;

        const iconRef = iconRefs.current[index];
        if (iconRef) {
          iconRef.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        }

        // animate back to the final position
        animate({
          from: 1,
          to: 0,
          duration: 1000,
          onUpdate: (progress) => {
            const iconRef = iconRefs.current[index];
            if (iconRef) {
              iconRef.style.transform = `translate(${deltaX * progress}px, ${
                deltaY * progress
              }px)`;
            }
          },
        });
      });
    }
  }, [scrolled]);

  return (
    <div className="max-w-[1900px] mx-auto h-20 w-full flex justify-between">
      <div
        ref={iconsContainerRef}
        className={`max-md:hidden w-fit mr-auto flex gap-14 fixed left-0 bottom-0 z-50 px-20 max-xl:px-8 max-md:py-5 py-10 max-lg:py-5`}
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

        <div className="md:hidden">
          <div className="flex">
            <ThemeBtn />
          </div>
        </div>
      </div>

      <div className="max-md:hidden mt-auto fixed z-50 bottom-0 right-0 px-20 max-xl:px-5 max-md:py-5 py-10">
        <div className="flex">
          <ThemeBtn />
        </div>
      </div>
    </div>
  );
};

export default Footer;
