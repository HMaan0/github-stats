import React, { use } from "react";
import Card from "./Card/Card";
import axios from "axios";
import { APIResponse } from "@harshmaan/github_rank_backend_types";
interface UserScore {
  username: string;
  score: number;
  userGithub: APIResponse;
}
const Section = () => {
  const users = ["SLYxCx", "brarkaran2004", "Dnicholson1966"];

  const getUserScores = async () => {
    const scorePromises = users.map(async (user) => {
      try {
        const res = await axios(`http://10.0.0.101:3002/${user}`);
        return {
          username: user,
          score: res.data.score,
          userGithub: res.data,
        } as UserScore;
      } catch (error) {
        console.error(`Error fetching score for ${user}:`, error);
        return {
          username: user,
          score: 0,
        } as UserScore;
      }
    });

    const scores = await Promise.all(scorePromises);
    return scores.sort((a, b) => b.score - a.score);
  };

  const sortedUsers = use(getUserScores());

  return (
    <div className="flex flex-col gap-4 w-full">
      {sortedUsers.map((user, index) => (
        <React.Fragment key={index}>
          <Card
            userGithub={user.userGithub}
            user={user.username}
            index={index}
            score={user.score}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Section;
