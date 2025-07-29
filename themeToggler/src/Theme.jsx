import React, { useContext } from "react";
import { ColorChangeContext } from "./ThemeContextProvider";

function Theme() {
  const { theme, toggleTheme } = useContext(ColorChangeContext);

  const styles = {
    backgroundColor: theme === "light" ? "#fff" : "#222",
    color: theme === "light" ? "#000" : "#fff",
    minHeight: "100vh",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={styles}>
      <h1>Hello, the current theme is {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default Theme;
