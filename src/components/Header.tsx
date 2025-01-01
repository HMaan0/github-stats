import React from "react";

const Header = () => {
  return (
    <header className="w-full text-center flex flex-col gap-3">
      <h1 className="text-border-theme/50 dark:text-border-theme-light/50 text-4xl">
        Welcome To
      </h1>
      <h1 className="text-6xl font-black dark:text-bilbao-500 text-light-primary">
        Github <span className="text-black dark:text-white">Stats</span>
      </h1>
      <h1 className="text-border-theme-light/50 dark:text-border-theme text-xl">
        A platform where you can check top github profiles and there repo, open
        source contribution, collaborations make it better.
      </h1>
    </header>
  );
};

export default Header;
