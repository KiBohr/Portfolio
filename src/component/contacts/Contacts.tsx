import { motion} from "motion/react";

interface ContactsProps {
    img: string,
    alt: string,
    text?:string,
}

const Contacts = ({img, alt, text} : ContactsProps) => {

    return ( 
        <motion.div
        className="flex items-center justify-between gap-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1.1 }}
        >
             <img 
            src={img} 
            alt={alt}
            className="h-8 cursor-pointer hover:scale-110 transition-all duration-300" />
            <p>{text}</p>
        </motion.div>
     );
}
 
export default Contacts;