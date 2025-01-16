import React from "react";

const RepoCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`px-2.5 py-5 sm:p-5   rounded-md flex flex-col gap-5 ${
        className ? className : "bg-white/10"
      }`}
    >
      {children}
    </div>
  );
};

export default RepoCard;
