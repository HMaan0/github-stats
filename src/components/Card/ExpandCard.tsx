"use client";
import OptionsButton from "./OptionsButton";
import Repo from "../Repo/Repo";
import Line from "../Line";
import { useHide } from "@/Hooks/Hide";
import { useEffect, useRef, useState } from "react";
//import { useOptionsStore } from "@/store/selectedState";

const ExpandCard = ({ user }: { user: string }) => {
  const [selected, setSelected] = useState("Owned Repos");
  //const { selected } = useOptionsStore();
  const hideStates = useHide((state) => state.hide);
  const isHidden = hideStates[user] ?? true;

  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | "auto">(0);

  useEffect(() => {
    const updateHeight = () => {
      if (contentRef.current) {
        if (!isHidden) {
          setHeight(contentRef.current.scrollHeight);
        } else {
          setHeight(0);
        }
      }
    };
    updateHeight();
    const observer = new MutationObserver(() => {
      updateHeight();
    });

    if (contentRef.current) {
      observer.observe(contentRef.current, {
        childList: true,
        subtree: true,
      });
    }

    return () => {
      if (contentRef.current) {
        observer.disconnect();
      }
    };
  }, [isHidden]);
  useEffect(() => {
    if (contentRef.current && !isHidden) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [selected, isHidden]);

  return (
    <div
      className="flex-col gap-3 overflow-hidden transition-[height] duration-300"
      style={{ height: `${height}px` }}
    >
      <div ref={contentRef} className="flex flex-col gap-5">
        <Line />
        <OptionsButton
          options={["Owned Repos", "Collaborated Repos", "Forked Repos"]}
          selected={selected}
          setSelected={setSelected}
        />
        <div className="flex flex-col-reverse gap-5 ">
          <Repo user={user} selected={selected} />
        </div>
      </div>
    </div>
  );
};

export default ExpandCard;
