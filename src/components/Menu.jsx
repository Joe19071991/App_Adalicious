import React from "react";
import Logo from "./Logo";
const menuItems = [
  {
    plate: "Hello World Burger",
    description:
      "Un cheeseburger classique (pain, steak, fromage, salade, sauce).",
    image: "🍔",
  },
  {
    plate: "404 Not Found Fries",
    description:
      "Des frites maison avec une sauce mystère (choisie aléatoirement par le backend !).",
    image: "🍟",
  },
  {
    plate: "JSON Nuggets",
    description:
      "Nuggets de poulet avec 3 sauces au choix (ketchup, mayo, barbecue).",
    image: "🍗",
  },
  {
    plate: "Git Pull Tacos",
    description: "Un taco simple avec poulet, salade, fromage et sauce.",
    image: "🌮",
  },
  {
    plate: "Front-end Salad",
    description: "Une salade légère avec tomates, feta et vinaigrette maison.",
    image: "🥗",
  },
  {
    plate: "Back-End Brownie",
    description: "Un brownie moelleux au chocolat.",
    image: "🍫",
  },
  {
    plate: "Full Stack Menu",
    description: "Un combo burger, frites et boisson.",
    image: "🥗",
  },
];

const Menu = () => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-sm  m-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 ">
      <Logo />
      <h1 className="font-bold text-xl text-amber-600 text-center font-Boldonse">
        Bienvenue sur Adalicious {name}!
      </h1>

      {menuItems.map((item, index) => (
        <div
          key={index}
          className="bg-white border border-gray-300 rounded-lg p-4 shadow-lg flex flex-col items-center m-8 space-y-4 "
        >
          <span className="text-5xl">{item.image}</span>
          <h2 className="text-xl font-bold mt-2">{item.plate}</h2>
          <p className="text-gray-600 text-center mt-1">{item.description}</p>
          <button className="text-white bg-green-800 hover:bg-green-700 focus:ring-2 focus:outline-none focus:ring-green-400  font-medium rounded-lg text-sm px-7 py-1.5 text-center">
            Commander
          </button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
