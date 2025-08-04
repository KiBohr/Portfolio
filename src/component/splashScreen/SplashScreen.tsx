import { motion, AnimatePresence, easeInOut } from "motion/react";
import type {Transition} from "motion/react";
import React, { useEffect, useState } from "react";

const SplashScreen: React.FC = () => {
  const [step, setStep] = useState<number>(1);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (step < 3) {
      timer = setTimeout(() => {
        setStep(step + 1);
      }, 1000);
    } else {
      timer = setTimeout(() => {
        console.log("Splash Animation Ende");
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [step]);

  const springTransition : Transition = {
    type: "spring",
    stiffness: 200,
    damping: 12,
  };

  const fadeTransition = {
    duration: 0.4,
    ease: easeInOut,
  };

  return (
    <motion.div
      className="fixed inset-0 flex flex-col gap-10 items-center justify-center z-50 bg-beige backdrop-blur-3xl"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex items-center justify-center gap-10 w-[300px] h-[100px] relative">
        {/* K Logo */}
        <motion.img
          src="/img/K_Logo.svg"
          alt="K Logo"
          className="h-30"
          initial={false}
          animate={{
            x: step === 3 ? 37.5 : 0,
            opacity: 1,
          }}
          transition={springTransition}
        />

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.img
              key="B"
              src="/img/B_Logo.svg"
              alt="B Logo"
              className="h-30"
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={fadeTransition}
            />
          )}
          {(step === 2 || step === 3) && (
            <motion.img
              key="Herz"
              src="/img/herz_Logo.svg"
              alt="Herz"
              className="h-30"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                x: step === 3 ? -43 : 0,
                y: step === 3 ? 3.5 : 0,
              }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ ...springTransition, ...fadeTransition }}
            />
          )}
        </AnimatePresence>
      </div>
      <p className="text-sm">loading portfolio...</p>
    </motion.div>
  );
};

export default SplashScreen;
