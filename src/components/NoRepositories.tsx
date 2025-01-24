import React from "react";
import { RiGitRepositoryLine } from "react-icons/ri";

const NoRepositories = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-5 ">
        <RiGitRepositoryLine className="text-4xl text-accent" />
        <p className="text-lg font-semibold text-accent">No repositories.</p>
      </div>
    </>
  );
};

export default NoRepositories;
