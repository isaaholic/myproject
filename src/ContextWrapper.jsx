import { createContext, useState } from "react";

const Context = createContext();

export default Context;

export const ContextWrapper = ({ children }) => {
  const [email, setEmail] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [darkMode,setDarkMode] = useState(false);

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
