interface ContactsProps {
    img: string,
    alt: string,
    text?:string,
}

const Contacts = ({img, alt, text} : ContactsProps) => {

    return ( 
        <div className="flex items-center justify-between gap-2 hover:scale-110 transition-all duration-300">
            <img 
            src={img} 
            alt={alt}
            className="h-8 cursor-pointer hover:scale-110 transition-all duration-300" />
            <p>{text}</p>
        </div>
     );
}
 
export default Contacts;