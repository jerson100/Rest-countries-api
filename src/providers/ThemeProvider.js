import { createContext } from "react";

const ThemeChangeContext = createContext();

const ThemeChangeProvider = ({ children, theme, setTheme }) => {
  const handleChange = () => {
    setTheme((previousTheme) => (previousTheme === "DARK" ? "LIGHT" : "DARK"));
  };

  return (
    <ThemeChangeContext.Provider value={{ theme, handleChange }}>
      {children}
    </ThemeChangeContext.Provider>
  );
};

export { ThemeChangeProvider, ThemeChangeContext };
