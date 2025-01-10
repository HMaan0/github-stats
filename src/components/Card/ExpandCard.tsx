"use client";
import OptionsButton from "./OptionsButton";
import Repo from "../Repo/Repo";
import Line from "../Line";
import { useHide } from "@/store/Hide";
const ExpandCard = ({ user }: { user: string }) => {
  const hide = useHide((state) => state.hide);
  const isHidden = hide[user] ?? true;
  return (
    <div className={`flex-col gap-3 ${isHidden ? "hidden" : "flex"}`}>
      <Line />
      {/* <OptionsButton options={["Repository", "Pull Requests"]} /> */}
      <OptionsButton
        options={["Owned Repos", "Collaborated Repos", "Forked Repos"]}
      />
      <div className="flex flex-col gap-10">
        <Repo user={user} />
      </div>
    </div>
  );
};

export default ExpandCard;
