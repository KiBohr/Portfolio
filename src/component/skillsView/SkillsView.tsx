import { motion, AnimatePresence } from "motion/react";

interface ISkills {
  id: number;
  src: string;
  name: string
}

interface ISkillsViewProps {
  skills: ISkills[];
}


export default function SkillsView({skills} :ISkillsViewProps) {
  
  return (
    <div className="max-w-xs mx-auto md:mb-15  md:max-w-lg lg:max-w-3xl mb-5">
    <ul className="flex flex-wrap justify-evenly gap-4">
      <AnimatePresence>
        {skills.map((skill) => (
          <motion.li
            key={skill.id}
            className="flex justify-evenly items-center gap-3 bg-white/30 rounded-xl shadow-sm px-3 py-3 md:px-5 cursor-drag"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.1 }}
            drag
            whileDrag={{ color: "#C3CE72" }}
            dragElastic={0.1}
            dragSnapToOrigin
            layout
          >
            <motion.img
              src={skill.src}
              alt={skill.name}
              className="w-5 h-5 md:w-6 md:h-6"
              layoutId={skill.id + "-img"}
              draggable={false}
            />
            <span className="font-semibold text-sm">{skill.name}</span>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  </div>
  );
}
