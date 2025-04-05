import { React, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo";

const Menu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name } = location.state || {};

  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/menu")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        return response.json();
      })
      .then((data) => setMenu(data.result.rows))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (!name) {
      navigate("/");
    }
  }, [name, navigate]);

  if (!name) {
    return null;
  }

  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-sm m-6 p-4">
      <div className="m-2">
        <Logo />
      </div>

      <h1 className="p-5 font-bold text-2xl text-amber-500 bg-green-800 text-center rounded font-Boldonse mt-2 mb-4">
        Bienvenue sur Adalicious {name} !
      </h1>

      <div className="container mx-auto mt-20">
        {/* Grid de cartes responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {menu.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-green-800 rounded-lg p-4 shadow-lg flex flex-col items-center space-y-4"
            >
              <img
                src={item.image}
                alt={item.plate}
                className="rounded border border-amber-500 h-50 w-50 object-cover"
              />

              <h2 className="text-xl font-bold mt-2 text-amber-600">
                {item.plate}
              </h2>
              <p className="text-gray-600 text-center mt-1">
                {item.description}
              </p>

              {/* Ajout de mt-auto pour que le bouton reste en bas */}
              <button className="text-amber-300 bg-green-800 hover:bg-green-700 focus:ring-2 focus:outline-none focus:ring-green-400 font-medium rounded-lg text-sm px-7 py-1.5 text-center mt-auto">
                Commander
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
