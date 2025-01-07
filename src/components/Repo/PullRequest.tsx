import React from "react";
import RepoCard from "./RepoCard";
import { data } from "../../../data";
import { PiGitMergeDuotone } from "react-icons/pi";
import { IoCheckmarkOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { FaCodeCommit } from "react-icons/fa6";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { PiFilesThin } from "react-icons/pi";
import DateOfPr from "./DateOfPr";

const PullRequest = () => {
  const prs = data.data.collaboratedRepos;
  return (
    <>
      {prs.map((pr, index) => (
        <React.Fragment key={index}>
          {pr.prInfo?.[0].title && (
            <RepoCard>
              <div className="flex justify-between items-center flex-wrap gap-2">
                <div className="flex gap-2 items-center">
                  <FaCodeCommit className="text-light-primary dark:text-primary" />
                  <p className="text-lg">
                    {pr.prInfo?.[0].title}{" "}
                    <span className="dark:text-white/20 text-black/20 ">
                      #{pr.prInfo[0].number}
                    </span>
                  </p>
                </div>
                {/* TODO: Make same for open and closed prs */}
                <span
                  className={`rounded-full py-1 px-3 flex gap-1 justify-between items-center ${
                    pr.prInfo?.[0].state === "MERGED" &&
                    "bg-purple-500 text-white"
                  } 
                  `}
                >
                  <PiGitMergeDuotone />
                  {pr.prInfo?.[0].state.toLocaleLowerCase()}
                </span>
              </div>
              <div className="flex gap-2 ">
                <div className=" m-2 flex flex-col w-full flex-wrap gap-1 justify-center">
                  <p className="flex  items-center gap-1.5 ">
                    <CiSquarePlus className="text-primary" />
                    <span className="dark:text-white/50 text-black/50">
                      Addition:{" "}
                    </span>
                    {pr.prInfo[0].additions}
                  </p>
                  <p className="flex  items-center gap-1.5">
                    <CiSquareMinus className="text-red-500" />
                    <span className="dark:text-white/50 text-black/50">
                      Deletion:{" "}
                    </span>{" "}
                    {pr.prInfo[0].deletions}
                  </p>
                  <p className="flex  items-center gap-1.5 ">
                    <PiFilesThin className="text-blue-500" />
                    <span className="dark:text-white/50 text-black/50">
                      Files changed:{" "}
                    </span>
                    {pr.prInfo[0].changedFiles}
                  </p>
                </div>
                <div className="flex flex-col ">
                  <span
                    title={
                      pr.prInfo[0].mergeStateStatus === "DIRTY"
                        ? "failed"
                        : "passed"
                    }
                    className={`${
                      pr.prInfo[0].mergeStateStatus === "DIRTY"
                        ? "bg-red-500"
                        : "bg-primary"
                    } p-1 rounded-full w-min -translate-y-3`}
                  >
                    {pr.prInfo[0].mergeStateStatus === "DIRTY" ? (
                      <RxCross1 color="white" />
                    ) : (
                      <IoCheckmarkOutline color="white" />
                    )}
                  </span>
                  <span className=" flex border border-secondary h-full w-min container m-auto"></span>
                </div>
                <DateOfPr dates={pr.prInfo[0]} />
              </div>
            </RepoCard>
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default PullRequest;
