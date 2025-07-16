import { Link } from "react-router-dom";
import { motion } from "motion/react"


const Header = () => {
    return ( 
        <header className="flex items-center justify-between gap-4 mx-2 mb-5  md:mx-5 md:mb-10">
            <Link 
            to="/">
                <motion.img
                    src="/src/assets/img/logo1.svg"
                    alt="logo KB"
                    className="h-10"
                    initial={{ opacity: 0, scale:0 }}
                    animate={{ opacity: 1, scale:1}}
                    transition={{ duration: 1, type: "spring" }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.96 }}
                    >
                </motion.img>
            </Link>



            <div className="flex items-center gap-2 justify-center">
                 {/*  component for dark light mode */}
            <img 
            className="cursor-pointer h-5 md:h-6 lg:h-7 hover:scale-110 transition-all duration-300" 
            src="/src/assets/img/lightMode.svg" 
            alt="doodle of a moon, dark/light mode" />

            {/*  component for language change */}
            <img 
            className="cursor-pointer h-5 md:h-6 lg:h-7 hover:scale-110 transition-all duration-300" 
            src="/src/assets/img/language.svg" 
            alt="DE, button to change languages" />
            </div>
        
        </header>
     );
}
 
export default Header;