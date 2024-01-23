import { useContext } from "react";
import Context from "../../ContextWrapper";

function Navigation() {
  const { email, setAuthorized,darkMode } = useContext(Context);

  return (
    <nav className={`${darkMode?"bg-slate-900 text-white":"bg-[#E7E7E7] text-black"} flex h-[121px] items-center justify-between transition-all duration-500 ease-in-out`}>
      <p className="font-bold text-md sm:text-xl ml-[10px] sm:ml-[68px]">
        {email}
      </p>
      <button
        onClick={() => {
          setAuthorized(false);
        }}
        className={`${darkMode?"bg-slate-600 hover:bg-slate-700 text-white":"bg-yellow-400 hover:bg-yellow-500 text-black"} py-3 px-10 font-bold rounded-[8px] mr-[10px] sm:mr-[68px] transition-all duration-500 ease-in-out`}
      >
        Log out
      </button>
    </nav>
  );
}

export default Navigation;
