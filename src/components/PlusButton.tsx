"use client";
import { useHide } from "@/Hooks/Hide";
import React, { useEffect, useState } from "react";
const PlusButton = ({ user }: { user: string }) => {
  const setHide = useHide((state) => state.setHide);
  const [show, setShow] = useState(false);
  useEffect(() => {
    setHide(user);
  }, []);
  function handleClick() {
    setHide(user);
    setShow(!show);
  }

  return (
    <>
      <button
        onClick={handleClick}
        className="text-white font-bold bg-primary text-xl rounded-lg w-full md:w-1/3 container m-auto p-1"
      >
        {show ? "collapse" : "expand"}
      </button>
    </>
  );
};

export default PlusButton;
