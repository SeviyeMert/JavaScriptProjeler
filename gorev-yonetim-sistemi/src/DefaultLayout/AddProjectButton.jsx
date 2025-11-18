import React, { useContext } from "react";
import { GoPlus } from "react-icons/go";
import { StateContext } from "../Contexts/StateContext.jsx";
import "../css/AddProjectButton.css";
import { useLanguage } from "../Contexts/languageContext.jsx";
import { navbarTranslations } from "../i18n/Navbar.js";

function AddProjectButton() {
  const { setIsInput, ProjectName, setProjectName } = useContext(StateContext);

  const { language } = useLanguage();
  const t = navbarTranslations[language];

  function handleStartAddProject() {
    setIsInput(true);
    setProjectName("");
  }

  return (
    <button className="add-project-button" onClick={handleStartAddProject}>
      <GoPlus />
      {t.add_project}
    </button>
  );
}

export default AddProjectButton;
