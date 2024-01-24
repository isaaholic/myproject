import { useState, useRef, useEffect, useContext } from "react";
import Context from "../../ContextWrapper";
import { useNavigate } from 'react-router-dom';

function LoginCard() {
  const { email, setEmail, setAuthorized, darkMode } = useContext(Context);

  const navigate = useNavigate();

  const [isValid, setIsValid] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    setIsValid(inputRef.current.value.includes("@"));
  }, []);

  return (
    <form
      action=""
      className={`${
        darkMode ? "bg-slate-800 text-white shadow-slate-600" : "text-black shadow-zinc-300"
      } flex flex-col items-center h-screen w-screen sm:w-[700px] sm:h-[310px] shadow-md justify-center sm:rounded-[13px]`}
    >
      <h1
        className={`${
          darkMode ? "text-slate-200" : ""
        } text-3xl font-bold mb-5`}
      >
        LOGIN FORM
      </h1>
      <div className="flex flex-col">
        <label
          className={`${darkMode ? "text-slate-200" : "text-zinc-600"}`}
          htmlFor=""
        >
          Email:
        </label>
        <input
          ref={inputRef}
          onChange={(e) => {
            setEmail(e.target.value);
            setIsValid(e.target.checkValidity());
          }}
          required
          value={email}
          type="email"
          className={`${
            darkMode ? "text-slate-900" : ""
          } px-2 py-0.5 border border-zinc-300 rounded-[6px] my-2`}
        />
      </div>

      <button
        onClick={() => {
          isValid ? setAuthorized(true) : null;
          navigate('/')
        }}
        className={`${
          isValid
            ?(darkMode?"bg-slate-600 hover:bg-slate-700 text-white":"bg-yellow-500 hover:bg-yellow-700")
            : "bg-[#D7D7D7] pointer-events-none"
        } py-2 px-4 rounded-[10px]`}
        type="submit"
        disabled={!isValid}
      >
        Submit
      </button>
    </form>
  );
}

export default LoginCard;
