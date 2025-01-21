"use client";
import GraphScore from "./GraphScore";
import axios from "axios";
import { Suspense, useEffect, useState } from "react";
const GithubGraph = ({ user }: { user: string }) => {
  const [contributions, setContribution] = useState([]);
  const [totalContributions, setTotalContribution] = useState({ 2024: 0 });
  useEffect(() => {
    async function fetch() {
      const response = await axios(
        `https://github-contributions-api.jogruber.de/v4/${user}?y=2024`
      );
      const contr = response.data.contributions;
      const totalContr = response.data.total;
      setContribution(contr);
      setTotalContribution(totalContr);
    }
    fetch();
  }, [user]);

  const weeks = [];
  if (contributions.length > 0) {
    for (let i = 0; i < contributions.length; i += 7) {
      weeks.push(contributions.slice(i, i + 7));
    }
  }

  return (
    <>
      <GraphScore total={totalContributions} user={user} />
      <Suspense fallback={<GithubGraphLoading />}>
        <div className="flex gap-[3px] overflow-x-auto graph-scrollbar dark:graph-scrollbar-dark graph-scrollbar-light">
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-[3px]">
              {week.map(
                (day: { date: React.Key; level: number; count: number }) => (
                  <span
                    key={day.date}
                    className={` md:rounded-[3px]  md:p-[5px] sm:p-[4.5px] sm:rounded-[2.5px] p-[4px] rounded-[2.5px] border  ${
                      day.level === 0 &&
                      "dark:bg-white/10 bg-black/10 border-border-theme-light dark:border-transparent"
                    } ${
                      day.level === 1 &&
                      "dark:bg-primary/35 bg-light-primary/45 dark:border-transparent border-bg-light-primary/35"
                    }
              ${
                day.level === 2 &&
                "dark:bg-primary/50 bg-light-primary/60 dark:border-transparent border-bg-light-primary/50 "
              }
              ${
                day.level === 3 &&
                "dark:bg-primary/75 bg-light-primary/85 dark:border-transparent border-bg-light-primary/75 "
              }
              ${
                day.level >= 4 &&
                "dark:bg-primary bg-light-primary  dark:border-transparent border-bg-light-primary"
              }`}
                    title={`Date: ${day.date}, contributions: ${day.count}`}
                  ></span>
                )
              )}
            </div>
          ))}
        </div>
      </Suspense>
    </>
  );
};

function GithubGraphLoading() {
  const weeks = 52;
  const days = 7;

  return (
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
  );
}

export default GithubGraph;
