import React, { createContext, useState } from "react";

const ColorChangeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ColorChangeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ColorChangeContext.Provider>
  );
};

export { ThemeContextProvider, ColorChangeContext };
