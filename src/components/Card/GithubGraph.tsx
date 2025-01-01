import axios from "axios";
import React from "react";

const GithubGraph = async () => {
  const response = await axios(
    "https://github-contributions-api.jogruber.de/v4/hmaan0?y=2024"
  );
  const total = response.data.total;
  const contributions = response.data.contributions;
  let count = 0;
  console.log(total);

  contributions.map((node: { level: number }, index: number) => {
    if (index % 7 === 0) {
      console.log(node.level);
      console.log(index);
      count++;
    }
  });
  console.log("this is count should 53 " + count);

  return (
    <>
      <div className="flex gap-[3px] ">
        {contributions.map(
          (node: { level: number; date: number }, index: number) => {
            {
              return (
                <div
                  key={node.date}
                  className={`${
                    index % 7 === 0 ? "flex flex-row gap-[3px]" : ""
                  }`}
                >
                  <span
                    className={`p-[5.5px] rounded-[3.5px] border border-border-theme  ${
                      node.level === 0 ? "bg-transparent" : "bg-primary"
                    } `}
                  ></span>
                </div>
              );
            }
          }
        )}
      </div>
    </>
  );
};

export default GithubGraph;
