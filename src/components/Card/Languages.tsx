import React from "react";
import { color } from "../../../color";
const Languages = () => {
  let techStack: { name: string; size: number; color?: string }[] = [
    {
      name: "HTML",
      size: 1771,
    },
    {
      name: "CSS",
      size: 640,
    },
    {
      name: "JavaScript",
      size: 160480,
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
    <>
      <div className="flex  w-full gap-0.5">
        {techStack.map((language, index) => (
          <span
            key={index}
            className={` flex w-min p-1 ${index === 0 && "rounded-l-full"}
            ${index === techStack.length - 1 && "rounded-r-full"}`}
            style={{
              width: `${language.size}%`,
              backgroundColor: `${language.color}`,
            }}
          ></span>
        ))}
      </div>
      <div className="flex flex-row justify-between">
        {techStack.map((language, index) => (
          <div
            key={index}
            className="flex justify-center items-center gap-1 text-sm"
          >
            <span
              className={`p-1.5 w-min h-min rounded-full mr-2`}
              style={{ backgroundColor: `${language.color}` }}
            ></span>
            <p>{language.name}</p>
            <p className=" text-white/45">{language.size}%</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Languages;
