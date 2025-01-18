import { GoDotFill } from "react-icons/go";
import Score from "./Score";

const GraphScore = async ({
  total,
  user,
  score,
}: {
  total: { 2024: number };
  user: string;
  score: number;
}) => {
  const resp = await fetch(`https://api.github.com/users/${user}`);
  const data = await resp.json();

  return (
    <>
      <div className="sm:text-base text-xs gap-2 md:text-md break-words w-full flex  flex-row  flex-wrap justify-between dark:text-white/50 text-black/50">
        <p className="flex items-center ">
          <GoDotFill className="text-light-accent dark:text-accent" />
          Repositories
          <span className="dark:text-white text-black m-1">
            {data.public_repos}
          </span>
        </p>
        <p className="flex items-center ">
          <GoDotFill className="text-light-accent dark:text-accent" />
          Total contributions
          <span className="dark:text-white text-black m-1">{total[2024]}</span>
        </p>
        <p className="flex items-center ">
          <GoDotFill className="text-light-accent dark:text-accent" />
          Score
          <Score score={score} />
        </p>
      </div>
    </>
  );
};

export default GraphScore;
