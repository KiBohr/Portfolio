import {motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface CvInfoProps {
    date?: string,
    title?: string,
    companyLink?: string,
    company?: string,
    description: string,
    document?: string,
    documentTitle?: string,
    hovered?: boolean,
}

const CvInfo = ({date, title,companyLink, company, description, document, documentTitle, hovered}:CvInfoProps) => {

    // for collapsable content
    const [open,setOpen] = useState(false)

    // for project link
    const [wasHoverred, setWasHovered] = useState(false)


    return ( 
        <motion.div
            className="max-w-sm md:max-w-md flex flex-col justify-center items-center gap-1 bg-white/20 p-2 rounded-xl"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            whileTap={{ scale: 1.1 }}>
            <motion.div
            
            onMouseEnter={() => {
                setOpen(true);
                setWasHovered(true);}}
            onMouseLeave={() => setOpen(false)}
            >
                
{/* title */}
                <div className="flex flex-col items-center justify-center gap-1">
                    <motion.button
                    type="button"
                    // onClick still there for touchuser
                    onClick = {() => setOpen((o) =>!o)}
                    className="flex items-center w-full justify-center gap-2 text-lg cursor-pointer"
                    whileHover={{scale: 1.02}}
                    whileTap={{scale:1.001}}>
                    {title}

                    <span
                        className={`transition-transform duration-300 ${
                            open ? "rotate-180" 
                            : "rotate-0"
                        }`}
                        >
                        <img 
                        className="h-3"
                        src="/img/collapsable.svg" alt="small arrow down" />
                    </span>

                    </motion.button>
                    
{/* Collapsible Content */}
            <motion.div
                initial={false}
                animate={open ? "open" : "collapsed"}
                variants={{
                open: { height: "auto", opacity: 1, marginTop: "0.5rem" },
                collapsed: { height: 0, opacity: 0, marginTop: 0 },
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex flex-col items-center overflow-hidden w-full"
            >
                <p>{date}</p>

                <div className="flex flex-col items-center gap-1">
                {companyLink && (
                    <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={companyLink}
                    className="cursor-pointer hover:underline"
                    >
                    {company}
                    </a>
                )}

                <p className="text-[0.8rem] text-center">
                    {description}
                </p>

                {document && documentTitle && (
                    <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.8rem] cursor-pointer underline hover:no-underline"
                    href={document}
                    >
                    {documentTitle}
                    </a>
                )}
                </div>
            </motion.div>
                       
                </div> 
        </motion.div>

            {hovered && wasHoverred && (
                <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ type: "spring", duration: 6 }}
                >
                     <Link to="/projects">
                        <motion.img
                        src="/img/projects_en.svg"
                        alt="education and experience"
                        className="h-8 m-5 md:mb-8"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.91 }}
                        />
                  </Link>
                </motion.div>
                   
                )}
        </motion.div>
        
     );
}
 
export default CvInfo;