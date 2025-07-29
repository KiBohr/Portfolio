1import { createContext, useEffect, useState } from "react";

interface MainContextProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export const mainContext = createContext<MainContextProps>({
  theme: "light",
  toggleTheme: () => {}
})

const MainProvider = ({children} : {children : React.ReactNode}) => {

  const [theme, setTheme] = useState<"light" | "dark">(() =>
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );

  //   update the DOM class whenever theme changes
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Initial aus localStorage lesen
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme && savedTheme !== theme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

    return ( 
       <mainContext.Provider value ={{theme, toggleTheme}}>
        {children}
       </mainContext.Provider>
     );
}
 
export default MainProvider;