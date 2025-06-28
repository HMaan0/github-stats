import { useShowDialog } from "@/Hooks/ShowLogin";
import React from "react";

const LoginButton = () => {
  const showLogin = useShowDialog((state) => state.showDialogTrue);
  return (
    <div className="p-2">
      <button
        className="w-22 sm:w-24 md:w-28 md:px-4.5 md:py-2 px-3 py-1.5 bg-primary hover:bg-accent rounded-lg text-lg font-semibold"
        onClick={() => showLogin()}
      >
        Sign up
      </button>
    </div>
  );
};

export default LoginButton;
