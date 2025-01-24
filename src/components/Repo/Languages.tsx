import React from "react";
import { color } from "../../../color";
const Languages = ({
  languages,
}: {
  languages: { name: string; size: number; color?: string }[];
}) => {
  languages = languages.sort((a, b) => b.size - a.size);
  let totalSize = 0;
  for (let i = 0; i < languages.length; i++) {
    totalSize += languages[i].size;

    const colorObj = color.find((obj) =>
      Object.keys(obj).includes(languages[i].name)
    );

    if (colorObj) {
      languages[i]["color"] = colorObj[
        languages[i].name as keyof typeof colorObj
      ] as string;
    } else {
      languages[i]["color"] = "#ffffff";
    }
  }

  for (let i = 0; i < languages.length; i++) {
    const sizePercent = (languages[i].size / totalSize) * 100;

    languages[i].size = Math.round(sizePercent * 10) / 10;
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex  w-full gap-0.5">
        {languages.map((language, index) => (
          <React.Fragment key={index}>
            {language.size > 1 && (
              <span
                className={` flex w-min p-1 ${index === 0 && "rounded-l-full"}
            ${index === languages.length - 1 && "rounded-r-full"}`}
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
        {languages.map((language, index) => (
          <React.Fragment key={index}>
            {language.size > 1 && (
              <div className="flex justify-center items-center gap-1 sm:text-base text-xs ">
                <span
                  className={`p-1.5 w-min h-min rounded-full mr-0.5`}
                  style={{ backgroundColor: `${language.color}` }}
                ></span>
                <p>{language.name}</p>
                <p className="dark:text-white/45 text-black/45">
                  {language.size}%
                </p>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Languages;
