import { motion } from "motion/react";

const Projects = () => {
    return ( 
            <motion.section
            className="flex flex-col items-center">
                <motion.img
                    src="/src/assets/img/projects.svg" 
                    alt="projects"
                    className="h-15 mb-15 md:h-20 md:mb-10"
                />
                <motion.div className="flex flex-col md:flex-row-reverse md:items-start items-center gap-2">
                    <div
                    className="flex flex-col items-center md:items-start md:pt-2 md:pl-2">
                        <h1 className="text-xl md:text-2xl">Sparkle-App</h1>
                        <p className="text-[0.8rem] md:text-sm">fullstack social media App</p>
                        <p className="text-[0.6rem] md:text-[0.8rem]">Abschlussprojekt der Umschulung </p>
                        <a 
                        className="hidden md:block pt-2 text-[0.8rem] underline"
                        href="https://github.com/KiBohr/Sparkle-App"
                         target="_blank"
                        rel="noopener noreferrer"
                        >
                            to the application
                        </a>
                    </div>
                    
                    <a
                    href="https://github.com/KiBohr/Sparkle-App"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl">
                        <motion.img
                        src="/src/assets/gifs/screenrecord_sparkle.gif"
                        className="h-100 rounded-3xl">
                        </motion.img>
                    </a>
                </motion.div>
               

            </motion.section>
     );
}
 
export default Projects;