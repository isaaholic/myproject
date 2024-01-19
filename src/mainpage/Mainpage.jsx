import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import MainCard from "./components/MainCard";
import CreateCard from "./components/CreateCard";
import EditCard from "./components/EditCard";
import DeleteCard from "./components/DeleteCard";
import Form from "./components/Form";

export default function Mainpage({ email, setAuthorized }) {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [openedModal, setOpenedModal] = useState("");
  const [activeCard, setActiveCard] = useState();

  useEffect(() => {
    setFilteredCards(cards.filter((card) => card.author === email));
  }, [cards]);

  return (
    <div className={`${openedModal ? "overflow-hidden" : ""} h-screen`}>
      <Navigation email={email} setAuthorized={setAuthorized} />
      <button
        className="bg-yellow-400 py-3 px-10 font-bold rounded-[8px] hover:bg-yellow-500 ml-[20px] sm:ml-[68px] mt-[20px]"
        onClick={() => {
          setOpenedModal("create");
        }}
      >
        Create card
      </button>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 px-5 sm:px-[58px]">
        {filteredCards.length ? (
          filteredCards.map((card) => (
            <MainCard
              key={card.id} // Make sure to add a unique key prop when mapping over elements
              card={card}
              setActiveCard={setActiveCard}
              setOpenedModal={setOpenedModal}
            />
          ))
        ) : (
          <p className="text-center col-span-3 mt-10">No cards found</p>
        )}
      </div>

      {openedModal === "create" && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <CreateCard
            email={email}
            setCards={setCards}
            setOpenedModal={setOpenedModal}
          />
        </div>
      )}
      {openedModal === "edit" && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <EditCard
            setCards={setCards}
            activeCard={activeCard}
            setOpenedModal={setOpenedModal}
          />
        </div>
      )}
      {openedModal === "delete" && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <DeleteCard
            setCards={setCards}
            activeCard={activeCard}
            setOpenedModal={setOpenedModal}
          />
        </div>
      )}
      {/* <Form /> */}
    </div>
  );
}
