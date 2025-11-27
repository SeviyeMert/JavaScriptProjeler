import React from "react";
import { GoPlus } from "react-icons/go";
// import "../css/AddProjectTaskButton.css";
import { useLanguage } from "../Contexts/languageContext.jsx";
import { navbarTranslations } from "../i18n/Navbar.js";

function AddProjectTaskButton({ onClick }) {
  const { language } = useLanguage();
  const t = navbarTranslations[language];

  return (
    <button className="add-project-button" onClick={onClick}>
      <GoPlus />
      {t.add_project}
    </button>
  );
}

export default AddProjectTaskButton;
