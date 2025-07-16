import Contacts from "../../component/contacts/Contacts";
import LinkButton from "../../component/linkButton/LinkButton";

const Contact = () => {
    return ( 
        <section className="flex flex-col gap-3 items-center justify-center mt-10 w-full">
            <img 
            src="/src/assets/img/Contact.svg" 
            alt="contact"
            className="h-20" />
            
            <p className="md:text-lg mb-15">Ich freue mich auf Deine Nachricht!</p>

            <div className="flex flex-col items-center bg-white/30 p-5 rounded-xl gap-10 max-w-xs mx-auto mt-12 md:mt-20 md:max-w-lg lg:max-w-2xl mb-5 hover:shadow-sm">
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