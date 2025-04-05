import { React, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
  const location = useLocation();
  const navigate = useNavigate();

  const { name } = location.state || {};

  // const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    if (!name) {
      navigate("/");
    }
  }, [name, navigate]);

  // useEffect(() => {
  //   fetch("http://localhost:3000/menu")
  //     .then((response) => response.json())
  //     .then((data) => setMenuItems(data))
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);

  if (!name) {
    return null;
  }
  return (
    <div className="bg-gradient-to-br from-white to-amber-50 border border-gray-200 rounded-2xl shadow-md m-6 p-6 space-y-6">
      <div className="flex justify-center">
        <Logo />
      </div>

      <h1 className="text-2xl font-extrabold text-amber-600 text-center font-Boldonse">
        Bienvenue sur Adalicious {name}!
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-transform hover:scale-105"
          >
            <span className="text-6xl">{item.image}</span>
            <h2 className="text-xl font-semibold mt-4">{item.plate}</h2>
            <p className="text-gray-500 mt-2">{item.description}</p>
            <button className="mt-4 bg-green-800 hover:bg-green-700 text-white text-sm font-medium py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
              Commander
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
