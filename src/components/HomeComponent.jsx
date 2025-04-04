import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo.jsx";

const HomeComponent = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/menu", { state: { name } });

    console.log(name);
  };

  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="flex justify-center items-center flex-col w-90 h-3/4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 space-y-6">
          <Logo />
          <h1 className="font-bold text-xl">Bienvenue sur Adalicious !</h1>

          <label htmlFor="name" className="text-sm">
            Pour commencer, peux-tu me donner ton prénom :
          </label>
          <input
            type="text"
            className="border border-amber-400 m-2 rounded-md p-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="text-white bg-green-800 hover:bg-green-700 focus:ring-2 focus:outline-none focus:ring-green-400 font-medium rounded-lg text-sm px-7 py-1.5 text-center"
          >
            Valider
          </button>
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
