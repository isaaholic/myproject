import { useState, useEffect } from "react";

function EditCard({ dispatch, setCards, activeCard }) {
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
    setCards((prevValue) =>
      prevValue.map((c) => {
        if (c.id != activeCard.id) return c;
        else {
          var updatedCard = c;
          updatedCard.title = formData.title;
          updatedCard.description = formData.description;
          return updatedCard;
        }
      })
    );
    dispatch({ type: "" });
  };

  useEffect(() => {
    setFormData(activeCard);
  }, []);

  return (
    <form
      onSubmit={onUpdate}
      action=""
      className="flex flex-col items-center h-screen w-screen sm:w-[700px] sm:h-[350px] sm:mx-7 justify-center sm:rounded-[13px] bg-white"
    >
      <div className="w-[100%]">
        <button
          className="bg-red-600 w-3 h-3 rounded-full float-right my-0 me-5"
          onClick={() => {
            dispatch({ type: "" });
          }}
        ></button>
      </div>
      <h1 className="text-3xl font-extrabold mb-5">EDIT CARD</h1>
      <div className="flex flex-col w-[80%]">
        <label htmlFor="title" className="text-zinc-600">
          Title
        </label>
        <input
          onChange={handleChange}
          name="title"
          required
          value={formData.title}
          className="border border-zinc-300 rounded-[6px] my-2 h-[40px] p-1"
        />
        <label htmlFor="description" className="text-zinc-600">
          Description
        </label>
        <input
          onChange={handleChange}
          name="description"
          required
          value={formData.description}
          className="border border-zinc-300 rounded-[6px] my-2 h-[40px] p-1"
        />
        <div className="flex justify-end h-[20%] items-center mt-[20px]">
          <button
            className="border border-zinc-300 py-2 px-5 rounded-[10px] font-bold hover:bg-[#DFDFDF]"
            onClick={() => {
              dispatch({ type: "" });
            }}
          >
            Close
          </button>
          <button
            type="submit"
            className="bg-yellow-400 py-2 px-5 rounded-[10px] font-bold ms-2 hover:bg-[#F6AB1A]"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}

export default EditCard;
