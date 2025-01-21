"use client";
import { GoDotFill } from "react-icons/go";
import Score from "./Score";
import { useEffect, useState } from "react";
import axios from "axios";

const GraphScore = ({
  total,
  user,
}: {
  total: { 2024: number };
  user: string;
}) => {
  const [data, setData] = useState({ public_repos: 0 });
  useEffect(() => {
    async function fetch() {
      const userRes = await axios(`https://api.github.com/users/${user}`);
      setData(userRes.data);
    }
    fetch();
  }, [user]);

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
          <span className="dark:text-white text-black m-1">{total[2024]}</span>
        </p>
        <p className="flex items-center ">
          <GoDotFill className="text-light-accent dark:text-accent" />
          Score
          <Score user={user} />
        </p>
      </div>
    </>
  );
};

export default GraphScore;
