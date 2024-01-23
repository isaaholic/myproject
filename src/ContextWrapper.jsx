import { createContext, useEffect, useState } from "react";

const Context = createContext();

export default Context;

export const ContextWrapper = ({ children }) => {
  const [email, setEmail] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [darkMode,setDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

    const handleColorSchemeChange = (event) => {
      setDarkMode(event.matches);
    };

    // Add the event listener
    mediaQueryList.addEventListener("change", handleColorSchemeChange);

    // Cleanup the event listener on component unmount
    return () => {
      mediaQueryList.removeEventListener("change", handleColorSchemeChange);
    };
  }, []); // Empty dependency array means this effect runs once after initial render
  
  const contextData = {
    email: email,
    setEmail: setEmail,
    authorized: authorized,
    setAuthorized: setAuthorized,
    darkMode:darkMode,
    setDarkMode:setDarkMode
  };

  return <Context.Provider value={contextData}>{children}</Context.Provider>;
};
