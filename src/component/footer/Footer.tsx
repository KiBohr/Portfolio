const Footer = () => {
    return ( 
        <div className="mt-auto flex items-center justify-start gap-4 m-3">
              {/*  component for dark light mode */}
            <img 
            className="hidden cursor-pointer hover:scale-110 transition-all duration-300 md:block md:h-8 lg:h-10" 
            src="/src/assets/img/lightMode.svg" 
            alt="doodle of a moon, dark/light mode" />

            {/*  component for language change */}
            <img 
            className="hidden cursor-pointer hover:scale-110 transition-all duration-300 md:block md:h-8 lg:h-10" 
            src="/src/assets/img/language.svg" 
            alt="DE, button to change languages" />
        </div>
      
     );
}
 
export default Footer;