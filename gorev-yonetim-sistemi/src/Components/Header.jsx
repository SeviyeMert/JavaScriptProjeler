import React, { useState } from "react";
import "../css/Header.css";
import { useLanguage } from "../Contexts/languageContext";
import DarkLightToggle from "../Pages/DarkLightToggle";
import { Link } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import logo from "../images/logo.png";
import enTranslations from "../i18n/en.json";
import trTranslations from "../i18n/tr.json";

function Header() {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const [isEnterpriseOpen, setIsEnterpriseOpen] = useState(false);

  const translations = {
    en: enTranslations,
    tr: trTranslations,
  };

  const t = translations[language];

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="nav-links-container">
        <Link to="/products" className="nav-link">
          Products
        </Link>
        <Link to="/solutions" className="nav-link">
          Solutions
        </Link>
        <Link to="/resources" className="nav-link">
          Resources
        </Link>

        <div className="dropdown">
          <button
            className="dropdown-button"
            onClick={() => setIsEnterpriseOpen(!isEnterpriseOpen)}
          >
            Enterprise
          </button>
          {isEnterpriseOpen && (
            <div className="dropdown-enterprice">
              <Link to="/enterprise/overview" className="dropdown-item">
                Overview
              </Link>
              <Link to="/enterprise/services" className="dropdown-item">
                Services
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="log-and-language-container">
        <div className="toggle-language">
          <DarkLightToggle />

          <div className="language">
            <button
              onClick={() => handleLanguageChange("tr")}
              className={language === "tr" ? "active" : ""}
            >
              Tr
            </button>
            <span className="divider"> | </span>
            <button
              onClick={() => handleLanguageChange("en")}
              className={language === "en" ? "active" : ""}
            >
              En
            </button>
          </div>
        </div>

        <nav className="log">
          <Link to="/login" className="logIn-button">
            {t.login_button}
          </Link>
          <span className="divider">|</span>
          <Link to="/register" className="signUp-button">
            {t.signup_button}
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
