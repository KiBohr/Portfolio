import { motion} from "motion/react";

interface HeaderTitleProps {
    src: string,
    alt: string,
    className: string,
    desc?: string,
}

const HeaderTitle = ({src, alt, className, desc} : HeaderTitleProps) => {
    return (
        <div className="flex flex-col items-center justify-center ">
            <motion.img
                src = {src}
                alt = {alt}
                className = {className}>
            </motion.img>
            {desc && <p className="text-[0.8rem] mb-15 md:mb-10 md:text-sm">{desc}</p>}
        </div>
        
     );
}
 
export default HeaderTitle;