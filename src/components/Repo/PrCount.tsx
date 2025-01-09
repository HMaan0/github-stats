import React from "react";
import { IoCheckmarkOutline } from "react-icons/io5";
import { PiGitMergeDuotone } from "react-icons/pi";
import { RxCross1 } from "react-icons/rx";

const PrCount = ({
  prCounts,
}: {
  prCounts: { Open: number; Merged: number; Closed: number };
}) => {
  return (
    <>
      <div className="flex gap-2 sm:text-base text-xs flex-wrap">
        <div className="flex gap-1 items-center">
          <IoCheckmarkOutline className="text-green-700" />
          <p>{prCounts.Open}</p>
          <p>Open</p>
        </div>
        <div className="flex gap-1 items-center">
          <RxCross1 className="text-red-600" />

          <p>{prCounts.Closed}</p>
          <p>Closed</p>
        </div>
        <div className="flex gap-1 items-center">
          <PiGitMergeDuotone className="text-purple-500" />
          <p>{prCounts.Merged}</p>
          <p>Merged</p>
        </div>
      </div>
    </>
  );
};

export default PrCount;
