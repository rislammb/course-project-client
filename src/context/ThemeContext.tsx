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
    document.body.setAttribute("data-bs-theme", newTheme);
    window.localStorage.setItem("color-theme", newTheme);
  }, [theme]);

  useEffect(() => {
    const localTheme = window.localStorage.getItem("color-theme");
    if (localTheme && localTheme === "light") {
      setTheme("light");
      document.body.setAttribute("data-bs-theme", "light");
    } else {
      setTheme("dark");
      document.body.setAttribute("data-bs-theme", "dark");
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
