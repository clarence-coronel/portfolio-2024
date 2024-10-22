// components/ThemeBtn.tsx
"use client";
import React from "react";
import LightModeIcon from "@/components/icons/light-mode-icon";
import DarkModeIcon from "@/components/icons/dark-mode-icon";
import IconLink from "@/components/navigation/components/icon-link";
import { useTheme } from "@/context/ThemeContext";

const ThemeBtn = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="relative mt-auto" onClick={toggleTheme}>
      {theme === "dark" ? (
        <IconLink orientation="right" title="Light">
          <LightModeIcon
            innerColor="var(--background)"
            outerColor="var(--foreground)"
          />
        </IconLink>
      ) : (
        <IconLink orientation="right" title="Dark">
          <DarkModeIcon
            innerColor="var(--background)"
            outerColor="var(--foreground)"
          />
        </IconLink>
      )}
    </button>
  );
};

export default ThemeBtn;
