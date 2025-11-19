import React, { useState } from "react";
import "../css/Header.css";
import { useLanguage } from "../Contexts/languageContext";
import DarkLightToggle from "../Contexts/DarkLightToggle";
import { Link } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import logo from "../images/logo.png";
// import enTranslations from "../i18n/en.json";
// import trTranslations from "../i18n/tr.json";
// import ruTranslations from "../i18n/ru.json";
import { IoIosArrowDown, IoIosMenu } from "react-icons/io";
import { headerTranslations } from "../i18n/Header";
import Sidebar from "./Sidebar";

function Header() {
  const { language, setLanguage } = useLanguage();

  const [isEnterpriseOpen, setIsEnterpriseOpen] = useState(false);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const t = headerTranslations[language];

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const handleToggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <header className="header">
      <button className="menu-toggle-button" onClick={handleToggleSidebar}>
        <IoIosMenu size={30} />
      </button>

      <div className="header-logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="nav-links-container desktop-only">
        <Link to="/products" className="nav-link">
          {t.products_link}
        </Link>
        <Link to="/solutions" className="nav-link">
          {t.solutions_link}
        </Link>
        <Link to="/resources" className="nav-link">
          {t.resources_link}
        </Link>

        <div className="dropdown">
          <button
            className="dropdown-button"
            onClick={() => setIsEnterpriseOpen(!isEnterpriseOpen)}
          >
            {t.enterprise_dropdown} <IoIosArrowDown />
          </button>
          {isEnterpriseOpen && (
            <div className="dropdown-enterprice">
              <Link to="/enterprise/overview" className="dropdown-item">
                {t.overview_link}
              </Link>
              <Link to="/enterprise/services" className="dropdown-item">
                {t.services_link}
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="log-and-language-container desktop-only">
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
            <span className="divider"> | </span>
            <button
              onClick={() => handleLanguageChange("ru")}
              className={language === "ru" ? "active" : ""}
            >
              Ru
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

      {isSidebarOpen && (
        <Sidebar
          t={t}
          handleLanguageChange={handleLanguageChange}
          language={language}
          isEnterpriseOpen={isEnterpriseOpen}
          setIsEnterpriseOpen={setIsEnterpriseOpen}
          handleCloseSidebar={handleCloseSidebar}
        />
      )}
    </header>
  );
}

export default Header;
