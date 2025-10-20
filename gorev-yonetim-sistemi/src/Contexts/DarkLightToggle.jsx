import React from "react";
import { useTheme } from "./ThemeContext";
import "../css/DarkLightToggle.css";

const DarkLightToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-switcher">
      <label className="switch">
        <input type="checkbox" onChange={toggleTheme} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default DarkLightToggle;
