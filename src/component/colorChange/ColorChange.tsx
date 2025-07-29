import { mainContext } from "@/context/MainProvider";
import { useContext } from "react";


const ColorChange = () => {
   
const {theme, toggleTheme} =useContext(mainContext)
   
     
    return ( 
        <button
        className="cursor-pointer h-5 md:h-6 lg:h-7 hover:scale-110 transition-all duration-300" 
        onClick={toggleTheme}>
            {theme === "dark" ? (
                <img 
                src="img/lightMode.svg" 
                alt="doodle of a sun, sets to lightmode"
                className="h-5 md:h-6 lg:h-7"/>
                
            ) : (
                <img 
                src="/img/darkMode.svg" 
                alt="doodle of a moon, sets to darkmode"
                className="h-5 md:h-6 lg:h-7" />
            )}
        </button>
  );
};
     

 
export default ColorChange;