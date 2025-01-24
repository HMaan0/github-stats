import React from "react";
import GithubGraphLoading from "./githubGraph/GithubGraphLoading";
import Line from "../Line";
import ImageLoading from "../ImageLoading";

const CardLoading = () => {
  return (
    <>
      <div className="p-5 flex flex-col gap-5 bg-light-card dark:bg-transparent shadow-lg dark:shadow-inner-custom rounded-xl w-full transition-transform duration-300">
        <div className="items-center w-full flex ">
          <div className="w-full flex gap-3">
            <ImageLoading />
          </div>
        </div>
        <Line />
        <GithubGraphLoading />
        <div className="flex animate-pulse w-full h-10">
          <div className="flex-1 w-min">
            <div className=" h-2 w-min rounded bg-light-secondary dark:bg-secondary"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardLoading;
