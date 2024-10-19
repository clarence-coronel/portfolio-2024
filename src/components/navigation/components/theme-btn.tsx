"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import LightModeIcon from "@/components/icons/light-mode-icon";
import DarkModeIcon from "@/components/icons/dark-mode-icon";

const ThemeBtn = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useLayoutEffect(() => {
    const localTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const initialTheme = localTheme || "light";
    setTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const selectedTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", selectedTheme);
    // localStorage.removeItem("theme");
    setTheme(selectedTheme);
  };

  const applyTheme = (theme: "light" | "dark") => {
    if (theme === "light") {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  };

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  // Apply theme before loading component
  applyTheme(
    localStorage.getItem("theme")
      ? (localStorage.getItem("theme") as "dark" | "light")
      : "light"
  );

  return (
    <button className="z-10 relative" onClick={toggleTheme}>
      {theme === "dark" ? (
        <LightModeIcon
          size={30}
          innerColor="var(--background)"
          outerColor="var(--foreground)"
        />
      ) : (
        <DarkModeIcon
          size={30}
          innerColor="var(--background)"
          outerColor="var(--foreground)"
        />
      )}
    </button>
  );
};

export default ThemeBtn;
