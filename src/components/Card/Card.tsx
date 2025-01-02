import React from "react";
import Image from "next/image";
import GithubGraph from "./GithubGraph";
const Card = () => {
  return (
    <div className="items-center  gap-3 hover:-translate-y-0.5 transition-transform duration-300 p-5 w-full flex justify-between bg-light-card dark:bg-transparent shadow-lg dark:shadow-inner-custom rounded-xl">
      <div className="flex items-center w-32  h-max justify-center ">
        <Image
          src={"https://avatars.githubusercontent.com/u/8079861?v=4"}
          width={"85"}
          height={"85"}
          alt="gitHub avatars"
          className="rounded-lg"
        />
      </div>
      <GithubGraph />
      <button className="font-bold text-6xl dark:text-accent text-light-accent">
        +
      </button>
    </div>
  );
};

export default Card;
