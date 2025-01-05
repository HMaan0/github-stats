import React from "react";
import { color } from "../../../color";
const Languages = () => {
  let techStack: { name: string; size: number; color?: string }[] = [
    {
      name: "JavaScript",
      size: 7268,
    },
    {
      name: "HTML",
      size: 1738,
    },
    {
      name: "CSS",
      size: 394,
    },
    {
      name: "SCSS",
      size: 2316,
    },
    {
      name: "Rust",
      size: 23,
    },
  ];
  techStack = techStack.sort((a, b) => b.size - a.size);
  let totalSize = 0;
  for (let i = 0; i < techStack.length; i++) {
    totalSize += techStack[i].size;

    const colorObj = color.find((obj) =>
      Object.keys(obj).includes(techStack[i].name)
    );

    if (colorObj) {
      techStack[i]["color"] = colorObj[
        techStack[i].name as keyof typeof colorObj
      ] as string;
    } else {
      techStack[i]["color"] = "#ffffff";
    }
  }

  for (let i = 0; i < techStack.length; i++) {
    const sizePercent = (techStack[i].size / totalSize) * 100;

    techStack[i].size = Math.round(sizePercent * 10) / 10;
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex  w-full gap-0.5">
        {techStack.map((language, index) => (
          <React.Fragment key={index}>
            {language.size > 1 && (
              <span
                className={` flex w-min p-1 ${index === 0 && "rounded-l-full"}
            ${index === techStack.length - 1 && "rounded-r-full"}`}
                style={{
                  width: `${language.size}%`,
                  backgroundColor: `${language.color}`,
                }}
              ></span>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="flex flex-row justify-between flex-wrap gap-1">
        {techStack.map((language, index) => (
          <React.Fragment key={index}>
            {language.size > 1 && (
              <div className="flex justify-center items-center gap-1 sm:text-base text-xs ">
                <span
                  className={`p-1.5 w-min h-min rounded-full mr-0.5`}
                  style={{ backgroundColor: `${language.color}` }}
                ></span>
                <p>{language.name}</p>
                <p className=" text-white/45">{language.size}%</p>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Languages;
