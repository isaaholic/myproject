import { useState, useEffect, useContext } from "react";
import Context from "../../ContextWrapper";
import axios from "axios";

function EditCard({ dispatch, setCards, activeCard }) {
  const { darkMode,api } = useContext(Context);

  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const onUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`${api}/cards/${activeCard._id}`, {
        title: formData.title,
        description: formData.description,
      })
      .then((res) => {
        axios.get(`${api}/cards/${activeCard.author}`).then((res) => {
          setCards(res.data);
        });
        dispatch({ type: "" });
      });
  };

  useEffect(() => {
    setFormData(activeCard);
  }, []);

  return (
    <form
      onSubmit={onUpdate}
      action=""
      className={`${
        darkMode ? "bg-slate-900" : "bg-white"
      } flex flex-col items-center sm:w-[700px] h-screen w-screen sm:h-[350px]  sm:mx-7 justify-center sm:rounded-[13px] `}
    >
      <div className="w-[100%]">
        <button
          className="bg-red-600 w-3 h-3 rounded-full float-right my-0 me-5"
          onClick={() => {
            dispatch({ type: "" });
          }}
        ></button>
      </div>
      <h1
        className={`${
          darkMode ? "text-slate-200" : ""
        } text-3xl font-extrabold mb-5`}
      >
        EDIT CARD
      </h1>
      <div className="flex flex-col w-[80%]">
        <label
          htmlFor="title"
          className={`${darkMode ? "text-slate-200" : "text-zinc-600"}`}
        >
          Title
        </label>
        <input
          onChange={handleChange}
          name="title"
          required
          value={formData.title}
          className={`${
            darkMode ? "text-slate-900" : ""
          } border border-zinc-300 rounded-[6px] my-2 h-[40px] p-1`}
        />
        <label
          htmlFor="description"
          className={`${darkMode ? "text-slate-200" : "text-zinc-600"}`}
        >
          Description
        </label>
        <input
          onChange={handleChange}
          name="description"
          required
          value={formData.description}
          className={`${
            darkMode ? "text-slate-900" : ""
          } border border-zinc-300 rounded-[6px] my-2 h-[40px] p-1`}
        />
        <div className="flex justify-end h-[20%] items-center mt-[20px]">
          <button
            className={`${
              darkMode
                ? "border border-slate-700 hover:bg-slate-800"
                : "border border-zinc-300 hover:bg-[#DFDFDF]"
            } py-2 px-5 rounded-[10px] font-bold `}
            onClick={() => {
              dispatch({ type: "" });
            }}
          >
            Close
          </button>
          <button
            type="submit"
            className={`${
              darkMode
                ? "bg-slate-600 hover:bg-slate-700 text-white"
                : "bg-yellow-400 hover:bg-yellow-500"
            } py-2 px-5 rounded-[10px] font-bold ms-2`}
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}

export default EditCard;
