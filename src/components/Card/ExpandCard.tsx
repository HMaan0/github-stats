"use client";
import OptionsButton from "./OptionsButton";
import Repo from "../Repo/Repo";
import Line from "../Line";
import { useHide } from "@/Hooks/Hide";
import { useState } from "react";
import { APIResponse } from "@harshmaan/github_rank_backend_types";

const ExpandCard = ({
  user,
  userData,
  loading,
}: {
  user: string;
  userData: APIResponse | null;
  loading: boolean;
}) => {
  const [selected, setSelected] = useState("Owned Repos");
  const hideStates = useHide((state) => state.hide);

  const isHidden = hideStates[user] ?? false;

  return (
    <div className="flex-col gap-3 overflow-hidden transition-[height] duration-300">
      <div className="flex flex-col gap-5">
        {isHidden && (
          <>
            <Line />
            <OptionsButton
              options={["Owned Repos", "Collaborated Repos", "Forked Repos"]}
              selected={selected}
              setSelected={setSelected}
            />
            <div className="flex flex-col-reverse gap-5 ">
              <Repo
                user={user}
                selected={selected}
                userData={userData}
                loading={loading}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ExpandCard;
