import React from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { FiMoon } from "react-icons/fi";
import Image from "next/image";
import DarkModeButton from "./DarkModeButton";

const Navbar = () => {
  return (
    <nav className="sticky top-7 z-50 rounded-2xl border border-border-theme-light backdrop-blur-lg dark:border-border-theme px-6 py-4 flex justify-between items-center">
      <h1 className="text-5xl font-bold md:hidden">
        G<span className="text-primary ">&</span>S
      </h1>
      <h1 className="text-5xl font-bold hidden md:block">
        Github
        <span className="dark:text-primary text-light-primary"> Stats</span>
      </h1>
      <div className="flex gap-10 items-center justify-between">
        <div className="flex gap-2">
          <div>
            <IoSunnyOutline size={25} />
          </div>
          <DarkModeButton />

          <div>
            <FiMoon size={25} />
          </div>
        </div>
        <Image
          src={"https://avatars.githubusercontent.com/u/8079861?v=4"}
          width={"50"}
          height={"50"}
          alt="gitHub avatars"
          className="rounded-lg"
        />
      </div>
    </nav>
  );
};

export default Navbar;
