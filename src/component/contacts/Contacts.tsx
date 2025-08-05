import { motion} from "motion/react";
import CopiedContent from "../copiedContent/CopiedContent";

interface ContactsProps {
    img: string,
    alt: string,
    text?:string,
}

const Contacts = ({img, alt, text} : ContactsProps) => {

    return ( 
        <motion.div
        className="cursor-copy flex items-center justify-between gap-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1.1 }}
        onClick={() => {
            if (text) navigator.clipboard.writeText(text);
          }}
        >
            <img 
                src={img} 
                alt={alt}
                className="h-8 cursor-pointer hover:scale-110 transition-all duration-300" 
            />

            <CopiedContent text={text}/>
            
        </motion.div>
     );
}
 
export default Contacts;