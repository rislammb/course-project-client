import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CiLight, CiDark } from "react-icons/ci";
// import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";

export default function Navabr() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  // const { username, logout } = useContext(AuthContext);
  const username = "admin";
  const logout = () => {};

  return (
    <nav
      className="navbar"
      style={{ backgroundColor: "#004052" }}
      data-bs-theme="dark"
    >
      <div
        className="container navbar-nav d-flex flex-row gap-2 align-items-center"
        style={{ paddingLeft: "0.75rem" }}
      >
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>
        <div className="d-flex gap-2 align-items-center">
          <button onClick={toggleTheme} className={"nav-link"}>
            {theme === "light" ? <CiLight size={28} /> : <CiDark size={28} />}
          </button>
          {username ? (
            <div className="d-flex gap-2 align-items-center">
              <p className="d-flex align-items-center gap-1 text-white">
                Welcome,{" "}
                <NavLink
                  to={`/user/${username}`}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  {username}
                </NavLink>
              </p>
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={logout}
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <NavLink
                to={"/login"}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Login
              </NavLink>
              <NavLink
                to={"/register"}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
