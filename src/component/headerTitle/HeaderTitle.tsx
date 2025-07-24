import { motion} from "motion/react";

interface HeaderTitleProps {
    src: string,
    alt: string,
    className: string,
}

const HeaderTitle = ({src, alt, className} : HeaderTitleProps) => {
    return ( 
        <motion.img
        src = {src}
        alt = {alt}
        className = {className}>
        </motion.img>
     );
}
 
export default HeaderTitle;