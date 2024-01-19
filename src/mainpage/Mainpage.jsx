import { useContext, useEffect, useReducer, useState } from "react";
import Navigation from "./components/Navigation";
import MainCard from "./components/MainCard";
import CreateCard from "./components/CreateCard";
import EditCard from "./components/EditCard";
import DeleteCard from "./components/DeleteCard";
import Context from "../ContextWrapper";

const reducer = (state, action) => {
  return { modalState: (state.modalState = action.type) };
};

export default function Mainpage() {
  const [state, dispatch] = useReducer(reducer, { modalState: "" });

  const { email } = useContext(Context);

  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [activeCard, setActiveCard] = useState();

  useEffect(() => {
    setFilteredCards(cards.filter((card) => card.author === email));
  }, [cards]);

  const handleClick = (e) => {
    const { name } = e.target;

    dispatch({ type: `${name}` });
  };

  return (
    <div className={`${state.modalState ? "overflow-hidden" : ""} h-screen`}>
      <Navigation />
      <button
        name="create"
        className="bg-yellow-400 py-3 px-10 font-bold rounded-[8px] hover:bg-yellow-500 ml-[28px] sm:ml-[68px] mt-[20px]"
        onClick={handleClick}
      >
        Create card
      </button>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 px-5 sm:px-[58px]">
        {filteredCards.length ? (
          filteredCards.map((card) => (
            <MainCard
              dispatch={dispatch}
              key={card.id} // Make sure to add a unique key prop when mapping over elements
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
          <CreateCard dispatch={dispatch} email={email} setCards={setCards} />
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
