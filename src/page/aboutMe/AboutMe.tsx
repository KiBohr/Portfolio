import HeaderTitle from "@/component/headerTitle/HeaderTitle";
import {easeInOut, motion } from "motion/react";
import {Trans, useTranslation } from 'react-i18next'


const AboutMe = () => {
    console.log("Moin, as a person from Hamburg would say :) There is much more to say about me, obviously. If you are interested in getting to know me better, just contact me. I would love to connect with you. Enjoy the rest of my portfolio :)")
    
    const { t } = useTranslation()
    const { i18n } = useTranslation();
    const lang = i18n.resolvedLanguage || "en";
    

    return ( 
        <motion.section
        className="flex flex-col items-center"
        initial={{opacity: 0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{
                duration:0.4,
                ease: easeInOut,
        }}
        >
            <HeaderTitle
            src={`/img/aboutMe_${lang}.svg`}
            alt="handwritten 'about me'"
            className="h-17 md:h-20 mb-8 md:mb-10"
            />
        
           
             <motion.div
             className="w-[80vw] flex flex-col-reverse items-center justify-center gap-5 md:gap-20 md:flex-row md:justify-start md:text-start"
             transition={{duration:0.8}}
             >
           
                <div 
                    className="bg-white/20 text-start rounded-xl p-5 text-[0.7rem] flex flex-col items-center  md:text-start md:text-[0.8rem] lg:text-base gap-2 md:w-1/2">
                        <p className=" text-sm md:text-lg md:text-start mb-2">{t("welcome_message")}
                        </p>

                        <p>
                        <Trans i18nKey="my_name" components={{ 1: <span className="animate-pulse duration-1000 transition ease-in-out" /> }} />
                        </p>

                        <p>
                        <Trans i18nKey="convictionText" components={{ 2: <span className="animate-pulse duration-1000 transition ease-in-out" /> }} />
                        </p>
                        
                        
                        <ul className="md:text-sm list-disc flex flex-col items-start px-4">
                            <li>
                                <Trans
                                i18nKey="li_1"
                                components={{ "3": <span className="animate-pulse duration-1000 transition ease-in-out" /> }}
                                />
                            </li>
                            <li>
                                <Trans
                                i18nKey="li_2"
                                components={{ "4": <span className="animate-pulse duration-1000 transition ease-in-out" /> }}
                                />
                            </li>
                            <li>
                                <Trans
                                i18nKey="li_3"
                                components={{ "5": <span className="animate-pulse duration-1000 transition ease-in-out" /> }}
                                />
                            </li>

                            
                        </ul>
                </div>

                <img
                src="/img/about.jpg" 
                alt="a picture of me"
                className="w-2/5 max-w-xs md:w-1/3 rounded-xl"
                loading="lazy"
                />

                

                
            </motion.div>

        </motion.section>
        
     );
}
 
export default AboutMe;