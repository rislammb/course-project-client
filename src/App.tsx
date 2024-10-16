import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navabr from "./components/navbar";
import Home from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";

function App() {
  return (
    <BrowserRouter>
      <Navabr />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
