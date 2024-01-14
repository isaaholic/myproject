import { useState } from "react";
import Navigation from "./components/Navigation";
import MainCard from "./components/MainCard";
import CreateCard from "./components/CreateCard";
import EditCard from "./components/EditCard";
import DeleteCard from "./components/DeleteCard";

export default function Mainpage({ email, setAuthorized }) {
  const [isOpenCreate, setIsOpenCreate] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);

  return (
    <>
      <Navigation email={email} setAuthorized={setAuthorized} />
      <button
        className="bg-yellow-400 py-3 px-10 font-bold rounded-[8px] hover:bg-yellow-500 ml-[68px] mt-[20px]"
        onClick={() => {
          setIsOpenCreate(true);
        }}
      >
        Create card
      </button>
      <div className="flex flex-wrap px-[58px]">
        <MainCard
          setIsOpenDelete={setIsOpenDelete}
          setIsOpenEdit={setIsOpenEdit}
        />
        <MainCard
          setIsOpenDelete={setIsOpenDelete}
          setIsOpenEdit={setIsOpenEdit}
        />
        <MainCard
          setIsOpenDelete={setIsOpenDelete}
          setIsOpenEdit={setIsOpenEdit}
        />
        <MainCard
          setIsOpenDelete={setIsOpenDelete}
          setIsOpenEdit={setIsOpenEdit}
        />
        <MainCard
          setIsOpenDelete={setIsOpenDelete}
          setIsOpenEdit={setIsOpenEdit}
        />
      </div>

      {isOpenCreate && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <CreateCard setIsOpenCreate={setIsOpenCreate} />
        </div>
      )}
      {isOpenEdit && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <EditCard setIsOpenEdit={setIsOpenEdit} />
        </div>
      )}
      {isOpenDelete && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <DeleteCard setIsOpenDelete={setIsOpenDelete} />
        </div>
      )}
    </>
  );
}
