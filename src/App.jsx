import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
