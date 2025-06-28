import { GoDotFill } from "react-icons/go";
import Score from "./Score";
import axios from "axios";

const GraphScore = async ({
  total,
  user,
  score,
}: {
  total: { 2025: number };
  user: string;
  score: number | null;
}) => {
  let data = { public_repos: 0 };
  try {
    const userRes = await axios({
      url: `https://api.github.com/users/${user}`,
      headers: {
        authorization: `Bearer ${process.env.Header}`,
        "Content-Type": "application/json",
      },
    });
    data = userRes.data;
  } catch (error) {
    console.error("GitHub API error:", error);
    // Handle error gracefully
  }

  return (
    <>
      <div className="sm:text-base text-xs gap-2 md:text-md break-words w-full flex  flex-row  flex-wrap justify-between dark:text-white/50 text-black/50">
        <p className="flex items-center ">
          <GoDotFill className="text-light-accent dark:text-accent" />
          Repositories
          <span className="dark:text-white text-black m-1">
            {data.public_repos ? data.public_repos : 0}
          </span>
        </p>
        <p className="flex items-center ">
          <GoDotFill className="text-light-accent dark:text-accent" />
          Total contributions
          <span className="dark:text-white text-black m-1">{total[2025]}</span>
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
