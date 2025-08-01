import HeaderTitle from "@/component/headerTitle/HeaderTitle";
import {easeInOut, motion } from "motion/react";

const AboutMe = () => {
    return ( 
        <motion.section
        className="flex flex-col items-center"
        initial={{opacity: 0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{
                duration:0.4,
                ease: easeInOut,
        }}
        >
            <HeaderTitle
            src="/img/aboutMe.svg"
            alt="handwritten 'about me'"
            className="h-17 md:h-20 mb-8 md:mb-10"
            />
        
           
             <motion.div
             className="w-[80vw] flex flex-col-reverse items-center justify-center gap-5 md:gap-20 md:flex-row md:justify-start md:text-start"
             transition={{duration:0.8}}
             >
           
                <div 
                    className="bg-white/20 rounded-xl p-5 text-[0.7rem] flex flex-col items-center text-center md:text-start md:text-[0.8rem] lg:text-base gap-2 md:w-1/2">
                        <p className=" text-sm md:text-lg md:text-start mb-2">Moin,
                            ich freue mich über den Besuch auf meiner Seite :)
                        </p>
                        <p>
                            Mein Name ist Katharina, ich werde dieses Jahr 30 und habe im Mai meine Umschulung als <span className="animate-pulse duration-1000 transition ease-in-out">Webdeveloper*in</span> abgeschlossen. 
                        </p>
                        <p>
                        Ich bin davon überzeugt, dass jede Fähigkeit dabei unterstützen kann Probleme auf <span className="animate-pulse duration-1000 transition ease-in-out">individuelle</span>  Art und Weise zu lösen. Meine Erfahrung als Logopäd*in hat im ersten Moment wenig mit dem Feld des Entwickelns zu tun, hilft mir aber dabei:
                        </p>
                        
                        
                        <ul className="md:text-sm list-disc flex flex-col items-start px-4">
                            <li>mich produktiv <span className="animate-pulse duration-1000 transition ease-in-out">selbstständig</span> zu organisieren</li>
                            <li>effizient und zielgerichtet in einem interdisziplinären <span className="animate-pulse duration-1000 transition ease-in-out">Team</span> zu arbeiten</li>
                            <li>und kreativ immer unterschiedliche <span className="animate-pulse duration-1000 transition ease-in-out">Probleme</span> angepasst <span className="animate-pulse duration-1000 transition ease-in-out">lösen</span> zu können.</li>
                        </ul>
                </div>

                <img 
                src="/img/about.jpg" 
                alt="a picture of me"
                className="w-2/5 max-w-xs md:w-1/3 rounded-xl" 
                />
            </motion.div>

        </motion.section>
        
     );
}
 
export default AboutMe;