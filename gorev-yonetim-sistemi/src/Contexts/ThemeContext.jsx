// import { createContext, useState, useContext, useEffect } from "react";

// const ThemeContext = createContext();

// const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState("light");

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
//   };

//   // body etiketine tema sınıfını eklemek için
//   useEffect(() => {
//     document.body.className = theme;
//   }, [theme]);

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// const useTheme = () => {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error("useTheme must be used within a ThemeProvider");
//   }
//   return context;
// };

// export { ThemeProvider, useTheme };

import { createContext, useState, useContext, useEffect } from "react";

const ThemeKey = "Theme";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "light";
    }
    return localStorage.getItem(ThemeKey) || "light";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(ThemeKey, theme);
      document.body.className = theme;
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { ThemeContext, ThemeProvider, useTheme };
