import { Link } from "react-router-dom";

const Home = () => {
    return ( 
       
        <section className="flex flex-col items-center justify-center gap-10 md:flex-row md:text-6xl md:gap-15 lg:text-8xl lg:gap-20 max-h-screen">
            
            <img
            className="h-[40vh] rounded-4xl md:h-[60vh] lg:h-[70vh]" 
            src="/src/assets/img/platzhalterBild.svg" 
            alt="abstract" 
            />
            
            <div
            className="break-words text-center uppercase flex flex-col gap-3 items-center justify-center text-4xl md:items-start md:text-5xl md:gap-6 md:text-start">   
                <Link className="cursor-pointer hover:scale-110 transition-all duration-300" to="aboutMe">
                    <img 
                        src="/src/assets/img/aboutMe.svg" 
                        alt="about me"
                        className="h-12 md:h-15" />
                </Link>
                        
                <Link className="cursor-pointer hover:scale-110 transition-all duration-300"to="skills&tech">
                <img 
                        src="/src/assets/img/skills&tech.svg" 
                        alt="skills&tech"
                        className="h-12 md:h-15" />
                </Link>

                <Link className="cursor-pointer hover:scale-110 transition-all duration-300"to="exp&edu">
                <img 
                        src="/src/assets/img/Ex&Ed.svg" 
                        alt="about me"
                        className="h-19 md:h-25" />
                </Link>

                <Link className="cursor-pointer hover:scale-110 transition-all duration-300"to="projects">
                <img 
                        src="/src/assets/img/projects.svg" 
                        alt="about me"
                        className="h-12 md:h-15" />
                </Link>

                <Link className="cursor-pointer hover:scale-110 transition-all duration-300"to="contact">
                <img 
                        src="/src/assets/img/Contact.svg" 
                        alt="about me"
                        className="h-12 md:h-15" />
                </Link>
            </div>
        </section>
        
     );
}
 
export default Home;