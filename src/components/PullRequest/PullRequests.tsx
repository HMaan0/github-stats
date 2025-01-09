import React from "react";
import OptionsButton from "../Card/OptionsButton";
import CommitIcon from "../CommitIcon";
import PrCard from "./PrCard";
import { Nodes } from "@harshmaan/github_rank_backend_types";
import { BiGitPullRequest } from "react-icons/bi";

const PullRequests = ({ nodes }: { nodes: Nodes }) => {
  return (
    <>
      {nodes.length >= 1 ? (
        <>
          <div className="flex justify-between mx-10 ">
            <CommitIcon />
            <div>
              <OptionsButton options={["Merged", "Open", "Closed"]} />
              <OptionsButton options={["Top Prs", "Latest", "Oldest"]} />
            </div>
            <CommitIcon />
          </div>
          <div className="flex flex-col gap-2 ">
            <PrCard nodes={nodes} />
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col items-center mt-5 ">
            <BiGitPullRequest className="text-4xl text-accent" />
            <p className="text-lg font-semibold text-accent">
              No pull requests by this user.
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default PullRequests;
