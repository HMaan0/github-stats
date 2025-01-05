import React from "react";

const RepoCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-2.5 py-5 sm:p-5 bg-white/10 rounded-md flex flex-col gap-5 ">
      {children}
    </div>
  );
};

export default RepoCard;
