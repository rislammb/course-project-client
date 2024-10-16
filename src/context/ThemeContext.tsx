import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";

const defaultValue = {
  theme: "light",
  toggleTheme: () => {},
};

export const ThemeContext = createContext(defaultValue);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = useCallback(() => {
    const toggleTheme = theme === "light" ? "dark" : "light";
    setTheme(toggleTheme);
    window.localStorage.setItem("theme", toggleTheme);
  }, [theme]);

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme) setTheme(localTheme);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
