"use client";
import React, { useEffect, useState } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { FiMoon } from "react-icons/fi";
import Image from "next/image";
import { motion } from "framer-motion";
import DarkModeButton from "./DarkModeButton";
import LoginButton from "./LoginButton";
import { useSession } from "next-auth/react";
import { BsGithub } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

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

  const scrollToUsername = () => {
    const selectors = [
      `[data-username="${session?.user?.username}"]`,
      `#username-${session?.user?.username}`,
      ".username",
      '[class*="username"]',
    ];

    let targetElement = null;

    for (const selector of selectors) {
      targetElement = document.querySelector(selector);
      if (targetElement) break;
    }

    if (!targetElement && session?.user?.username) {
      const allElements = document.querySelectorAll("*");
      for (const element of allElements) {
        if (
          element.textContent?.includes(session.user.username) &&
          element.textContent.trim() === session.user.username
        ) {
          targetElement = element;
          break;
        }
      }
    }

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    } else {
      console.warn("Username element not found on the page");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <motion.nav
      className="sticky top-7 z-10 rounded-2xl border border-border-theme-light backdrop-blur-lg dark:border-border-theme px-2 py-2.5 sm:px-6 sm:py-4 flex justify-between items-center sm:gap-0 gap-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: show ? 0 : -100, opacity: show ? 1 : 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <h1 className="text-3xl sm:text-5xl font-bold lg:hidden">
        G<span className="text-primary">&</span>S
      </h1>
      <h1 className="text-5xl font-bold hidden lg:block">
        Github
        <span className="dark:text-primary text-light-primary"> Stats</span>
      </h1>
      <div className="flex md:gap-7 gap-3  items-center justify-between w-full sm:w-fit">
        <div className="flex sm:gap-2 gap-1  items-center">
          <IoSunnyOutline size={25} />
          <DarkModeButton />
          <FiMoon size={25} />
        </div>
        <Link href={"https://github.com/HMaan0/github-stats"} target={"blank"}>
          <div className="flex justify-between items-center w-min sm:w-full gap-3 p-0 sm:p-2 rounded-lg border-0 sm:border dark:border-0 border-border-theme-light  bg-transparent sm:bg-light-card  sm:dark:bg-black text-sm group">
            <div className="flex justify-center items-center gap-0 sm:gap-2">
              <BsGithub className="text-3xl sm:text-lg" />{" "}
              <span className="hidden sm:block">GitHub</span>
            </div>
            <FaStar
              size={15}
              className="group-hover:text-yellow-400 transition-colors duration-200 hidden sm:block"
            />
          </div>
        </Link>
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
                className="rounded-lg cursor-pointer hover:opacity-80 transition-opacity duration-200"
                onClick={scrollToUsername}
              />
            )}
          </>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
