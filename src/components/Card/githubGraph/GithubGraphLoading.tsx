import React from "react";

const GithubGraphLoading = () => {
  const weeks = 52;
  const days = 7;
  return (
    <>
      <div className="flex h-2 "></div>
      <div className="flex gap-[3px] overflow-x-auto graph-scrollbar dark:graph-scrollbar-dark graph-scrollbar-light">
        {Array.from({ length: weeks }, (_, weekIndex) => (
          <div key={weekIndex} className="flex flex-col gap-[3px]">
            {Array.from({ length: days }, (_, dayIndex) => (
              <span
                key={dayIndex}
                className="animate-pulse md:rounded-[3px] md:p-[5px] sm:p-[4.5px] sm:rounded-[2.5px] p-[4px] rounded-[2.5px] border dark:bg-white/10 bg-black/10 border-border-theme-light dark:border-transparent"
              ></span>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default GithubGraphLoading;
