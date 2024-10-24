import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAppDispatch } from "./hooks";
import { setThemeMode } from "./store/theme-slice";
import Navabr from "./components/navbar";
import Home from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";
import "./App.css";
import { OpenRoute } from "./components/route-controller";
import { getToken } from "./utils/storage";
import { setAuthUser } from "./store/auth-slice";
import { getLoggedUser } from "./services/authService";

function App() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const localTheme = window.localStorage.getItem("color-theme");
    if (localTheme && localTheme === "light") {
      dispatch(setThemeMode("light"));
    } else {
      dispatch(setThemeMode("dark"));
    }
  }, [dispatch]);

  const fetchUserInfo = async () => {
    const token = getToken();
    if (token) {
      try {
        const res = await getLoggedUser();
        dispatch(setAuthUser(res.data));
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return loading ? (
    <p>Loading...</p>
  ) : (
    <BrowserRouter>
      <Navabr />
      <Routes>
        <Route path="/register" element={<OpenRoute component={Register} />} />
        <Route path="/login" element={<OpenRoute component={Login} />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
