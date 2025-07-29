import HeaderTitle from "@/component/headerTitle/HeaderTitle";
import LinkButton from "@/component/linkButton/LinkButton";
import ProjectView from "@/component/projectView/ProjectView";
import { easeInOut, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const Projects = () => {

    const carouselRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState (false);

    const checkScroll = () => {
        const element = carouselRef.current;
    if (!element) return;

    setCanScrollLeft(element.scrollLeft > 0);

    const scrolledToEnd = Math.abs(element.scrollWidth - element.clientWidth - element.scrollLeft) < 2;
    setCanScrollRight(!scrolledToEnd)
    }

    useEffect(() => {
        checkScroll()
        const element = carouselRef.current;
        if (element) {
            element.addEventListener("scroll", checkScroll);
            window.addEventListener("resize", checkScroll);
            return () => {
                element.removeEventListener("scroll", checkScroll);
                window.removeEventListener("resize", checkScroll);
            }
        }
    }, [])

    // function for arrows
    // left
    const scrollLeft = () => {
        if (!carouselRef.current) return;
        carouselRef.current.scrollBy({ left: -200, behavior: "smooth"})
    }
    // right
    const scrollRight = () => {
        if (!carouselRef.current) return;
        carouselRef.current.scrollBy({ left: 200, behavior: "smooth" });
      };


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

                <HeaderTitle
                src="/img/projects.svg"
                alt="handwritten 'projects'"
                className="h-15 mb-1  md:h-20"/>
               
                <p
                className="text-[0.8rem] mb-15 md:mb-10"
                >slide through my latest work
                </p>
            
            <div className="flex items-center justify-center">

                {/* to keep the content centered - not the optimal solution */}
            {!canScrollLeft && (
                <button
                className="opacity-0"
                onClick={scrollRight}
                aria-label="Scroll right"
              >
                <motion.img
                    src="/img/collapsable.svg"
                    alt="arrow to the right"
                    >
                </motion.img>
              </button>
            )}

                {/* left arrow only shows, when you can scroll left */}
                {canScrollLeft &&(
                <button
                    onClick={scrollLeft}
                    aria-label="Scroll left"
                    style={{ top: "50%", transform: "translateY(-50%)" }}
                >
                    <motion.img
                        src="/img/collapsable.svg"
                        alt="arrow to the right"
                        className="h-4 md:h-7 rotate-90 opacity-50 hover:opacity-100 hover:scale-110 cursor-pointer">
                    </motion.img>
                </button>
            )}
            

            <div
            ref={carouselRef}
            className= "carousel flex rounded-box w-60 md:w-150 " >

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

                <div
                    className="carousel-item flex flex-col items-center w-full gap-2 mt-20 text-center text-red"
                >
                    <h1 className="text-xl md:text-2xl">Für weitere Projekte</h1>
                    <p className="text-[0.8rem] md:text-sm">schau gern auf meinem GitHub vorbei:</p>
                    <LinkButton
                        link="https://github.com/KiBohr" 
                        src="/img/Github.svg" 
                        alt="logo of github"
                        styling="h-20 hover:scale:110"
                    />
                </div>
                

            </div>
            
            {canScrollRight && (
                <button
                onClick={scrollRight}
                aria-label="Scroll right"
                style={{ top: "50%", transform: "translateY(-50%)" }}
              >
                <motion.img
                    src="/img/collapsable.svg"
                    alt="arrow to the right"
                    className="h-4 md:h-7 rotate-270 opacity-50 hover:opacity-100 hover:scale-110 cursor-pointer">
                </motion.img>
              </button>
            )}
            {/* to keep the content centered - not the optimal solution */}
            {!canScrollRight && (
                <button
                className="opacity-0"
                onClick={scrollRight}
                aria-label="Scroll right"
              >
                <motion.img
                    src="/img/collapsable.svg"
                    alt="arrow to the right"
                    >
                </motion.img>
              </button>
            )}
            
            </div>
            </motion.section>
     );
}
 
export default Projects;