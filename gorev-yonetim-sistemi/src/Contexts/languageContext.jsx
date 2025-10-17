import { createContext, useState, useContext, useEffect } from "react";

const LanguageKey = "Language";

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const storedLanguage = localStorage.getItem(LanguageKey);

    return storedLanguage || "en";
  });

  useEffect(() => {
    localStorage.setItem(LanguageKey, language);
  });

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export { LanguageContext, LanguageProvider, useLanguage };
