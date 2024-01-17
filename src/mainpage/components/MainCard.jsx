import React from "react";

function MainCard({ setIsOpenEdit,setIsOpenDelete }) {
  return (
    <div className="w-[560px] sm:h-[330px] border border-zinc-300 rounded-[5px] mx-[10px] my-[20px]">
      <div className="bg-[#E7E7E7] p-[30px] h-[80%]">
        <h1 className="text-xl sm:text-3xl font-bold">Card title</h1>
        <p className="my-4 text-justify text-xs sm:text-base font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          nihil possimus harum facere nesciunt tempore nobis illo enim adipisci
          repudiandae non voluptatem unde aperiam, deserunt odio alias pariatur
          iusto error numquam dolorum! Quasi id assumenda exercitationem quae
          enim, tempore amet porro quod, pariatur, nesciunt a rem libero nostrum
          aliquam dolorum!
        </p>
      </div>
      <div className="flex bg-zinc-300 justify-end h-[20%] items-center">
        <button
          className="bg-yellow-400 py-2 px-5 rounded-[5px] font-bold hover:bg-yellow-500"
          onClick={() => {
            setIsOpenEdit(true);
          }}
        >
          Edit
        </button>
        <button
          className="bg-yellow-400 py-2 px-5 rounded-[5px] font-bold mx-2 hover:bg-yellow-500"
          onClick={() => {
            setIsOpenDelete(true);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default MainCard;
