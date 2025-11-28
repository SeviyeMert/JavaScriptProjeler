import React from "react";
import "../css/SideBar.css";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import DarkLightToggle from "../Contexts/DarkLightToggle";
import logo from "../images/logo.png";

function Sidebar({
  t,
  handleLanguageChange,
  language,
  isEnterpriseOpen,
  setIsEnterpriseOpen,
  handleCloseSidebar,
}) {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <img src={logo} alt="logo" onClick={() => navigate("/")} />
        </div>
      </div>

      <div className="sidebar-nav-links">
        <Link to="/products" className="nav-link" onClick={handleCloseSidebar}>
          {t.products_link}
        </Link>
        <Link to="/solutions" className="nav-link" onClick={handleCloseSidebar}>
          {t.solutions_link}
        </Link>
        <Link to="/resources" className="nav-link" onClick={handleCloseSidebar}>
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
            <div className="dropdown-enterprice sidebar-dropdown">
              <Link
                to="/enterprise/overview"
                className="dropdown-item"
                onClick={handleCloseSidebar}
              >
                {t.overview_link}
              </Link>
              <Link
                to="/enterprise/services"
                className="dropdown-item"
                onClick={handleCloseSidebar}
              >
                {t.services_link}
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="sidebar-footer">
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
        <nav className="log">
          <Link
            to="/login"
            className="logIn-button"
            onClick={handleCloseSidebar}
          >
            {t.login_button}
          </Link>
          <span className="divider">|</span>
          <Link
            to="/register"
            className="signUp-button"
            onClick={handleCloseSidebar}
          >
            {t.signup_button}
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
