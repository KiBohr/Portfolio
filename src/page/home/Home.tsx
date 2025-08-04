import { Link } from "react-router-dom";
import { easeInOut, motion } from "motion/react";
import { useTranslation } from "react-i18next";
import Logo from "@/component/logo/Logo";
import useImagePreloader from "@/component/preloadImage/PreloadImage";
import { useEffect, useState } from "react";
import SplashScreen from "@/component/splashScreen/SplashScreen";

const Home = () => {
  const [loading, setLoading] = useState<boolean>(() => {
    // Prüfen, ob Splashscreen schon angezeigt wurde
    const hasVisited = sessionStorage.getItem("hasVisited");
    return !hasVisited; // Wenn nicht, dann true
  });

  // translation
  const { i18n } = useTranslation();
  const lang = i18n.language || "en";

  // preloading images
  const imagesToPreload = [
    "/img/aboutMe_en.svg",
    "/img/aboutMe_de.svg",
    "/img/skills&tech_en.svg",
    "/img/skills&tech_de.svg",
    "/img/Ex&Ed_en.svg",
    "/img/Ex&Ed_de.svg",
    "/img/projects_en.svg",
    "/img/projects_de.svg",
    "/img/contact_en.svg",
    "/img/contact_de.svg",
  ];

  const imagesLoaded = useImagePreloader(imagesToPreload);

  // Splashscreen Timer und localStorage setzen
  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("hasVisited", "true");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  if (!imagesLoaded)
    return <div className="text-center py-20">Loading handwritten titles...</div>;

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <motion.section
      className="flex flex-col items-center justify-center gap-10 mt-10 md:flex-row md:text-6xl md:gap-15 md:mt-20 lg:mt-10 lg:text-8xl lg:gap-25 h-full w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.4,
        ease: easeInOut,
      }}
    >
      <Logo />

      <div className="break-words text-center uppercase flex flex-col gap-3 items-center justify-center text-4xl md:items-start md:text-5xl md:gap-6 md:text-start">
        <Link
          className="cursor-pointer hover:scale-110 transition-all duration-300"
          to="aboutMe"
        >
          <img
            src={`/img/aboutMe_${lang}.svg`}
            alt="about me"
            className="h-10 md:h-16 lg:h-20"
          />
        </Link>

        <Link
          className="cursor-pointer hover:scale-110 transition-all duration-300"
          to="skills&tech"
        >
          <img
            src={`/img/skills&tech_${lang}.svg`}
            alt="skills&tech"
            className="h-12 md:h-20 lg:h-24"
          />
        </Link>

        <Link
          className="cursor-pointer hover:scale-110 transition-all duration-300"
          to="exp&edu"
        >
          <img
            src={`/img/Ex&Ed_${lang}.svg`}
            alt="experience and education"
            className="h-20 md:h-28 lg:h-36"
          />
        </Link>

        <Link
          className="cursor-pointer hover:scale-110 transition-all duration-300"
          to="projects"
        >
          <img
            src={`/img/projects_${lang}.svg`}
            alt="projects"
            className="h-12 md:h-20 lg:h-24"
          />
        </Link>

        <Link
          className="cursor-pointer hover:scale-110 transition-all duration-300"
          to="contact"
        >
          <img
            src={`/img/contact_${lang}.svg`}
            alt="contact"
            className="h-12 md:h-20 lg:h-24"
          />
        </Link>
      </div>
    </motion.section>
  );
};

export default Home;
