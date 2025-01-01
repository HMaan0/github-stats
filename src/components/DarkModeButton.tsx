"use client";

import { useTheme } from "next-themes";

const DarkModeButton = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div
      className={` bg-light-card border dark:border-border-theme border-border-theme-light dark:bg-white w-12 px-0.5 h-min py-1 rounded-full flex items-center   ${
        theme === "light" ? "justify-start" : "justify-end"
      }`}
    >
      <button
        className="w-1/3 bg-white dark:bg-black p-2 rounded-full transition-all duration-500 hover:w-5/12 ease-in-out"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      ></button>
    </div>
  );
};

export default DarkModeButton;
