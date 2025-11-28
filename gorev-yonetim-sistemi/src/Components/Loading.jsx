import React from "react";
import { useLanguage } from "../Contexts/languageContext";
import { loadingTranslations } from "../i18n/Loading";
import "../css/Loading.css";

function Loading() {
  const { language } = useLanguage();
  const t = loadingTranslations[language];
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>{t.loading_text}</p>
    </div>
  );
}

export default Loading;
