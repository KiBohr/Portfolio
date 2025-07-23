import { motion } from "motion/react";

interface ProjectViewProps{
    logo?: string,
    title?: string,
    description?: string,
    info?: string
    linkText?: string,
    link?: string,
    gif?: string,
}

const ProjectView = ({logo, title, description, info,linkText, link, gif}:ProjectViewProps) => {
    return ( 
        <motion.div className="carousel-item w-full flex flex-col md:flex-row-reverse md:items-start items-center gap-2 cursor-all-scroll ">

                    <div
                    className="flex flex-col items-center md:items-start md:pt-2 md:pl-2">
                        <div className="flex items-center gap-2">
                            <img className="h-6 md:h-7" src={logo}/>
                            <h1 className="text-xl md:text-2xl">{title}</h1>
                        </div>
                        

                        <p className="text-[0.8rem] md:text-sm">{description}</p>

                        <p className="text-[0.6rem] md:text-[0.8rem]">{info}</p>

                        <a 
                        className="hidden md:block pt-2 text-[0.8rem] underline hover:no-underline"
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            {linkText}
                        </a>

                    </div>
                    
                    <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl">
                        <motion.img
                        src={gif}
                        className="h-100 rounded-3xl hover:drop-shadow-2xl"
                        whileHover={{scale: 1.01}}>
                        </motion.img>
                    </a>
                </motion.div>
     );
}
 
export default ProjectView;