import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface navHomeProps {
    to: string;
    src : string;
    alt: string;
    styling: string;
}

const NavHome = ({to,src,alt,styling}: navHomeProps) => {

     // translation
  const { i18n } = useTranslation();
  const lang = i18n.resolvedLanguage || "en"; 
  // Instead of i18n.language, will make sure, that the language is always one of the supported languages or as default english

    return ( 
        <Link
          className="cursor-click hover:scale-110 transition-all duration-300"
          to={to}
        >
          <img
            src={`${src}${lang}.svg`}
            alt={alt}
            className={styling}
          />
        </Link>
     );
}
 
export default NavHome;