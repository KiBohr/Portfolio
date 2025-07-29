import { Link } from "react-router-dom";
import { easeInOut, motion} from "motion/react";

const Home = () => {
    return ( 

        <motion.section
        className="flex flex-col items-center justify-center gap-10 mt-10 md:flex-row md:text-6xl md:gap-15 md:mt-20 lg:mt-10 lg:text-8xl lg:gap-25 h-full w-full"
        initial={{opacity: 0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{
                duration:0.4,
                ease: easeInOut,
        }}
        >
               <motion.img
               src="/img/logo1.svg"
               alt="an image of a K and a B melted together, the logo of this website"
               className="h-60  md:h-90 "/>
            
            <div
            className="break-words text-center uppercase flex flex-col gap-3 items-center justify-center text-4xl md:items-start md:text-5xl md:gap-6 md:text-start">   
                <Link className="cursor-pointer hover:scale-110 transition-all duration-300" to="aboutMe">
                    <img 
                        src="/img/aboutMe.svg" 
                        alt="about me"
                        className="h-10 md:h-16 lg:h-20" />
                </Link>
                        
                <Link className="cursor-pointer hover:scale-110 transition-all duration-300"to="skills&tech">
                <img 
                        src="/img/skills&tech.svg" 
                        alt="skills&tech"
                        className="h-12 md:h-20 lg:h-24" />
                </Link>

                <Link className="cursor-pointer hover:scale-110 transition-all duration-300"to="exp&edu">
                <img 
                        src="/img/Ex&Ed.svg" 
                        alt="about me"
                        className="h-20 md:h-28 lg:h-32" />
                </Link>

                <Link className="cursor-pointer hover:scale-110 transition-all duration-300"to="projects">
                <img 
                        src="/img/projects.svg" 
                        alt="about me"
                        className="h-12 md:h-20 lg:h-24" />
                </Link>

                <Link className="cursor-pointer hover:scale-110 transition-all duration-300"to="contact">
                <img 
                        src="/img/Contact.svg" 
                        alt="about me"
                        className="h-12 md:h-20 lg:h-24" />
                </Link>
            </div>
        </motion.section>
     );
}
 
export default Home;