import { createContext, useEffect, useState, useReducer } from "react";
import axios from "axios";

const Context = createContext();

const reducer = (state, action) => {
  return { modalState: (state.modalState = action.type) };
};

export default Context;

export const ContextWrapper = ({ children }) => {
  const [email, setEmail] = useState(sessionStorage.getItem("email"));
  const [authorized, setAuthorized] = useState(
    sessionStorage.getItem("authorized")
  );
  const [darkMode, setDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [state, dispatch] = useReducer(reducer, { modalState: "" });
  const [cards, setCards] = useState([]);
  const api = "http://localhost:3000";

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

  useEffect(() => {
    if (email) {
      axios.get(`${api}/cards/${email}`).then((res) => {
        setCards(res.data);
      });
    }
  }, [email]);

  useEffect(() => {
    sessionStorage.setItem("authorized", authorized);
    if (authorized === true) sessionStorage.setItem("email", email);
  }, [authorized]);

  const contextData = {
    email: email,
    setEmail: setEmail,
    authorized: authorized,
    setAuthorized: setAuthorized,
    darkMode: darkMode,
    setDarkMode: setDarkMode,
    state: state,
    dispatch: dispatch,
    cards: cards,
    setCards: setCards,
    api: api,
  };

  return <Context.Provider value={contextData}>{children}</Context.Provider>;
};
