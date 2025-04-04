import React from "react";
import Logo from "./Logo.jsx";

const Home = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-white to-amber-50">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-lg p-8 sm:p-10 space-y-6 flex flex-col items-center text-center">
        <Logo />

        <h1 className="text-2xl font-extrabold text-amber-600 font-Boldonse">
          Bienvenue sur Adalicious !
        </h1>

        <label htmlFor="name" className="text-sm text-gray-600">
          Pour commencer, peux-tu me donner ton prénom :
        </label>

        <input
          id="name"
          type="text"
          placeholder="Ton prénom"
          className="w-full border border-amber-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300 placeholder-gray-400"
        />

        <button
          type="submit"
          className="bg-green-800 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
        >
          Valider
        </button>
      </div>
    </div>
  );
};

export default Home;
