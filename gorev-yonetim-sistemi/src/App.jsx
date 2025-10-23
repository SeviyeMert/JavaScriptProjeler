import "./App.css";
import { LanguageProvider } from "./Contexts/languageContext";
import { ThemeProvider } from "./Contexts/ThemeContext";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Context from "./Components/Context";
import Footer from "./Components/Footer";
import DefaultLayout from "./DefaultLayout/DefaultLayout";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <LanguageProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Context />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <DefaultLayout />
          <Footer />
        </LanguageProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
