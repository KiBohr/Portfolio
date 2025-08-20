import { Link, useLocation } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
// import ColorChange from "../colorChange/ColorChange"; add again when colorChange is working with svgs
import LangToggle from "../langToggle/LangToggle";
import { useTranslation } from "react-i18next";


const Header = () => {

    const location = useLocation()
    const isHomePage : boolean = location.pathname === "/";

    // translation
    const { i18n, t } = useTranslation();
    const lang = i18n.resolvedLanguage || "en";

    // logic for dowdloading cv
    function handleDownLoad(e:React.MouseEvent<HTMLAnchorElement>) {
        const confirmed = window.confirm(t("cv"));
        if (!confirmed) {
            e.preventDefault()
        }
    }

    // logic for draggable Cv icon
        const controls = useAnimation();
        const [isDraggable, setIsDraggable] = useState(false);
        const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
      
        // after appearing it is draggable
        useEffect(() => {
          controls.start({
            y: 0,
            opacity: 1,
            transition: { type: "spring", bounce: 0.3, duration: 0.7 }
          }).then(() => setIsDraggable(true));
          return () => clearTimeout(timer.current);
        }, [controls]);
      
        // after dragging the counter starts new
        const handleDragEnd = () => {
          clearTimeout(timer.current);
          timer.current = setTimeout(() => {
            controls.start({
              x: 0,
              y: 0,
              transition: { type: "spring", bounce: 0.33, duration: 0.7 }
            });
          }, 3000);}
      

    return ( 
        <header className="flex items-center justify-between gap-4 mx-2 mb-5 md:mx-5 md:mb-10 ">
            {!isHomePage && (
                <Link 
            to="/">
                <motion.img
                    src="/img/logo1.svg"
                    alt="logo KB"
                    className="h-14 cursor-back"
                    initial={{ opacity: 0, scale:0 }}
                    animate={{ opacity: 1, scale:1}}
                    transition={{ duration: 1, type: "spring" }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.96 }}
                    >
                </motion.img>
            </Link>
            )}
            
           {/* change the postion of this */}
            <div className="flex items-center gap-5 justify-center">
                 
            {/* cv */}
            <motion.a
            onClick={handleDownLoad}
                target="_blank"
                rel="noopener noreferrer"
                // downloads cv on click
                download={true} 
                href={`/pdfs/CV_KatharinaBohr_${lang}.pdf`}
                drag={isDraggable}
                dragElastic={0.15}
                animate={controls}
                initial={{ y: -300, opacity: 0 }}
                onDragEnd={handleDragEnd}
                style={{ display: "inline-block", cursor: isDraggable ? "grab" : "auto" }}
                >
                <motion.img
                    className="h-8 cursor-drag"
                    src="/img/cv.svg"
                    alt="icon of a cv"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1.4 }}
                    draggable={false} // Verhindert Default-Browser-Drag von Images
                />
            </motion.a>
                
                {/*  component for dark light mode add again, when svgs work*/}
            {/* <ColorChange/> */}

            
            {/*  component for language change */}
           <LangToggle/>
        
            </div>
        </header>
     );
}
 
export default Header;