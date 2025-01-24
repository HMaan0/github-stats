"use client";
import React, { useEffect, useState } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { FiMoon } from "react-icons/fi";
import Image from "next/image";
import { motion } from "framer-motion";
import DarkModeButton from "./DarkModeButton";
import LoginButton from "./LoginButton";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { data: session, status } = useSession();
  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <motion.nav
      className="sticky top-7 z-10 rounded-2xl border border-border-theme-light backdrop-blur-lg dark:border-border-theme px-6 py-4 flex justify-between items-center"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: show ? 0 : -100, opacity: show ? 1 : 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <h1 className="text-4xl sm:text-5xl font-bold md:hidden">
        G<span className="text-primary">&</span>S
      </h1>
      <h1 className="text-5xl font-bold hidden md:block">
        Github
        <span className="dark:text-primary text-light-primary"> Stats</span>
      </h1>
      <div className="flex md:gap-12 gap-3 sm:gap-10 items-center justify-between">
        <div className="flex sm:gap-2 gap-1  items-center">
          <IoSunnyOutline size={25} />
          <DarkModeButton />
          <FiMoon size={25} />
        </div>
        {status !== "authenticated" ? (
          <LoginButton />
        ) : (
          <>
            {session.user?.image && (
              <Image
                src={session.user?.image}
                width={50}
                height={50}
                alt="GitHub avatar"
                className="rounded-lg"
              />
            )}
          </>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
