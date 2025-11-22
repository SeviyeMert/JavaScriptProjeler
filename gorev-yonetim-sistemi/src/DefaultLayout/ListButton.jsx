import React from "react";
// import "../css/ListButton.css";
import { useLanguage } from "../Contexts/languageContext";
import { navbarTranslations } from "../i18n/Navbar";
function ListButton() {
  const { language } = useLanguage();
  const t = navbarTranslations[language];
  return (
    <>
      <button className="list-button">{t.list_button}</button>
    </>
  );
}

export default ListButton;
