import { useLocation } from "react-router-dom";
import LinkButton from "../linkButton/LinkButton";
import { motion } from "framer-motion";

const Footer = () => {


    const location = useLocation();
    const hideSocials = location.pathname === "/contact"

    return ( 
         <motion.footer
         initial={{ opacity: 0, scale:0 }}
         animate={{ opacity: 1, scale:1}}
         transition={{ duration: 1, type: "spring" }}
         
            className="fixed bottom-0 left-0 w-full">
                {!hideSocials && <div className="hidden md:block">
                <div className="flex items-center justify-end gap-4 px-8 py-5 ">
                    <LinkButton 
                    link="https://github.com/KiBohr" 
                    src="/img/Github.svg" 
                    alt="logo of github"
                    styling="h-5 opacity-70 transition ease-in-out hover:opacity-100"
                    />

                    <LinkButton 
                    link="https://www.linkedin.com/in/katharina-bohr-3380bb352/" 
                    src="/img/linkedin.svg" 
                    alt="logo of linkedin"
                    styling="h-5 opacity-70 transition ease-in-out hover:opacity-100"
                    />
                </div>
            </div>}
           

            <div className="flex items-center justify-center gap-3 fixed bottom-5 left-0  md:justify-start md:left-5">
                <p className="text-[0.6rem] text-red/70  ">design & code by</p>
                <p className="text-[0.7rem] text-green  ">K Bohr</p>
            </div>

            </motion.footer>
     );
}
 
export default Footer;