import { NavLink } from "react-router-dom";
import { CiLight, CiDark } from "react-icons/ci";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { toggleThemeMode } from "../../store/theme-slice";
import { logout } from "../../store/auth-slice";

export default function Navabr() {
  const {
    theme: { mode },
    auth: { user },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

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
          <button
            onClick={() => dispatch(toggleThemeMode())}
            className={"nav-link"}
          >
            {mode === "light" ? <CiLight size={28} /> : <CiDark size={28} />}
          </button>
          {user?.name ? (
            <div className="d-flex gap-2 align-items-center">
              <p className="d-flex align-items-center gap-1 text-white">
                Welcome,{" "}
                <NavLink
                  to={`/user/${user}`}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  {user.name}
                </NavLink>
              </p>
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => logout()}
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
