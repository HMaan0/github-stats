"use client";

import { useSession } from "next-auth/react";
import { APIResponse } from "@harshmaan/github_rank_backend_types";
import { UserCard } from "./Card";

interface Users {
  id: number;
  name: string;
  score: number | null;
  data: APIResponse | unknown;
  LastFetched: Date | null;
}

const UserSpecificCard = ({ users }: { users: Users[] }) => {
  const { data: session, status } = useSession();

  if (status === "loading" || !session?.user?.username) {
    return null;
  }

  const sessionUserExists = users.some(
    (user) => user.name === session.user.username
  );

  if (sessionUserExists) {
    return null;
  }

  return (
    <UserCard
      key={`new-user-${session.user.username}`}
      user={session.user.username}
      userData={null}
      index={-1}
      lastFetched={null}
      score={null}
      newUser={true}
    />
  );
};

export default UserSpecificCard;
