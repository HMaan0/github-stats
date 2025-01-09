import React from "react";

const Line = ({ className }: { className?: string }) => {
  return (
    <>
      <span
        className={`border-b dark:border-border-theme border-border-theme-light mx-4 mt-3 ${className}`}
      ></span>
    </>
  );
};

export default Line;
