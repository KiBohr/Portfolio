interface LinkButtonProps {
    link: string;
    src:string;
    alt:string;
    styling?:string;
}

const LinkButton = ({link, src, alt, styling} : LinkButtonProps) => {
    return ( 
        <a 
        href={link}
        className="cursor-pointer hover:scale-110 transition-all duration-300">
                <img
                src={src} 
                alt={alt}
                className={styling} />
        </a>
     );
}
 
export default LinkButton;