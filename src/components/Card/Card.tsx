import React from "react";
import Image from "next/image";
import GithubGraph from "./GithubGraph";
const Card = () => {
  return (
    <div className="hover:-translate-y-1 transition-transform duration-300 p-5 w-full flex justify-between bg-light-card dark:bg-transparent shadow-lg dark:shadow-inner-custom rounded-xl">
      <Image
        src={"https://avatars.githubusercontent.com/u/8079861?v=4"}
        width={"87"}
        height={"87"}
        alt="gitHub avatars"
        className="rounded-lg"
      />
      <GithubGraph />
      <button className="font-bold text-6xl dark:text-accent text-light-accent">
        +
      </button>
    </div>
  );
};

export default Card;
