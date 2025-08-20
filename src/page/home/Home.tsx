import { easeInOut, motion } from "motion/react";
import Logo from "@/component/logo/Logo";
import { useEffect, useState } from "react";
import SplashScreen from "@/component/splashScreen/SplashScreen";
import NavHome from "@/component/navHome/NavHome";

const Home = () => {
  const [loading, setLoading] = useState<boolean>(() => {
    // Prüfen, ob Splashscreen schon angezeigt wurde
    const hasVisited = sessionStorage.getItem("hasVisited");
    return !hasVisited; // Wenn nicht, dann true
  });

  
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

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <motion.section
      className="flex flex-col items-center justify-center max-w-full gap-10  md:flex-row md:text-6xl md:gap-15 mt-10 md:mt-0  lg:text-8xl lg:gap-25 h-full w-full"
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

        <NavHome
          to="aboutMe"
          src="/img/aboutMe_" 
          alt="about me"
          styling = "flex-wrap h-10 md:h-16 md:flex-nowrap lg:h-20"
        />

        <NavHome
          to = "skills&tech"
          src="/img/skills&tech_" 
          alt="skills&tech"
          styling="h-12 md:h-20 lg:h-24"
        />

        <NavHome
          to = "exp&edu"
          src="/img/Ex&Ed_" 
          alt="experience and education"
          styling="h-20 md:h-28 lg:h-36"
        />

        <NavHome
          to = "projects"
          src="/img/projects_" 
          alt="projects"
          styling="h-12 md:h-20 lg:h-24"
        />

        <NavHome
          to = "contact"
          src="/img/contact_" 
          alt="contact"
          styling="h-12 md:h-20 lg:h-24"
        />

      </div>
    </motion.section>
  );
};

export default Home;
