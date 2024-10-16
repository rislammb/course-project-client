import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CiLight, CiDark } from "react-icons/ci";
// import { AuthContext } from "../../context/AuthContext";
import classes from "./styles.module.css";
import { ThemeContext } from "../../context/ThemeContext";

export default function Navabr() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  // const { username, logout } = useContext(AuthContext);
  const username = null;
  const logout = () => {};

  return (
    <div className={classes.nav_container}>
      <nav className={classes.navbar}>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? classes.active_nav : classes.nav_link
          }
        >
          Home
        </NavLink>
        <div className={classes.nav_right}>
          <button onClick={toggleTheme} className={classes.theme_btn}>
            {theme === "light" ? <CiLight size={28} /> : <CiDark size={28} />}
          </button>
          {username ? (
            <>
              <p>
                Welcome,{" "}
                <NavLink
                  to={`/user/${username}`}
                  className={({ isActive }) =>
                    isActive ? classes.active_nav : classes.nav_link
                  }
                >
                  {username}
                </NavLink>
              </p>
              <button onClick={logout} className={classes.logout_btn}>
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                to={"/login"}
                className={({ isActive }) =>
                  isActive ? classes.active_nav : classes.nav_link
                }
              >
                Login
              </NavLink>
              <NavLink
                to={"/register"}
                className={({ isActive }) =>
                  isActive ? classes.active_nav : classes.nav_link
                }
              >
                Register
              </NavLink>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}