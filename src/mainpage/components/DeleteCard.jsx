import React from "react";

function DeleteCard({ setIsOpenDelete }) {
  return (
    <form
      action=""
      className="flex flex-col items-center w-[700px] h-[200px] mx-7 justify-center rounded-[13px] bg-white"
    >
      <div className="w-[100%]">
        <button
          className="bg-red-600 w-3 h-3 rounded-full float-right my-0 me-5"
          onClick={() => {
            setIsOpenDelete(false);
          }}
        ></button>
      </div>
      <h1 className="text-3xl font-extrabold mb-5">DELETE CARD</h1>
      <label htmlFor="" className="text-zinc-600">
        Are you sure you want to delete card “Card name”?
      </label>
      <div className="flex justify-center h-[20%] items-center mt-[20px]">
        <button
          className="border border-zinc-300 py-2 px-5 rounded-[10px] font-bold hover:bg-[#DFDFDF]"
          onClick={() => {
            setIsOpenDelete(false);
          }}
        >
          Close
        </button>
        <button className="bg-yellow-400 py-2 px-5 rounded-[10px] font-bold mx-2 hover:bg-[#F6AB1A]">
          Delete
        </button>
      </div>
    </form>
  );
}

export default DeleteCard;