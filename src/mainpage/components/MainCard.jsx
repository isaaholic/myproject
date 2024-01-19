import React from "react";

function MainCard({ dispatch,setActiveCard, card }) {
  return (
    <div className="w-max-[560px] sm:h-max-[330px] border border-zinc-300 rounded-[5px] mx-[10px] my-[20px]">
      <div className="bg-[#E7E7E7] p-[30px] h-[80%]">
        <h1 className="text-xl sm:text-3xl font-bold">{card.title}</h1>
        <p className="my-4 text-justify text-xs sm:text-base font-medium">
          {card.description}
        </p>
      </div>
      <div className="flex bg-zinc-300 justify-end h-[30%] items-center">
        <button
          className="bg-yellow-400 py-2 px-5 rounded-[5px] font-bold hover:bg-yellow-500"
          onClick={() => {
            setActiveCard(card);
            dispatch({type:"edit"})
          }}
        >
          Edit
        </button>
        <button
          className="bg-yellow-400 py-2 px-5 rounded-[5px] font-bold mx-2 hover:bg-yellow-500"
          onClick={() => {
            setActiveCard(card);
            dispatch({type:"delete"})
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default MainCard;
