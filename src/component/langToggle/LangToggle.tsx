import { useTranslation } from 'react-i18next'
import useImagePreloader from '../preloadImage/PreloadImage';

const LangToggle = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en');
    }

    const imgSrc = i18n.language === 'en' ? '/img/ToggleGerman.svg' : '/img/ToggleEnglish.svg';

    const imgAlt = i18n.language === 'en' ? 'german' : 'englisch';
    
    // preload img
    const imagesToPreload = [
        '/img/ToggleGerman.svg',
        '/img/ToggleEnglish.svg',
    ];

    const imagesLoaded = useImagePreloader(imagesToPreload);

    if (!imagesLoaded)
        return <div className="text-center py-20">Loading handwritten titles, please wait...</div>;

    
    return ( 
        <button
        className="cursor-pointer h-5 md:h-6 lg:h-7 hover:scale-110 transition-all duration-300" 
        onClick={toggleLanguage}
        aria-label='toggle language'>
            
            <img
                src={imgSrc}
                alt={imgAlt}
                className="h-5 md:h-6 lg:h-7"
            />
        </button>
     );
}

 
export default LangToggle;