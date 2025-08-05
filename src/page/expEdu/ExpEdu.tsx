import { easeInOut, motion } from "motion/react";
import CvInfo from "../../component/cvInvo/CvInfo";
import HeaderTitle from "@/component/headerTitle/HeaderTitle";
import {useTranslation } from 'react-i18next'


const ExpEdu = () => {

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
        }}>

            <HeaderTitle
             src={`/img/Ex&Ed_${lang}.svg`}
            alt="handwritten 'experience & education'"
            className="h-22 mb-10 md:h-30 md:mb-20"/>
            

        <div className="flex flex-col md:flex-row items-center gap-5 justify-center md:gap-1 md:justify-between">

            {/* education */}
            <div className="flex flex-col gap-5 items-center">
                <CvInfo 
                    date="11.24 - 05.25" 
                    title={t ("E&E1")} 
                    companyLink="https://www.super-code.de/" 
                    company="Supercode" 
                    description={t ("E&E1_2")}
                    document="/pdfs/Katharina-Bohr_Certificate.pdf" 
                    documentTitle={t("certificate")}
                />

                <CvInfo
                    date="2016 - 2020"
                    title={t ("speech_therapy")}
                    companyLink="https://www.hs-fresenius.de/?crmid=aCbGbAJcDaAaAaAaA&accountId=4081124337&campaignId=17428330071&adgroupId&creativeId&keywordId&gad_source=5&gad_campaignid=17428332954&gclid=EAIaIQobChMIhae977bGjgMVAf15BB3VWBeEEAAYASAAEgIKJPD_BwE"
                    company="Hochschule Fresenius"
                    description={t ("st_desc")}
                />
            </div>

            {/* visual divider */}
            <hr className="md:rotate-90 border-red/70 w-1/2 md:w-1/4 m-5 " />

            {/* experience */}
            <div className="flex flex-col gap-5 items-center ">
            <CvInfo
                date="2020-2023"
                title={t ("work_st")}
                description={t ("work_st_desc")}/>

            <CvInfo
                date= {t ("start_date")}
                title ={t ("advert")}
                description={t ("advert_desc")}
                hovered={true}
                />
            </div>
        </div>    

        
            
        <div className="flex items-center justify-center gap-5">
        <a 
           target="_blank"
           rel="noopener noreferrer"
           href={`/pdfs/CV_KatharinaBohr_${lang}.pdf`}
           className="cursor-click text-sm mt-10 md:mt-15 flex flex-col items-center gap-1 transition ease-in-out hover:scale-110"
           >
                <img
                className="h-4 md:h-5 lg:h-6"
                src="/img/cv.svg"
                alt="icon of a cv" />
                
                <p>{t ("cv_img")}</p>
           </a>
           <a 
           target="_blank"
           rel="noopener noreferrer"
           href="/pdfs/KatharinaBohr_Certificate.pdf"
           className="cursor-click text-sm mt-10 md:mt-15 flex flex-col items-center gap-1 transition ease-in-out hover:scale-110"
           >
                <img
                className="h-4 md:h-5 lg:h-6"
                src="/img/certificate.svg"
                alt="icon of a cv" />
                
                <p>{t ("certificate")}</p>
           </a>

        </div>
           
        
       </motion.section>
     );
}
 
export default ExpEdu;