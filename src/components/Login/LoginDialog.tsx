"use client";
import { useEffect } from "react";
import { useShowDialog } from "@/Hooks/ShowLogin";
import { AnimatePresence, motion } from "framer-motion";
import Login from "./Login";

const LoginDialog = ({ children }: { children?: React.ReactNode }) => {
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
        >
          <motion.div
            className="border border-border-theme-light dark:border-border-theme rounded-xl bg-black  w-11/12 md:w-3/6 lg:w-2/5  relative "
            initial={{ scale: 0.5, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.5, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {children ? <>{children}</> : <Login hideLogin={hideLogin} />}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoginDialog;
