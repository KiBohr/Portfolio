import SkillsView from "../../component/skillsView/SkillsView";
import {easeInOut, motion } from "motion/react";

const SkillsTech = () => {
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
            <img 
                src="/img/skills&tech.svg" 
                 alt="skills&tech"
                className="h-14 md:h-15" 
                />
             <SkillsView/>
             <p className="text-[0.6rem]">drag skills if you like :)</p>
        </motion.section>
        
       
     );
}
 
export default SkillsTech;