import {
  allRepos,
  collaboratedRepos,
  forkedRepos,
  APIResponse,
} from "@harshmaan/github_rank_backend_types";
import axios from "axios";
import { useEffect, useState } from "react";

export function useUserGithub(user: string, selected: string) {
  //const username = useUsernames((state) => state.usernames);

  const [ownedRepos, setOwnedRepos] = useState<allRepos | null>(null);
  const [collaboratedRepos, setCollaboratedRepos] =
    useState<collaboratedRepos | null>(null);
  const [forkedRepos, setForkedRepos] = useState<forkedRepos | null>(null);
  const [repo, setRepo] = useState<
    allRepos | collaboratedRepos | forkedRepos | null
  >(null);
  useEffect(() => {
    const getUserGithub = async () => {
      try {
        const res = await axios.get(`${process.env.BACKEND_URL}${user}`);
        const userGithub: APIResponse = res.data;
        setOwnedRepos(userGithub.data.allRepos);
        setCollaboratedRepos(userGithub.data.collaboratedRepos);
        setForkedRepos(userGithub.data.forkedRepos);
        setRepo(userGithub.data.allRepos);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }
    };
    getUserGithub();
  });

  useEffect(() => {
    if (selected === "Owned Repos") {
      setRepo(ownedRepos);
    } else if (selected === "Collaborated Repos") {
      setRepo(collaboratedRepos);
    } else if (selected === "Forked Repos") {
      setRepo(forkedRepos);
    }
  }, [selected]);

  return { ownedRepos, collaboratedRepos, forkedRepos, repo };
}
