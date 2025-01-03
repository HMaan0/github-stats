import Link from "next/link";
import { RiGitRepositoryLine } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa";
import { GoRepoForked } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
import { FaClockRotateLeft } from "react-icons/fa6";
import Languages from "./Languages";
const Repo = () => {
  return (
    <div className=" p-5 bg-white/10 rounded-md flex flex-col gap-5 ">
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <RiGitRepositoryLine className="text-white/45 " size={20} />
          <Link href={"http://localhost:3000"}>Chrome-Extension</Link>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <FaClockRotateLeft className="text-white/45 " size={15} />
          33 Commit
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <span className="flex gap-2">
          <FaRegStar className="text-white/45 " size={20} />

          <p>12</p>
        </span>
        <span className="flex gap-2">
          <GoRepoForked className="text-white/45 " size={20} />

          <p>90</p>
        </span>
        <span className="flex gap-2">
          <IoEyeOutline className="text-white/45 " size={20} />

          <p>7</p>
        </span>
      </div>
      <Languages />
    </div>
  );
};

export default Repo;
