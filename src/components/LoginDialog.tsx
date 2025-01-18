"use client";
import { useEffect } from "react";
import { useShowDialog } from "@/Hooks/ShowLogin";
import { AnimatePresence, motion } from "framer-motion";
import { signIn } from "next-auth/react";

const LoginDialog = () => {
  const hideLogin = useShowDialog((state) => state.showDialogFalse);
  const loginState = useShowDialog((state) => state.showDialog);

  useEffect(() => {
    if (loginState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [loginState]);

  return (
    <AnimatePresence>
      {loginState && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-auto backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => hideLogin()}
        >
          <motion.div
            className="border border-border-theme-light dark:border-border-theme rounded-xl bg-black  w-11/12 md:w-3/6 lg:w-2/5  relative "
            initial={{ scale: 0.5, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.5, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-5 flex flex-col gap-5 bg-light-card dark:bg-transparent shadow-lg dark:shadow-inner-custom rounded-xl">
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl text-center font-semibold text-gray-800 dark:text-white ">
                  Sign Up
                </h2>
                <p className="text-center text-black/50 dark:text-white/50 mb-5 text-sm md:text-base">
                  Sign up using your github account to know your score and
                  raking with others.
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoginDialog;
