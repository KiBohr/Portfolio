import ProjectView from "@/component/projectView/ProjectView";
import { easeInOut, motion } from "motion/react";

const Projects = () => {
    return ( 
            <motion.section
            initial={{opacity: 0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            transition={{
                duration:0.4,
                ease: easeInOut,
        }}
            className="flex flex-col items-center">
                <motion.img
                    src="/img/projects.svg" 
                    alt="projects"
                    className="h-15 mb-15 md:h-20 md:mb-10"
                />
            
            <div className="flex items-center justify-center">
            <div
            className="carousel flex rounded-box w-60 md:w-150 ">

                <ProjectView
                    logo="/img/vecipies_logo.svg"
                    title="Vecipe"
                    description="Fullstack vegan recipe app"
                    info="Arbeit mit supabase"
                    linkText="to the app"
                    link="https://vecipe.vercel.app/"
                    gif="/gifs/screenrecort_vecipes.gif"
                />
                <ProjectView
                    logo="/img/pokemon_logo.svg"
                    title="Pokemon-App"
                    description="Frontend pokemon App"
                    info="Arbeit mit PokeAPI"
                    linkText="to the app"
                    link="https://pokemon-api-sand.vercel.app/"
                    gif="/gifs/screenrecord_pokemon.gif"
                />
                <ProjectView
                    logo="/img/sparkle_logo.svg"
                    title="Sparkle-App"
                    description="Fullstack social media App"
                    info="Abschlussprojekt der Umschulung"
                    linkText="to the app"
                    link="https://github.com/KiBohr/Sparkle-App"
                    gif="/gifs/screenrecord_sparkle.gif"
                />

                <ProjectView
                description="Weitere Projekte"
                info="gibt es hier:"
                linkText="zu meinem GitHub"
                link="https://github.com/KiBohr"
                gif="/img/Github.svg"
                              />

            </div>
            <motion.img
                src="/img/collapsable.svg"
                className="h-4 md:h-7 rotate-270 opacity-50">
            </motion.img>
                
            </div>

            
            
            </motion.section>
     );
}
 
export default Projects;