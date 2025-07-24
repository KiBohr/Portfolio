import { easeInOut, motion } from "motion/react";
import CvInfo from "../../component/cvInvo/CvInfo";
import HeaderTitle from "@/component/headerTitle/HeaderTitle";

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

            <HeaderTitle
            src="/img/Ex&Ed.svg"
            alt="handwritten 'experience & education'"
            className="h-22 mb-10 md:h-30 md:mb-20"/>
            

        <div className="flex flex-col md:flex-row items-center gap-5 justify-center md:gap-1 md:justify-between">

            {/* education */}
            <div className="flex flex-col gap-5 items-center">
                <CvInfo 
                    date="11.24 - 05.25" 
                    title="Umschulung Web-Development" 
                    companyLink="https://www.super-code.de/" 
                    company="Supercode" 
                    description="Ich habe im Mai 25 meine Umschulung als Web Developer*in erfolgreich abschließen können. Dabei lag der Fokus auf Typescript und React." 
                    document="/pdfs/Katharina-Bohr_Certificate.pdf" 
                    documentTitle="Zertifikat" 
                />

                <CvInfo
                    date="2016 - 2020"
                    title="Studium Logopädie"
                    companyLink="https://www.hs-fresenius.de/?crmid=aCbGbAJcDaAaAaAaA&accountId=4081124337&campaignId=17428330071&adgroupId&creativeId&keywordId&gad_source=5&gad_campaignid=17428332954&gclid=EAIaIQobChMIhae977bGjgMVAf15BB3VWBeEEAAYASAAEgIKJPD_BwE"
                    company="Hochschule Fresenius"
                    description="2020 habe ich meinen Bachelor of Science als akademische Sprachtherapeutin abgeschlossen."
                />
            </div>

            {/* visual divider */}
            <hr className="md:rotate-90 border-red/70 w-1/2 md:w-1/4 m-5 " />

            {/* experience */}
            <div className="flex flex-col gap-5 items-center ">
            <CvInfo
                date="2020-2023"
                title="Arbeit als Logopädin"
                description="Ich habe nach meinem Studium durch das Deutschlandstipendium zu meinem neuen Arbeitsplatz gefunden und als Logopä*in für knapp drei Jahre in einer Praxis in Hamburg gearbeitet."/>

            <CvInfo
                date="ab 01.09.2025"
                title ="Hier könnte Ihr Unternehmensname stehen"
                description="Kommen sie gerne auf mich zu! Schauen Sie sich gerne auch meine Projekte an."
                hovered={true}
                />
            </div>
        </div>    
       </motion.section>
     );
}
 
export default ExpEdu;