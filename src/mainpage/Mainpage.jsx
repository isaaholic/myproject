import { useContext, useState } from "react";
import Navigation from "./components/Navigation";
import MainCard from "./components/MainCard";
import CreateCard from "./components/CreateCard";
import EditCard from "./components/EditCard";
import DeleteCard from "./components/DeleteCard";
import Context from "../ContextWrapper";
import { useParams } from "react-router-dom";

export default function Mainpage() {
  const { darkMode, setDarkMode, api, state, dispatch, cards, setCards } =
    useContext(Context);

  const { email } = useParams();

  const [activeCard, setActiveCard] = useState();

  const handleClick = (e) => {
    const { name } = e.target;

    dispatch({ type: `${name}` });
  };

  return (
    <div
      className={`${state.modalState ? "overflow-hidden" : ""} ${
        darkMode ? "bg-slate-800 text-white" : "text-black"
      } min-h-screen transition-all duration-500 ease-in-out`}
    >
      <Navigation />
      <div className="flex items-center justify-between">
        <button
          name="create"
          className={`${
            darkMode
              ? "bg-slate-600 hover:bg-slate-700 text-white"
              : "bg-yellow-400 hover:bg-yellow-500 text-black"
          } py-3 px-10 font-bold rounded-[8px]  mx-[14px] sm:ml-[68px] mt-[20px] transition-all duration-500 ease-in-out`}
          onClick={handleClick}
        >
          Create card
        </button>
        <button
          onClick={() => {
            setDarkMode((prevValue) => !prevValue);
          }}
          className={`${
            darkMode
              ? "bg-slate-100 text-black hover:bg-slate-200"
              : "bg-slate-800 text-white hover:bg-slate-900"
          } py-3 px-10 font-bold rounded-[8px] mx-[14px] sm:mr-[68px] mt-[20px] transition-all duration-500 ease-in-out`}
        >
          {darkMode ? "Light Mode?" : "Dark Mode?"}
        </button>
      </div>
      <div className="flex justify-center my-5 mx-[14px]">
        <p>Route Email: {email}</p>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 px-5 sm:px-[58px]">
        {cards.length ? (
          cards.map((card, key) => (
            <MainCard
              dispatch={dispatch}
              key={key}
              card={card}
              setActiveCard={setActiveCard}
            />
          ))
        ) : (
          <p className="text-center col-span-3 mt-10">No cards found</p>
        )}
      </div>

      {state.modalState === "create" && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <CreateCard dispatch={dispatch} setCards={setCards} />
        </div>
      )}
      {state.modalState === "edit" && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <EditCard
            dispatch={dispatch}
            setCards={setCards}
            activeCard={activeCard}
          />
        </div>
      )}
      {state.modalState === "delete" && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <DeleteCard
            dispatch={dispatch}
            setCards={setCards}
            activeCard={activeCard}
          />
        </div>
      )}
    </div>
  );
}
