import { easeInOut, motion } from "motion/react";
import CvInfo from "../../component/cvInvo/CvInfo";

const ExpEdu = () => {
    return ( 
       <motion.section
       className="flex flex-col items-center"
       initial={{opacity: 0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{
                duration:0.4,
                ease: easeInOut,
        }}>
            <motion.img
                src="/src/assets/img/Ex&Ed.svg" 
                alt="education and experience"
                className="h-20 mb-10 md:mb-15"
            ></motion.img>

            <div className="flex flex-col  gap-5 items-center ">
                <CvInfo 
                    date="11.24 - 05.25" 
                    title="Umschulung Web-Development" 
                    compmanyLink="https://www.super-code.de/" 
                    company="Supercode" 
                    description="Ich habe im Mai 25 meine Umschulung als Web Developerin erfolgreich abschließen können. Dabei lag der Fokus auf Typescript und React." 
                    document="/src/assets/pdfs/Katharina-Bohr_Certificate.pdf" 
                    documentTitle="Zertifikat" 
                />

                <CvInfo
                    date="2016 - 2020"
                    title="Studium Logopädie"
                    compmanyLink="https://www.hs-fresenius.de/?crmid=aCbGbAJcDaAaAaAaA&accountId=4081124337&campaignId=17428330071&adgroupId&creativeId&keywordId&gad_source=5&gad_campaignid=17428332954&gclid=EAIaIQobChMIhae977bGjgMVAf15BB3VWBeEEAAYASAAEgIKJPD_BwE"
                    company="Hochschule Fresenius"
                    description="2020 habe ich meinen Bachelor of Science als akademische Sprachtherapeutin abgeschlossen."
                />
            </div>

            <p></p>
       </motion.section>
     );
}
 
export default ExpEdu;