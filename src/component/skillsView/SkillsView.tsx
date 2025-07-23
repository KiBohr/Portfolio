import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

// Beispiel-Array mit Images für Skills
const initialSkills = [
    { id: 1, src: "/img/HTML5.svg", name: "HTML" },
    { id: 2, src: "/img/JavaScript.svg", name: "JavaScript" },
    { id: 3, src: "/img/TypeScript.svg", name: "Typescript" },
    { id: 4, src: "/img/React.svg", name: "React" },
    { id: 5, src: "/img/Next.js.svg", name: "next.js" },
    { id: 6, src: "/img/motion.svg", name: "motion" },
    { id: 7, src: "/img/Tailwind.svg", name: "Tailwind" },
    { id: 8, src: "/img/css3-plain.svg", name: "CSS" },
    { id: 9, src: "/img/sass.svg", name: "Sass" },
    { id: 10, src: "/img/nodejs.svg", name: "node.js" },
    { id: 11, src: "/img/Github.svg", name: "GitHub" },
    { id: 12, src: "/img/git.svg", name: "git" },
    { id: 13, src: "/img/Supabase.svg", name: "Supabase" },
    { id: 14, src: "/img/Figmaa.svg", name: "Figma" },
];

export default function SkillsView() {
  const [skills] = useState(initialSkills);


  return (
    <div className="max-w-xs mx-auto mt-12 md:mt-20 md:max-w-lg lg:max-w-2xl mb-5">
      <ul className="flex flex-wrap justify-evenly  gap-5">
        <AnimatePresence>
          {skills.map((skill) => (
            <motion.li
              key={skill.id}
              className="flex justify-evenly items-center gap-3 bg-white/30 rounded-xl shadow-sm px-3 py-3 md:px-5 cursor-grab"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1.1 }}
              drag // erlaubt Dragging in alle Richtungen (alternativ: drag="y" oder drag="x")
              whileDrag={{color:"#C3CE72"}}
              dragElastic={0.1}
              dragSnapToOrigin // springt zurück an den Startpunkt
              layout
            >
              <motion.img
                src={skill.src}
                alt={skill.name}
                className="w-8 h-8"
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
