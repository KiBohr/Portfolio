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
                    className="h-15 mb-1  md:h-20 "
                />
                <p
                className="text-sm mb-15 md:mb-10">slide through my latest work</p>
            
            <div className="flex items-center justify-center">
            <div
            className="carousel flex rounded-box w-60 md:w-150 ">

                <ProjectView
                    logo="/img/vecipies_logo.svg"
                    alt="vecipies logo"
                    title="Vecipe"
                    description="Fullstack vegan recipe app"
                    info="Arbeit mit supabase"
                    linkText="to the app"
                    link="https://vecipe.vercel.app/"
                    gif="/gifs/screenrecort_vecipes.gif"
                    altGif="short gif of the vevipe app"
                />
                <ProjectView
                    logo="/img/pokemon_logo.svg"
                    alt="picture of a masterball, the pokemon app logo"
                    title="Pokemon-App"
                    description="Frontend pokemon App"
                    info="Arbeit mit PokeAPI"
                    linkText="to the app"
                    link="https://pokemon-api-sand.vercel.app/"
                    gif="/gifs/screenrecord_pokemon.gif"
                    altGif="short gif of the pokemon app"
                />
                <ProjectView
                    logo="/img/sparkle_logo.svg"
                    alt="sparkle logo, a green star with rounded edges"
                    title="Sparkle-App"
                    description="Fullstack social media App"
                    info="Abschlussprojekt der Umschulung"
                    linkText="to the app"
                    link="https://github.com/KiBohr/Sparkle-App"
                    gif="/gifs/screenrecord_sparkle.gif"
                    altGif="a short gif of the sparkle app"                
                    />

                <ProjectView
                alt="github logo"
                description="Weitere Projekte"
                info="gibt es hier:"
                linkText="zu meinem GitHub"
                link="https://github.com/KiBohr"
                gif="/img/Github.svg"
                altGif="github logo"
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