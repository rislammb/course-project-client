import { NavLink } from "react-router-dom";
import { CiLight, CiDark } from "react-icons/ci";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { toggleThemeMode } from "../../store/theme-slice";
import { logout } from "../../store/auth-slice";
import { useTranslation } from "react-i18next";

const languages = ["EN", "BN", "ES"];

export default function Navabr() {
  const {
    theme: { mode },
    auth: { user },
  } = useAppSelector((state) => state);
  const { t, i18n } = useTranslation();
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
          {t("home")}
        </NavLink>
        <div className="d-flex gap-2 align-items-center">
          {languages.map((lan) => (
            <button
              key={lan}
              data-bs-theme="dark"
              className="btn btn-sm"
              onClick={() => i18n.changeLanguage(lan)}
              disabled={i18n.resolvedLanguage === lan}
            >
              {lan}
            </button>
          ))}
          <button
            onClick={() => dispatch(toggleThemeMode())}
            className={"nav-link"}
          >
            {mode === "light" ? <CiLight size={28} /> : <CiDark size={28} />}
          </button>
          {user?.email ? (
            <div className="d-flex gap-2 align-items-center">
              <p className="d-flex align-items-center gap-1 text-white">
                {t("welcome")},
                <NavLink
                  to={`/user/${user.id}`}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  {user.email?.split("@")[0]}
                </NavLink>
              </p>
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => dispatch(logout())}
              >
                {t("logout")}
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
                {t("login")}
              </NavLink>
              <NavLink
                to={"/register"}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {t("register")}
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
