import Link from "next/link";
import { RiGitRepositoryLine } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa";
import { GoRepoForked } from "react-icons/go";
import { IoCheckmarkOutline, IoEyeOutline } from "react-icons/io5";
import { FaClockRotateLeft } from "react-icons/fa6";
import Languages from "./Languages";
import { IoIosGitPullRequest } from "react-icons/io";
import { VscIssues } from "react-icons/vsc";
import { PiGitMergeDuotone } from "react-icons/pi";
import { RxCross1 } from "react-icons/rx";
import RepoCard from "./RepoCard";

const Repo = () => {
  return (
    <RepoCard>
      <div className="flex justify-between items-center flex-wrap">
        <div className="flex gap-2 w-max">
          <RiGitRepositoryLine className="text-white/45 " size={20} />
          <Link href={"http://localhost:3000"}>Chrome-Extension</Link>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <FaClockRotateLeft className="text-white/45 " size={15} />
          33 Commit
        </div>
      </div>
      <div className="flex flex-row justify-between flex-wrap">
        <span className="flex gap-2 items-center">
          <FaRegStar className="text-white/45 " size={20} />

          <p>12</p>
        </span>
        <span className="flex gap-2 items-center">
          <GoRepoForked className="text-white/45 " size={20} />

          <p>90</p>
        </span>
        <span className="flex gap-2 items-center">
          <IoEyeOutline className="text-white/45 " size={20} />

          <p>7</p>
        </span>
        <span className="flex gap-2 items-center">
          <VscIssues className="text-white/45 " size={20} />

          <p>7</p>
        </span>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-1 items-center">
          <IoIosGitPullRequest className="text-white/45 " />
          <div className="flex gap-1 sm:text-base text-xs w-max">
            <p>7</p>
            <p>Pull Request</p>
          </div>
        </div>
        <div className="flex gap-2 sm:text-base text-xs flex-wrap">
          <div className="flex gap-1 items-center">
            <IoCheckmarkOutline className="text-green-700" />
            <p>2</p>
            <p>Open</p>
          </div>
          <div className="flex gap-1 items-center">
            <RxCross1 className="text-red-600" />

            <p>3</p>
            <p>Closed</p>
          </div>
          <div className="flex gap-1 items-center">
            <PiGitMergeDuotone className="text-purple-500" />
            <p>4</p>
            <p>Merged</p>
          </div>
        </div>
      </div>
      <Languages />
    </RepoCard>
  );
};

export default Repo;
