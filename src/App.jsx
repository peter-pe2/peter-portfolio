import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandPage from "./components/LandPage";
import Home from "./components/home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
