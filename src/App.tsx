import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAppDispatch } from "./hooks";
import { setThemeMode } from "./store/theme-slice";
import Navabr from "./components/navbar";
import Home from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";
import "./App.css";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const localTheme = window.localStorage.getItem("color-theme");
    if (localTheme && localTheme === "light") {
      dispatch(setThemeMode("light"));
    } else {
      dispatch(setThemeMode("dark"));
    }
  }, [dispatch]);

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
