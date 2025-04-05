import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo.jsx";

const Home = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/menu", { state: { name } });
  };
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-white to-amber-50">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-lg p-8 sm:p-10 space-y-6 flex flex-col items-center text-center">
        <Logo />

        <h1 className="text-2xl font-extrabold text-amber-600 font-Boldonse">
          Bienvenue sur Adalicious !
        </h1>

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center space-y-4"
        >
          <label htmlFor="name" className="text-sm text-gray-600">
            Pour commencer, peux-tu me donner ton prénom :
          </label>
          <input
            name="name"
            value={name}
            onChange={handleChange}
            type="text"
            placeholder="prénom..."
            className="w-full border border-amber-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300 placeholder-gray-400"
          />

          <button
            type="submit"
            className="bg-green-800 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          >
            Valider
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
