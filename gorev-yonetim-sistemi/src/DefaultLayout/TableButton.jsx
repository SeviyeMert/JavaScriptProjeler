import React from "react";
// import "../css/TableButton.css";
import { useLanguage } from "../Contexts/languageContext";
import { navbarTranslations } from "../i18n/Navbar";
function TableButton() {
  const { language } = useLanguage();
  const t = navbarTranslations[language];
  return (
    <>
      <button className="table-button">{t.table_button}</button>
    </>
  );
}

export default TableButton;
