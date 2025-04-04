import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";

const App = () => {
  function App() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/menu" element={<MenuComponent />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
};

export default App;
