import { createContext, useCallback, useEffect, useState } from "react";

interface ThemeContextProps {
  theme: string;
  toggleTheme: () => void;
}

const defaultValue = {
  theme: "dark",
  toggleTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextProps>(defaultValue);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<string>("dark");

  const toggleTheme = useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    window.localStorage.setItem("color-theme", newTheme);
  }, [theme]);

  useEffect(() => {
    const localTheme = window.localStorage.getItem("color-theme");
    if (localTheme && localTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
