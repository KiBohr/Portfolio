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
             className=" flex flex-col-reverse items-center justify-center gap-5 md:gap-20 md:flex-row md:justify-start md:text-start"
            //  initial={{ opacity: 0, scale: 0.99 }}
            //  animate={{ opacity: 1, scale: 1 }} 
             transition={{duration:0.8}}
             >
           
                <div 
                    className="bg-white/20 rounded-xl p-4 text-[0.7rem] flex flex-col items-center text-center md:text-start md:text-[0.8rem] lg:text-base gap-2 text-red/80 md:w-1/2">
                        <p className="text-red text-start">Moin,
                            ich freue mich über den Besuch auf meiner Seite :)
                        </p>
                        <p>
                            Mein Name ist Katharina, ich bin fast 30 Jahre alt und habe dieses Jahr meine Umschulung als <span className="text-red">Webdeveloper*in</span> abgeschlossen. 
                        </p>
                        <p>
                        Ich bin davon überzeugt, dass jede Fähigkeit dabei unterstützen kann Probleme auf <span className="text-red">individuelle</span>  Art und Weise zu lösen. Meine Erfahrung als Logopäd*in hat im ersten Moment wenig mit dem Feld des Entwickelns zu tun, hilft mir aber dabei
                        </p>
                        <ul className="list-disc text-red flex flex-col items-start">
                            <li>mich produktiv selbstständig zu organisieren</li>
                            <li>effizient und zielgerichtet in einem interdisziplinären Team zu arbeiten</li>
                            <li>und kreativ immer unterschiedliche Probleme angepasst lösen zu können.</li>
                        </ul>
                </div>

                <img 
                src="/img/about.jpg" 
                alt="a picture of me"
                className="w-1/3 rounded-xl " 
                />
            </motion.div>

        </motion.section>
        
     );
}
 
export default AboutMe;