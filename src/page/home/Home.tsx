import { Link } from "react-router-dom";

const Home = () => {
    return ( 
       
        <section className="flex flex-col items-center justify-center gap-5 md:flex-row md:text-6xl md:gap-15 lg:text-8xl lg:gap-20 m-5 max-h-screen">
            
            <img
            className="h-[50vh] rounded-4xl md:h-[60vh] lg:h-[80vh]" 
            src="/src/assets/img/platzhalterBild.svg" 
            alt="abstract" 
            />
            
           
            <div
            className="break-words text-center uppercase flex flex-col gap-2 items-center justify-center text-4xl md:items-start md:text-5xl md:gap-6 md:text-start">   
                <Link className="cursor-pointer hover:scale-110 transition-all duration-300" to="aboutMe">About Me</Link>
                <Link className="cursor-pointer hover:scale-110 transition-all duration-300"to="skills&tech">Skills & Tech</Link>
                <Link className="cursor-pointer hover:scale-110 transition-all duration-300"to="exp&edu">Experience & Education</Link>
                <Link className="cursor-pointer hover:scale-110 transition-all duration-300"to="projects">Projects</Link>
                <Link className="cursor-pointer hover:scale-110 transition-all duration-300"to="contact">Contact</Link>
            </div>
        </section>
        
     );
}
 
export default Home;