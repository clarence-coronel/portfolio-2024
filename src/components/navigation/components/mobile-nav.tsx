import BurgerIcon from "@/components/icons/burger-icon";
import React, { useEffect, useState } from "react";
import NavLink from "./nav-link";
import LogoIcon from "@/components/icons/logo-icon";
import CloseIcon from "@/components/icons/close-icon";

import ThemeBtn from "../../footer/components/theme-btn";
import GitIcon from "@/components/icons/git-icon";
import FileIcon from "@/components/icons/file-icon";
import LinkedinIcon from "@/components/icons/linkedin-icon";
import useWindowSize from "@/hooks/useWindowSize";

const iconLinks = [
  { title: "Github", Icon: GitIcon },
  { title: "Resume", Icon: FileIcon },
  { title: "Linkedin", Icon: LinkedinIcon },
];

const links = [
  {
    path: "#about",
    title: "About",
  },
  {
    path: "#experience",
    title: "Experience",
  },
  {
    path: "#skills",
    title: "Skills",
  },
  {
    path: "#projects",
    title: "Projects",
  },
  {
    path: "#contact",
    title: "Contact",
  },
];

const MobileNav = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const windowSize = useWindowSize();

  const toggleNav = () => {
    if (!hasInteracted) setHasInteracted(true);
    setShowMobileNav(!showMobileNav);
  };

  useEffect(() => {
    setShowMobileNav(false);
    setHasInteracted(false);
  }, [windowSize]);

  return (
    <div className="md:hidden relative z-50 flex items-center">
      <button
        onClick={toggleNav}
        className={`hover:scale-110 aspect-square h-full duration-200 p-1 rounded-md`}
      >
        <BurgerIcon innerColor="var(--foreground)" />
      </button>

      <div
        className={`
          fixed right-0 top-0 h-screen w-screen bg-primary rounded-md pl-[40px] pr-5 py-4
          ${
            !hasInteracted
              ? "hidden"
              : showMobileNav
              ? "flex flex-col mobile-nav-intro"
              : "flex flex-col mobile-nav-exit"
          }
        `}
      >
        <div className="h-full relative z-10 flex flex-col justify-start items-start gap-10">
          <div className="w-full flex justify-between items-center ">
            <LogoIcon
              className="hover:rotate-180 duration-200"
              size={40}
              innerColor="var(--secondary)"
            />
            <button
              className={`hover:scale-110 aspect-square h-full duration-200 p-1 rounded-md`}
              onClick={toggleNav}
            >
              <CloseIcon size={30} innerColor="var(--foreground)" />
            </button>
          </div>
          {links.map((link) => (
            <div key={link.path} onClick={toggleNav}>
              <NavLink title={link.title} path={link.path} />
            </div>
          ))}

          <div className="mt-auto w-full flex justify-between pb-10">
            {iconLinks.map((iconLink, index) => (
              <iconLink.Icon
                key={index}
                className="text-foreground cursor-pointer"
                innerColor="var(--background)"
                outerColor="var(--foreground)"
              />
            ))}

            <ThemeBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
