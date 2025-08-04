import HeaderTitle from "@/component/headerTitle/HeaderTitle";
import SkillsView from "../../component/skillsView/SkillsView";
import {easeInOut, motion } from "motion/react";
import { useTranslation } from "react-i18next";
import useImagePreloader from "@/component/preloadImage/PreloadImage";

const SkillsTech = () => {

    const { i18n } = useTranslation();
    const lang = i18n.language || 'en';

    
    const imagesToPreload = [
        "/img/skills&tech_en.svg",
        "/img/skills&tech_de.svg",
    ];

    const imagesLoaded = useImagePreloader(imagesToPreload);

    
    if (!imagesLoaded)
        return <div className="text-center py-20">Loading handwritten title, please wait...</div>;

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
            className="h-13 md:h-20"/>
            
             <SkillsView/>
             {/* <p className="text-[0.6rem]">drag skills if you like :)</p> */}
        </motion.section>
        
       
     );
}
 
export default SkillsTech;