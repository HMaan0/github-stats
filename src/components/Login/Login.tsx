import { signIn } from "next-auth/react";
import React from "react";

const Login = ({ hideLogin }: { hideLogin: () => void }) => {
  return (
    <>
      <div className="p-5 flex flex-col gap-5 bg-light-card dark:bg-transparent shadow-lg dark:shadow-inner-custom rounded-xl">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl text-center font-semibold text-gray-800 dark:text-white ">
            Sign Up
          </h2>
          <p className="text-center text-black/50 dark:text-white/50 mb-5 text-sm md:text-base">
            Sign up using your github account to know your score and raking with
            others.
          </p>
        </div>
        <button
          className="w-full md:px-4.5 md:py-2 px-3 py-1.5 bg-light-primary dark:bg-primary hover:bg-accent rounded-lg text-lg font-semibold "
          onClick={() =>
            signIn("github", {
              callbackUrl: "http://localhost:3000",
              redirect: true,
            })
          }
        >
          Sign Up with GitHub
        </button>
        <button
          className="w-full md:px-4.5 md:py-2 px-3 py-1.5 border border-light-primary hover:border-primary hover:dark:border-primary/50 dark:border-primary rounded-lg text-lg font-semibold "
          onClick={() => hideLogin()}
        >
          Close
        </button>
      </div>
    </>
  );
};

export default Login;
