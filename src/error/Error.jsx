import React, { useContext } from "react";
import Context from "../ContextWrapper";
import { Link } from "react-router-dom";

export default function Error() {
  const { darkMode } = useContext(Context);
  return (
    <div
      className={`${
        darkMode ? "bg-slate-900" : "bg-white"
      } flex flex-col justify-center items-center h-screen text-center`}
    >
      <h1 className="mb-4 text-6xl font-semibold text-red-500">404</h1>
      <p
        className={`${darkMode ? "text-white" : "text-gray-600"} mb-4 text-lg `}
      >
        Oops! Looks like you're lost.
      </p>
      <div className="animate-bounce">
        <svg
          className="mx-auto h-16 w-16 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          ></path>
        </svg>
      </div>
      <p class={`${darkMode ? "text-white" : "text-gray-600"} mt-4`}>
        Let's get you back{" "}
        <Link to="/" class="text-blue-500">
          home
        </Link>
        .
      </p>
    </div>
  );
}
