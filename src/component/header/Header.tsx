import { Link } from "react-router-dom";

const Header = () => {
    return ( 
supercode
        <header className="flex items-center justify-between gap-4 mx-2 mb-10 md:mx-5 md:mb-20">
            <Link 
            to="/">
            <img 
            className="h-8 md:h-10 lg:h-15 hover:scale-110 transition-all duration-300"
            src="/src/assets/img/logo1.svg" 
            alt="logo KB" />
            </Link>


            <div className="flex items-center gap-2 justify-center">
                 {/*  component for dark light mode */}
            <img 
            className="cursor-pointer h-5 md:h-8 lg:h-10  hover:scale-110 transition-all duration-300" 
            src="/src/assets/img/lightMode.svg" 
            alt="doodle of a moon, dark/light mode" />

            {/*  component for language change */}
            <img 
            className="cursor-pointer h-5 md:h-8 lg:h-10 hover:scale-110 transition-all duration-300" 
            src="/src/assets/img/language.svg" 
            alt="DE, button to change languages" />
            </div>
        
        </header>
     );
}
 
export default Header;