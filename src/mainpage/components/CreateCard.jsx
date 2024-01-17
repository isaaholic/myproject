import React from "react";

function CreateCard({ setIsOpenCreate }) {
  return (
    <form
      action=""
      className="flex flex-col items-center sm:w-[700px] h-screen w-screen sm:h-[350px]  sm:mx-7 justify-center sm:rounded-[13px] bg-white"
    >
      <div className="w-[100%]">
        <button
          className="bg-red-600 w-3 h-3 rounded-full float-right my-0 me-5"
          onClick={() => {
            setIsOpenCreate(false);
          }}
        ></button>
      </div>
      <h1 className="text-3xl font-extrabold mb-5">CREATE CARD</h1>
      <div className="flex flex-col w-[80%]">
        <label htmlFor="" className="text-zinc-600">
          Title
        </label>
        <input
          required
          className="border border-zinc-300 rounded-[6px] my-2 h-[40px] p-1"
        />
        <label htmlFor="" className="text-zinc-600">
          Description
        </label>
        <input
          required
          className="border border-zinc-300 rounded-[6px] my-2 h-[40px] p-1"
        />
        <div className="flex justify-end h-[20%] items-center mt-[20px]">
          <button
            className="border border-zinc-300 py-2 px-5 rounded-[10px] font-bold hover:bg-[#DFDFDF]"
            onClick={() => {
              setIsOpenCreate(false);
            }}
          >
            Close
          </button>
          <button className="bg-yellow-400 py-2 px-5 rounded-[10px] font-bold ms-2 hover:bg-[#F6AB1A]">
            Create
          </button>
        </div>
      </div>
    </form>
  );
}

export default CreateCard;
