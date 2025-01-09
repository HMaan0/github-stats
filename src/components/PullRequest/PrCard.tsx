import React from "react";
import RepoCard from "../Repo/RepoCard";
import { PiGitMergeDuotone } from "react-icons/pi";
import { IoCheckmarkOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { FaCodeCommit } from "react-icons/fa6";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { PiFilesThin } from "react-icons/pi";
import DateOfPr from "../Repo/DateOfPr";
import { Nodes } from "@harshmaan/github_rank_backend_types";
import { RiGitClosePullRequestLine } from "react-icons/ri";
import { IoIosGitPullRequest } from "react-icons/io";
const PrCard = ({ nodes }: { nodes: Nodes }) => {
  console.log(nodes);

  return (
    <>
      {nodes.map((pr, index) => (
        <React.Fragment key={index}>
          {pr.title && (
            <RepoCard>
              <div className="flex justify-between items-center flex-wrap gap-2">
                <div className="flex gap-2 items-center">
                  <FaCodeCommit className="text-light-primary dark:text-primary" />
                  <p className="text-lg">
                    {pr.title}
                    <span className="dark:text-white/20 text-black/20 ">
                      #{pr.number}
                    </span>
                  </p>
                </div>
                <span
                  className={`rounded-full py-1 px-3 flex text-white gap-1 justify-between items-center ${
                    pr.state === "MERGED" && "bg-purple-500 "
                  } ${pr.state === "CLOSED" && "bg-red-500"} ${
                    pr.state === "OPEN" && "bg-primary"
                  }
                   
                  `}
                >
                  {pr.state === "MERGED" && <PiGitMergeDuotone />}
                  {pr.state === "CLOSED" && <RiGitClosePullRequestLine />}
                  {pr.state === "OPEN" && <IoIosGitPullRequest />}

                  {pr.state.toLocaleLowerCase()}
                </span>
              </div>
              <div className="flex gap-2 ">
                <div className=" m-2 flex flex-col w-full flex-wrap gap-1 justify-center">
                  <p className="flex  items-center gap-1.5 ">
                    <CiSquarePlus className="text-primary" />
                    <span className="dark:text-white/50 text-black/50">
                      Addition:{" "}
                    </span>
                    {pr.additions}
                  </p>
                  <p className="flex  items-center gap-1.5">
                    <CiSquareMinus className="text-red-500" />
                    <span className="dark:text-white/50 text-black/50">
                      Deletion:{" "}
                    </span>{" "}
                    {pr.deletions}
                  </p>
                  <p className="flex  items-center gap-1.5 ">
                    <PiFilesThin className="text-blue-500" />
                    <span className="dark:text-white/50 text-black/50">
                      Files changed:{" "}
                    </span>
                    {pr.changedFiles}
                  </p>
                </div>
                <div className="flex flex-col ">
                  <span
                    title={
                      pr.mergeStateStatus === "UNKNOWN" ||
                      pr.mergeStateStatus === "CLEAN"
                        ? "passed"
                        : "failed"
                    }
                    className={`${
                      pr.mergeStateStatus === "UNKNOWN" ||
                      pr.mergeStateStatus === "CLEAN"
                        ? "bg-primary"
                        : "bg-red-500"
                    } p-1 rounded-full w-min -translate-y-3`}
                  >
                    {pr.mergeStateStatus === "UNKNOWN" ||
                    pr.mergeStateStatus === "CLEAN" ? (
                      <IoCheckmarkOutline color="white" />
                    ) : (
                      <RxCross1 color="white" />
                    )}
                  </span>
                  <span className=" flex border border-secondary h-full w-min container m-auto"></span>
                </div>

                <DateOfPr
                  dates={{ createdAt: pr.createdAt, mergedAt: pr.mergedAt }}
                />
              </div>
            </RepoCard>
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default PrCard;
