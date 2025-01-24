import React, { useState } from "react";
import OptionsButton from "../Card/OptionsButton";
import PrCard from "./PrCard";
import { Nodes } from "@harshmaan/github_rank_backend_types";
import { BiGitPullRequest } from "react-icons/bi";

const PullRequests = ({ nodes, user }: { nodes: Nodes; user: string }) => {
  const [showPr, setShowPr] = useState(false);
  const [selected, setSelected] = useState("Merged");
  return (
    <>
      <>
        {nodes.length >= 1 ? (
          <>
            <div className="w-full flex items-center justify-center mt-4">
              <button
                onClick={() => setShowPr(!showPr)}
                className="border-2 dark:border border-light-accent dark:border-accent rounded-lg w-full md:w-1/2 py-1 font-semibold"
              >
                {showPr
                  ? `hide pull requests by ${user}`
                  : `show pull requests by ${user}`}
              </button>
            </div>
            {showPr && (
              <>
                <div className="flex justify-center mx-10 ">
                  <div className="my-2.5">
                    <OptionsButton
                      options={["Merged", "Open", "Closed"]}
                      selected={selected}
                      setSelected={setSelected}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 ">
                  <PrCard nodes={nodes} selected={selected} />
                </div>
              </>
            )}
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
    </>
  );
};

export default PullRequests;
