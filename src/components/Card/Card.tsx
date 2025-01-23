"use client";
import { useEffect, memo } from "react";
import ExpandCard from "./ExpandCard";
import PlusButton from "../PlusButton";
import Line from "../Line";
import GithubAvatar from "./GithubAvatar";
import GithubGraph from "./githubGraph/GithubGraph";
import { useScore } from "@/Hooks/useScore";
import { useSession } from "next-auth/react";
import { useUsers } from "@/Hooks/useUsers";
import { useSortedUsers } from "@/Hooks/SortedUser";
import { useTime } from "@/Hooks/Time";
import { differenceInMinutes, differenceInHours } from "date-fns";

const Card = () => {
  const { data: session } = useSession();
  const { users } = useUsers();
  const sortedUsers = useSortedUsers((state) => state.sortedUsers);
  const setSortedUsers = useSortedUsers((state) => state.setSortedUsers);
  const scores = useScore((state) => state.scores);
  const username = session?.user?.username;
  const time = useTime((state) => state.time);
  useEffect(() => {
    if (users && users.length > 0) {
      setSortedUsers(users);
    }
  }, [users]);

  useEffect(() => {
    if (Object.keys(scores).length > 0) {
      const sortedUsersScore = Object.entries(scores)
        .map(([user, score]) => ({ user, score }))
        .sort((a, b) => b.score - a.score);

      setSortedUsers(sortedUsersScore.map((item) => item.user));
    }
  }, [scores]);

  return (
    <>
      {sortedUsers.length > 0 ? (
        <>
          {username === undefined ? (
            sortedUsers.map((user, index) => (
              <UserCard
                key={index}
                user={user}
                index={index}
                lastFetched={time[user]}
              />
            ))
          ) : username && !sortedUsers.includes(username) ? (
            <UserCard
              user={username}
              index={0}
              newUser={true}
              lastFetched={time[username]}
            />
          ) : (
            sortedUsers.map((user, index) => (
              <UserCard
                key={index}
                user={user}
                index={index}
                lastFetched={time[user]}
              />
            ))
          )}
        </>
      ) : (
        <p className="text-center text-accent">Loading...</p>
      )}
    </>
  );
};
const UserCard = ({
  user,
  index,
  newUser,
  lastFetched,
}: {
  user: string;
  index: number;
  newUser?: boolean;
  lastFetched: string | null;
}) => {
  const now = new Date();
  const fetchedTime = lastFetched ? new Date(lastFetched) : null;
  let timeDiff = "N/A";

  if (fetchedTime) {
    const diffInMinutes = differenceInMinutes(now, fetchedTime);

    if (diffInMinutes < 60) {
      timeDiff = `${diffInMinutes} min${diffInMinutes === 1 ? "" : "s"} ago`;
    } else {
      const diffInHours = differenceInHours(now, fetchedTime);
      timeDiff = `${diffInHours} hour${diffInHours === 1 ? "" : "s"} ago`;
    }
  }
  return (
    <div
      key={user}
      className="p-5 flex flex-col gap-5 bg-light-card dark:bg-transparent shadow-lg dark:shadow-inner-custom rounded-xl w-full transition-transform duration-300"
    >
      <div className="items-center w-full flex ">
        <div className="w-full flex gap-3">
          <GithubAvatar user={user} />
          <div className="flex flex-col justify-between py-2">
            <p className="font-semibold text-md md:text-xl">{user}</p>
            <p className="dark:text-white/50 text-black/50 text-sm flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full dark:bg-primary bg-light-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 dark:bg-primary bg-light-primary"></span>
              </span>
              Last fetched
              <span className="dark:text-white text-black mr-1">
                {timeDiff}
              </span>
            </p>
          </div>
        </div>
        <div className="w-min flex justify-center items-center">
          <p
            className={`text-7xl font-extrabold font-mono bg-gradient-to-b bg-clip-text text-transparent ${
              index === 0 && "from-amber-200 to-yellow-500"
            } ${index === 1 && "from-slate-300 to-slate-500"} ${
              index === 2 && "from-[#db6c2b] to-[#673208]"
            } ${
              index > 2 &&
              "dark:from-primary dark:to-accent from-light-accent to-light-primary"
            }`}
          >
            {index + 1}
          </p>
        </div>
      </div>
      <Line />
      <GithubGraph user={user} />
      <PlusButton user={user} />
      <ExpandCard user={user} newUser={newUser} />
    </div>
  );
};
export default memo(Card);
