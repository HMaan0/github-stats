"use client";

import { useOptionsStore } from "@/store/selectedState";
import React, { useEffect } from "react";

const OptionsButton = ({ options }: { options: string[] }) => {
  // const [selected, setSelected] = useState(options[0]);
  const { selected, setSelected } = useOptionsStore();
  useEffect(() => {
    setSelected(options[0]);
  }, []);
  return (
    <>
      <div className="p-2  flex justify-center items-center">
        <div className="rounded-md dark:bg-white/10 bg-black/10 w-min p-1 flex gap-3 sm:text-base text-xs">
          {options.map((option, index) => (
            <React.Fragment key={index}>
              <button
                className={`w-full p-1 rounded-md whitespace-nowrap  ${
                  selected === option && "bg-white/25"
                }`}
                onClick={() => setSelected(option)}
              >
                {option}
              </button>
              {index !== options.length - 1 && (
                <span className="border-l-2 border-white/15 my-1"></span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default OptionsButton;
