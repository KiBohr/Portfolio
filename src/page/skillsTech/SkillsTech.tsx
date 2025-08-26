import HeaderTitle from "@/component/headerTitle/HeaderTitle";
import SkillsView from "../../component/skillsView/SkillsView";
import {easeInOut, motion } from "motion/react";
import { useTranslation } from "react-i18next";


const SkillsTech = () => {

    const { i18n } = useTranslation();
    const lang = i18n.resolvedLanguage || "en";

    // skills:
    const knownSkills = [
        { id: 1, src: "/img/HTML5.svg", name: "HTML" },
        { id: 2, src: "/img/JavaScript.svg", name: "JavaScript" },
        { id: 3, src: "/img/TypeScript.svg", name: "Typescript" },
        { id: 4, src: "/img/React.svg", name: "React" },
        { id: 5, src: "/img/Tailwind.svg", name: "Tailwind" },
        { id: 6, src: "/img/css3-plain.svg", name: "CSS" },
        { id: 7, src: "/img/sass.svg", name: "Sass" },
        { id: 8, src: "/img/nodejs.svg", name: "node.js" },
        { id: 9, src: "/img/Github.svg", name: "GitHub" },
        { id: 10, src: "/img/git.svg", name: "git" },
        { id: 11, src: "/img/Supabase.svg", name: "Supabase" },
        { id: 12, src: "/img/Figmaa.svg", name: "Figma" },
    ]

    const learningSkills = [
        { id: 13, src: "/img/Next.js.svg", name: "next.js" },
        { id: 14, src: "/img/motion.svg", name: "motion" },
    ]

    const futureSkills =  [
        {id: 15, src:"/img/angular.svg", name: "Angular"},
        {id: 16, src:"/img/mySql.svg", name: "MySQL"}
    ]



    return (
        <motion.section
        className="flex flex-col items-center py-5"
        initial={{opacity: 0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{
                duration:0.4,
                ease: easeInOut,
        }}
        >
            <HeaderTitle
            src={`/img/skills&tech_${lang}.svg`}
            alt="handwirtten 'skills & tech'"
            className="h-13 mb-5 md:h-20 md:mb-15"/>

            
             <SkillsView
             skills={knownSkills}
             />

             <div className="flex items-center justify-evenly gap-5">
                <div className="flex flex-col items-center justify-center gap-5">
                    <h2>learning:</h2>
                    <SkillsView
                    skills={learningSkills}
                    />
                </div>

                <div className="flex flex-col items-center justify-center gap-5">
                    <h2>future skills:</h2>
                    <SkillsView
                    skills={futureSkills}
                    />
                </div>
             </div>
        </motion.section>
     );
}
 
export default SkillsTech;