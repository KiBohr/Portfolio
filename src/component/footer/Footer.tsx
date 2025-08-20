import LinkButton from "../linkButton/LinkButton";

const Footer = () => {
    return ( 

        <footer className="fixed bottom-0 left-0 w-full hidden md:block">
            <div className="flex items-center justify-end gap-4 px-8 py-5">
                <LinkButton 
                link="https://github.com/KiBohr" 
                src="/img/Github.svg" 
                alt="logo of github"
                styling="h-5 opacity-70 transition ease-in-out hover:opacity-100"
                />

                <LinkButton 
                link="https://www.linkedin.com/in/katharina-bohr-3380bb352/" 
                src="/img/linkedin.svg" 
                alt="logo of linkedin"
                styling="h-5 opacity-70 transition ease-in-out hover:opacity-100"
                />

            </div>
            
        </footer>
     );
}
 
export default Footer;