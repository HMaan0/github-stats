"use client";
import { useHide } from "@/store/Hide";
import React from "react";
const PlusButton = ({ user }: { user: string }) => {
  const setHide = useHide((state) => state.setHide);
  return (
    <>
      <button
        onClick={() => setHide(user)}
        className="font-bold text-6xl dark:text-accent text-light-accent"
      >
        +
      </button>
    </>
  );
};

export default PlusButton;
