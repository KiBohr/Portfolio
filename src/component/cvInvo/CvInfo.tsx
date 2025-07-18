import {easeInOut, motion } from "motion/react";

interface CvInfoProps {
    date: string,
    title: string,
    compmanyLink?: string,
    company: string,
    description: string,
    document?: string,
    documentTitle?: string,
}

const CvInfo = ({date, title,compmanyLink, company, description, document, documentTitle}:CvInfoProps) => {
    return ( 
        <motion.div
            className="max-w-sm md:max-w-md flex flex-col justify-center items-center gap-1 bg-white/20 p-2 rounded-xl"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            whileTap={{ scale: 1.1 }}
            >
            <p>{date}</p>
                <div className="flex flex-col items-center justify-center gap-1">
                    <h2 className="text-lg">{title}</h2>
                    
                    <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={compmanyLink}
                    className="cursor-pointer hover:underline">{company}</a>

                    <p className="text-[0.8rem] text-center">{description}</p>

                    <a 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.8rem] cursor-pointer underline hover:no-underline" 
                    href={document}>
                        {documentTitle}
                    </a>
                </div>
        </motion.div>
        
     );
}
 
export default CvInfo;