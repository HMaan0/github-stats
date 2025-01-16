"use client";
import React, { useEffect, useState } from "react";
import { MdRestartAlt } from "react-icons/md";
import { PiGitMergeDuotone } from "react-icons/pi";
const DateOfPr = ({
  dates,
}: {
  dates: { createdAt: string; mergedAt: string | null };
}) => {
  const [createdDate, setCreatedDate] = useState("");
  const [mergedDate, setMergedDate] = useState("");

  useEffect(() => {
    setCreatedDate(new Date(dates.createdAt).toLocaleDateString());
    if (dates.mergedAt) {
      setMergedDate(new Date(dates.mergedAt).toLocaleDateString());
    } else {
      setMergedDate("not Merged");
    }
  }, [dates.createdAt, dates.mergedAt]);

  return (
    <>
      <div className="md:text-base text-xs sm:text-sm gap-1 m-2 flex flex-col w-full flex-wrap items-end text-right justify-between">
        <p className="flex  items-center gap-1.5 ">
          <MdRestartAlt className="text-yellow-500" />
          <span className="dark:text-white/50 text-black/50">Created: </span>
          {createdDate}
        </p>
        <p className="flex  items-center gap-1.5 ">
          <PiGitMergeDuotone className="text-purple-500" />
          <span className="dark:text-white/50 text-black/50">Merged: </span>
          {mergedDate}
        </p>
      </div>
    </>
  );
};

export default DateOfPr;
