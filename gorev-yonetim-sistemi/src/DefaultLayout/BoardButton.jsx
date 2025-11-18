import React from "react";
import "../css/BoardButton.css";
import { useLanguage } from "../Contexts/languageContext";
import { navbarTranslations } from "../i18n/Navbar";
function BoardButton() {
  const { language } = useLanguage();
  const t = navbarTranslations[language];
  return (
    <>
      <button className="board-button">{t.board_button}</button>
    </>
  );
}

export default BoardButton;
