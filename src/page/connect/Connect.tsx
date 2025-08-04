import Contacts from "@/component/contacts/Contacts";
import LinkButton from "@/component/linkButton/LinkButton";
import { useTranslation } from "react-i18next";
import { motion} from "motion/react";
import HeaderTitle from "@/component/headerTitle/HeaderTitle";

const Connect = () => {
    const {t} = useTranslation()
    const { i18n } = useTranslation();
    const lang = i18n.language || 'en';

    return ( 
        <motion.section
        className="flex flex-col gap-3 items-center justify-center mt-10 w-full"
        initial={{ rotateY: 90, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        exit={{ rotateY: -90, opacity: 0 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        style={{
            perspective: 1000,
            width: "100%",
            backfaceVisibility: "hidden" }}
    >
        <HeaderTitle
        src={`/img/contact_${lang}.svg`} 
        alt="contact"
        className="h-18 md:h-20"
        desc={t ("contact")}/>
       

        <div className="flex flex-col items-center bg-white/30 p-5 rounded-xl gap-10 max-w-xs mx-auto md:max-w-lg lg:max-w-2xl mb-5">
            <Contacts 
            img="/img/email.svg" 
            alt="@ icon" 
            text="kiwibohr@gmail.com"/>

            <LinkButton 
            link="https://github.com/KiBohr" 
            src="/img/Github.svg" 
            alt="logo of github"
            styling="h-12"/>

            <LinkButton 
            link="https://www.linkedin.com/in/katharina-bohr-3380bb352/" 
            src="/img/linkedin.svg" 
            alt="logo of linkedin"
            styling="h-12"/>
           
        </div>
    </motion.section>
     );
}
 
export default Connect;