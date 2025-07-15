import { Link } from "react-router-dom";
import Contacts from "../../component/contacts/Contacts";
import LinkButton from "../../component/linkButton/LinkButton";

const Contact = () => {
    return ( 
        <section className="flex flex-col gap-3 items-center justify-center mt-10 w-full">
            <h1 className="uppercase text-7xl">Contact</h1>
            
            <p className="text-lg mb-15">Ich freue mich auf Deine Nachricht!</p>

            <div className="flex flex-col items-center gap-10 w-full bg-white/20 p-5 rounded-2xl md:w-1/2 transition ease-in-out hover:bg-beige/50">
                <Contacts 
                img="/src/assets/img/email.svg" 
                alt="@ icon" 
                text="kiwibohr@gmail.com"/>

                <LinkButton 
                link="https://github.com/KiBohr" 
                src="/src/assets/img/Github.svg" 
                alt="logo of github"
                styling="h-12"/>

                <LinkButton 
                link="https://www.linkedin.com/in/katharina-bohr-3380bb352/" 
                src="/src/assets/img/linkedin.svg" 
                alt="logo of linkedin"
                styling="h-12"/>
               
            </div>
        </section>
        

     );
}
 
export default Contact;