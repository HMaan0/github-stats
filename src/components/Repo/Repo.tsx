"use client";
import Link from "next/link";
import { RiGitRepositoryLine } from "react-icons/ri";
import { FaGithub, FaRegStar } from "react-icons/fa";
import { GoRepoForked } from "react-icons/go";
import { FaClockRotateLeft } from "react-icons/fa6";
import Languages from "./Languages";
import { IoIosGitPullRequest } from "react-icons/io";
import { VscIssues } from "react-icons/vsc";
import RepoCard from "./RepoCard";
import PrCount from "./PrCount";
import PullRequests from "../PullRequest/PullRequests";
import Line from "../Line";
import React, { memo, useEffect, useState } from "react";
import {
  allRepos,
  collaboratedRepos,
  forkedRepos,
  APIResponse,
} from "@harshmaan/github_rank_backend_types";
import LoadingSpinner from "../LoadingSpinner";
import NoRepositories from "../NoRepositories";

const Repo = ({
  user,
  selected,
  userData,
  loading,
}: {
  user: string;
  selected: string;
  userData: APIResponse | null;
  loading: boolean;
}) => {
  const [ownedRepos, setOwnedRepos] = useState<allRepos | null>(null);
  const [collaboratedRepos, setCollaboratedRepos] =
    useState<collaboratedRepos | null>(null);
  const [forkedRepos, setForkedRepos] = useState<forkedRepos | null>(null);
  const [repo, setRepo] = useState<
    allRepos | collaboratedRepos | forkedRepos | null
  >(null);

  useEffect(() => {
    if (userData) {
      setOwnedRepos(userData.data.allRepos);
      setCollaboratedRepos(userData.data.collaboratedRepos);
      setForkedRepos(userData.data.forkedRepos);
    }
  }, [userData]);

  useEffect(() => {
    if (selected === "Owned Repos") {
      setRepo(ownedRepos);
    } else if (selected === "Collaborated Repos") {
      setRepo(collaboratedRepos);
    } else if (selected === "Forked Repos") {
      setRepo(forkedRepos);
    }
  }, [collaboratedRepos, forkedRepos, ownedRepos, selected]);

  return (
    <>
      {loading ? (
        <>
          <LoadingSpinner />
          {user && (
            <div className="flex flex-col items-center mt-5 ">
              <FaGithub className="text-4xl text-accent" />
              <p className="text-center text-lg font-semibold text-accent">
                Our servers are fetching your github data revisit us later
              </p>
            </div>
          )}
        </>
      ) : (
        <>
          {repo && repo?.length > 0 ? (
            <>
              {repo.map((repoInfo, index) => (
                <React.Fragment key={index}>
                  <div>
                    <RepoCard>
                      <div className="flex justify-between items-center flex-wrap ">
                        <div className="flex gap-2 w-max  justify-center items-center">
                          <RiGitRepositoryLine
                            className="dark:text-white/45 text-black/45"
                            size={20}
                          />
                          {selected === "Owned Repos" ||
                          selected === "Collaborated Repos" ? (
                            <Link
                              target="blank"
                              href={`https://github.com/${user}/${repoInfo.name}`}
                            >
                              {repoInfo.name}
                            </Link>
                          ) : (
                            <>
                              {"prInfo" in repoInfo && (
                                <>{repoInfo.parent?.name}</>
                              )}
                            </>
                          )}
                        </div>
                        <div className="flex gap-2 items-center justify-center">
                          <FaClockRotateLeft
                            className="dark:text-white/45 text-black/45 "
                            size={15}
                          />
                          {selected === "Owned Repos" ? (
                            <p> {repoInfo.totalCommits}</p>
                          ) : (
                            <>
                              {"prInfo" in repoInfo && (
                                <>
                                  <p>
                                    {
                                      repoInfo.prInfo?.prInfo.repository
                                        .defaultBranchRef.target.history
                                        .totalCount
                                    }
                                  </p>
                                </>
                              )}
                            </>
                          )}
                          Commit
                        </div>
                      </div>
                      <div className="flex flex-row justify-between flex-wrap">
                        <span className="flex gap-2 items-center">
                          <FaRegStar
                            className="dark:text-white/45 text-black/45 "
                            size={20}
                          />
                          {selected === "Owned Repos" ? (
                            <p>{repoInfo.stargazerCount}</p>
                          ) : (
                            <>
                              {"prInfo" in repoInfo && (
                                <p>
                                  {
                                    repoInfo.prInfo?.prInfo.repository
                                      .stargazerCount
                                  }
                                </p>
                              )}
                            </>
                          )}
                        </span>
                        <span className="flex gap-2 items-center">
                          <GoRepoForked
                            className="dark:text-white/45 text-black/45 "
                            size={20}
                          />
                          {selected === "Owned Repos" ? (
                            <p>{repoInfo.forkCount}</p>
                          ) : (
                            <>
                              {"prInfo" in repoInfo && (
                                <p>
                                  {repoInfo.prInfo?.prInfo.repository.forkCount}
                                </p>
                              )}
                            </>
                          )}
                        </span>
                        <span className="flex gap-2 items-center">
                          <VscIssues
                            className="dark:text-white/45 text-black/45 "
                            size={20}
                          />

                          {selected === "Owned Repos" &&
                          "issues" in repoInfo ? (
                            <p>{repoInfo.issues.issueCount}</p>
                          ) : (
                            <>
                              {"prInfo" in repoInfo && (
                                <p>{repoInfo.prInfo?.issues.issueCount}</p>
                              )}
                            </>
                          )}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex gap-1 items-center">
                          <IoIosGitPullRequest className="dark:text-white/45 text-black/45 " />
                          <div className="flex gap-1 sm:text-base text-xs w-max">
                            {selected !== "Owned Repos" &&
                            "prInfo" in repoInfo ? (
                              <>
                                {(repoInfo.prInfo?.repoPrs?.Merged ?? 0) +
                                  (repoInfo.prInfo?.repoPrs?.Closed ?? 0) +
                                  (repoInfo.prInfo?.repoPrs?.Open ?? 0)}
                              </>
                            ) : (
                              <>
                                {"prCounts" in repoInfo &&
                                  repoInfo.prCounts.Merged +
                                    repoInfo.prCounts.Closed +
                                    repoInfo.prCounts.Open}
                              </>
                            )}

                            <p>Pull Requests</p>
                          </div>
                        </div>
                        {selected === "Owned Repos" &&
                        "prCounts" in repoInfo ? (
                          <PrCount prCounts={repoInfo.prCounts} />
                        ) : (
                          <>
                            {"prInfo" in repoInfo &&
                              repoInfo.prInfo?.repoPrs && (
                                <PrCount prCounts={repoInfo.prInfo?.repoPrs} />
                              )}
                          </>
                        )}
                      </div>
                      {selected !== "Owned Repos" &&
                      "prInfo" in repoInfo &&
                      repoInfo.prInfo?.repoPrs ? (
                        <Languages
                          languages={repoInfo.prInfo.issues.techStack}
                        />
                      ) : (
                        <>
                          {"issues" in repoInfo && (
                            <Languages languages={repoInfo.issues.techStack} />
                          )}
                        </>
                      )}
                    </RepoCard>
                    {selected !== "Owned Repos" && "prInfo" in repoInfo && (
                      <>
                        <PullRequests
                          nodes={repoInfo.prInfo.prInfo.search.nodes}
                          user={user}
                        />
                      </>
                    )}
                  </div>
                  <Line className="last:hidden xl:hidden" />
                </React.Fragment>
              ))}
            </>
          ) : (
            <>
              <NoRepositories />
            </>
          )}
        </>
      )}
    </>
  );
};

export default memo(Repo);
