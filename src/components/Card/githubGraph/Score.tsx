"use client";
import { useScore } from "@/Hooks/useScore";
const Score = ({ user }: { user: string }) => {
  const score = useScore((state) => state.getScore(user));
  return (
    <>
      {score && <span className="dark:text-white text-black m-1">{score}</span>}
    </>
  );
};

export default Score;
