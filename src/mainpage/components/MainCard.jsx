import React, { useContext } from "react";
import Context from "../../ContextWrapper";

function MainCard({ dispatch, setActiveCard, card }) {
  const { darkMode } = useContext(Context);

  return (
    <div
      className={`${
        darkMode ? "border border-slate-900" : "border border-zinc-300"
      } w-max-[560px] sm:h-max-[330px] rounded-[5px] mx-[10px] my-[20px] transition-all duration-500 ease-in-out`}
    >
      <div
        className={`${
          darkMode ? "bg-slate-900 text-white" : "bg-[#E7E7E7] text-black"
        } p-[30px] h-[70%] transition-all duration-500 ease-in-out`}
      >
        <h1 className="text-xl sm:text-3xl font-bold">{card.title}</h1>
        <p className="my-4 text-justify text-xs sm:text-base font-medium">
          {card.description}
        </p>
      </div>
      <div
        className={`${
          darkMode ? "bg-slate-950 text-white" : "bg-[#E7E7E7] text-black"
        }  flex bg-zinc-300 justify-end h-[30%] items-center transition-all duration-500 ease-in-out`}
      >
        <button
          className={`${
            darkMode
              ? "bg-slate-600 hover:bg-slate-700 text-white"
              : "bg-yellow-400 hover:bg-yellow-500 text-black"
          } py-2 px-5 rounded-[5px] font-bold transition-all duration-500 ease-in-out`}
          onClick={() => {
            setActiveCard(card);
            dispatch({ type: "edit" });
          }}
        >
          Edit
        </button>
        <button
          className={`${
            darkMode
              ? "bg-slate-600 hover:bg-slate-700 text-white"
              : "bg-yellow-400 hover:bg-yellow-500 text-black"
          } py-2 px-5 rounded-[5px] font-bold mx-2 transition-all duration-500 ease-in-out`}
          onClick={() => {
            setActiveCard(card);
            dispatch({ type: "delete" });
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default MainCard;
