import { LanguageProvider, LanguageContext } from "./store/languageContext";

ReactDOM.render(
  <LanguageProvider>
    <App />
  </LanguageProvider>,
  document.getElementById("root")
);
