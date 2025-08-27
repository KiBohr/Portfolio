import HeaderTitle from "@/component/headerTitle/HeaderTitle";
import { easeInOut, motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const LegalNotice = () => {

    const {t} = useTranslation()
    const { i18n } = useTranslation();
    const lang = i18n.resolvedLanguage || "en";

    return ( 
        <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
            duration: 0.4,
            ease: easeInOut,
         }}
         className="flex flex-col items-center justify-center gap-5 text-sm  px-5"
      >
            
               <HeaderTitle
               src={`/img/legalNotice_${lang}.svg`} 
               alt="legal notice"
               className="h-15 md:h-18"
               />

            <div className="flex flex-col items-start justify-center gap-6">
            <p className="mb-5">{t ("legalNoticeInfo")}</p>
            

            <div>
                <h2 className="text-[1rem]">{t ("owner")}</h2>
                <p>Katharina Bohr</p>
                <p>Weimarer Straße 39</p>
                <p>21107 Hamburg</p>
                <p>{t ("country")}</p>
            </div>

            <div >
                <h1 className="text-[1rem]" >{t ("contacts")}</h1>
                <p>0178 138 1195</p> 
                <p>kiwibohr@gmail.com</p> 
                
            </div>

            <div>
                <h2>{t ("responsible")}
                </h2>
                <p>Katharina Bohr</p>
            </div>

            </div>
            
        </motion.section>
    )
}
 
export default LegalNotice;