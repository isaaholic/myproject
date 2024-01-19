import { useContext } from "react";
import Context from "../../ContextWrapper";

function Navigation() {
  const { email, setAuthorized } = useContext(Context);

  return (
    <nav className="flex bg-[#E7E7E7] h-[121px] items-center justify-between">
      <p className="font-bold text-md sm:text-xl ml-[10px] sm:ml-[68px]">
        {email}
      </p>
      <button
        onClick={() => {
          setAuthorized(false);
        }}
        className="bg-yellow-400 py-3 px-10 font-bold rounded-[8px] mr-[10px] sm:mr-[68px] hover:bg-yellow-500"
      >
        Log out
      </button>
    </nav>
  );
}

export default Navigation;
