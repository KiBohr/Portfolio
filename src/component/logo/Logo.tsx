import { useState } from "react";
import { motion } from "motion/react";
import type {Transition} from "motion/react";

const Logo = () => {
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * 20;
    const rotateY = ((x / rect.width) - 0.5) * 20;
    setRotation({ rotateX: -rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ rotateX: 0, rotateY: 0 });
  };

  const springTransition: Transition = {
    type: "spring",
    stiffness: 300,
    damping: 20,
  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22 26"
      fill="none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: rotation.rotateX,
        rotateY: rotation.rotateY,
      }}
      transition={springTransition}
      className="cursor-pointer h-50 md:h-100"
    >
      <path
        d="M1.24963 1C1.16725 1 1.08488 1 1.04244 4.78943C1 8.57886 1 16.1577 1 23.9663"
        stroke="#C3CE72"
        strokeWidth="1.47281"
        strokeLinecap="round"
      />
      <path
        d="M3.14142 12.8124C3.14142 12.6476 3.71807 11.9037 5.53914 10.0402C8.67828 7.10574 11.0423 5.07622 11.79 4.61939C12.1257 4.4097 12.3729 4.24494 13.1267 3.57593"
        stroke="#C3CE72"
        strokeWidth="1.47281"
        strokeLinecap="round"
      />
      <path
        d="M2.39252 13.062C6.04964 17.136 7.93965 18.3677 9.39252 19.5759C11.1025 21.0363 11.9339 21.661 12.8925 22.5759C13.1022 22.8268 14.2228 23.3213 14.3925 23.5759"
        stroke="#C3CE72"
        strokeWidth="1.47281"
        strokeLinecap="round"
      />
      <path
        d="M8 8C8.5 7.5 10.8672 5.53343 11.9837 4.3133C13.215 2.96765 16.1301 2.35193 16.974 2.64943C18.3925 3.14948 18.7732 4.72733 19.3777 6.07593C20.182 7.87031 18.1631 9.82964 17.7281 10.9467C17.3606 11.8903 16.5495 12.1085 15.3524 12.6863C14.2743 13.2067 11.8899 13.1437 10.344 13.2467C9.93165 13.2742 11.1539 13.2678 13.5718 13.3293C15.0586 13.3671 16.0046 13.845 16.974 14.2372C18.0376 14.6676 18.9029 15.0031 19.3777 15.5393C20.4512 16.7518 20.5984 18.6399 20.7467 21.4085C20.7827 22.08 20.5202 22.5734 20.2112 23.2343C19.9322 23.8309 19.1151 24.4115 17.8925 24.5759C17.2271 24.6654 16.4254 24.4389 15.9916 24.4184C15.2586 24.3838 13.8263 23.1629 12.6403 22.2693C12.0274 21.8075 11.1328 21.0504 10.3638 20.5924C10.0951 20.4273 9.88659 20.22 9.72151 19.9724C9.63835 19.8476 8.97692 19.2761 8.89252 19.1495"
        stroke="#C3CE72"
        strokeWidth="1.47281"
        strokeLinecap="round"
      />
    </motion.svg>
  );
};

export default Logo;
