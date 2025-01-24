"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const DarkModeButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={` bg-light-card border dark:border-border-theme border-border-theme-light dark:bg-white w-12 px-0.5 h-min py-1 rounded-full flex items-center   ${
        theme === "dark" ? "justify-end" : "justify-start"
      }`}
    >
      <span className="w-1/3 bg-white dark:bg-black p-2 rounded-full transition-all duration-500 hover:w-5/12 ease-in-out"></span>
    </button>
  );
};

export default DarkModeButton;
