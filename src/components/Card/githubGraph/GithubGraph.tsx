import GraphScore from "./GraphScore";
import axios from "axios";
import { Suspense } from "react";
import GithubGraphLoading from "./GithubGraphLoading";
const GithubGraph = async ({
  user,
  score,
}: {
  user: string;
  score: number | null;
}) => {
  let contributions = [];
  let totalContributions = { 2025: 0 };
  try {
    const response = await axios(
      `https://github-contributions-api.jogruber.de/v4/${user}?y=2025`
    );
    contributions = response.data.contributions;
    totalContributions = response.data.total;
  } catch (error) {
    console.error("can't get graph", error);
  }

  const weeks = [];
  if (contributions.length > 0) {
    for (let i = 0; i < contributions.length; i += 7) {
      weeks.push(contributions.slice(i, i + 7));
    }
  }

  return (
    <>
      <GraphScore total={totalContributions} user={user} score={score} />
      <Suspense fallback={<GithubGraphLoading />}>
        <div className="2xl:justify-center flex gap-[3px] 2xl:gap-1 overflow-x-auto graph-scrollbar dark:graph-scrollbar-dark graph-scrollbar-light">
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-[3px] 2xl:gap-1">
              {week.map(
                (day: { date: React.Key; level: number; count: number }) => (
                  <span
                    key={day.date}
                    className={` md:rounded-[3px] 2xl:rounded-[4px] 2xl:p-2  md:p-[5px] sm:p-[4.5px] sm:rounded-[2.5px] p-[4px] rounded-[2.5px] border  ${
                      day.level === 0 &&
                      "dark:bg-white/10 bg-black/10 border-border-theme-light dark:border-transparent"
                    } ${
                      day.level === 1 &&
                      "dark:bg-primary/35 bg-light-primary/45 dark:border-transparent border-bg-light-primary"
                    }
              ${
                day.level === 2 &&
                "dark:bg-primary/50 bg-light-primary/60 dark:border-transparent border-bg-light-primary"
              }
              ${
                day.level === 3 &&
                "dark:bg-primary/75 bg-light-primary/85 dark:border-transparent border-bg-light-primary "
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

export default GithubGraph;
