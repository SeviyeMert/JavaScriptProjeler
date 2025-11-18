import React from "react";
import "../css/CalendarButton.css";
import { useLanguage } from "../Contexts/languageContext";
import { navbarTranslations } from "../i18n/Navbar";
function CalendarButton() {
  const { language } = useLanguage();
  const t = navbarTranslations[language];
  return (
    <>
      <button className="calendar-button">{t.calendar_button}</button>
    </>
  );
}

export default CalendarButton;
