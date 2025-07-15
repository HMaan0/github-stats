import ExpandCard from "./ExpandCard";
import Line from "../Line";
import GithubAvatar from "./GithubAvatar";
import GithubGraph from "./githubGraph/GithubGraph";
import { differenceInMinutes, differenceInHours } from "date-fns";
import Link from "next/link";
import CardLoading from "./CardLoading";
import PlusButton from "../PlusButton";
import { APIResponse } from "@harshmaan/github_rank_backend_types";
import { getUsers } from "@/lib/actions/getUsers";
import { Suspense } from "react";
import UserSpecificCard from "./UserSpecificCard";

interface Users {
  id: number;
  name: string;
  score: number | null;
  data: APIResponse | unknown;
  LastFetched: Date | null;
}

const Card = async () => {
  const users: Users[] | undefined = await getUsers();

  if (!users) {
    return (
      <>
        <CardLoading />
        <CardLoading />
        <CardLoading />
        <CardLoading />
        <CardLoading />
      </>
    );
  }

  return (
    <>
      <Suspense fallback={null}>
        <UserSpecificCard users={users} />
      </Suspense>

      {users.map((user, index) => (
        <UserCard
          key={user.name}
          user={user.name}
          userData={
            user.data && typeof user.data === "object" && user.data !== null
              ? (user.data as APIResponse)
              : null
          }
          index={index}
          lastFetched={user.LastFetched}
          score={user.score}
          newUser={false}
        />
      ))}
    </>
  );
};

export const UserCard = ({
  user,
  userData,
  index,
  lastFetched,
  score,
  newUser,
}: {
  user: string;
  userData: APIResponse | null;
  index: number;
  lastFetched: Date | null | undefined;
  score: number | null;
  newUser?: boolean;
}) => {
  const now = new Date();
  const fetchedTime = lastFetched ? lastFetched : null;
  let timeDiff = `0`;

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
            <Link href={`https://github.com/${user}`} target="blank">
              <p className="font-semibold text-md md:text-xl">{user}</p>
            </Link>
            <p className="dark:text-white/50 text-black/50 text-sm flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full dark:bg-primary bg-light-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 dark:bg-primary bg-light-primary"></span>
              </span>
              Last fetch
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
              (index == -1 || index > 2) &&
              "dark:from-primary dark:to-accent from-light-accent to-light-primary"
            }`}
          >
            {index + 1}
          </p>
        </div>
      </div>
      <Line />
      <GithubGraph user={user} score={score} />
      <PlusButton user={user} />
      <ExpandCard
        user={user}
        userData={userData}
        loading={newUser ? true : false}
      />
    </div>
  );
};

export default Card;
