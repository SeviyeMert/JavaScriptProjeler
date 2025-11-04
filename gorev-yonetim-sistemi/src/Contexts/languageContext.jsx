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
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = () => {
  return useContext(LanguageContext);
};

export { LanguageContext, LanguageProvider, useLanguage };
