import "./App.css";
import { LanguageProvider } from "./Contexts/languageContext";
import { ThemeProvider } from "./Contexts/ThemeContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./Components/Header";
// import Footer from "./Components/Footer";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Context from "./Components/Context";
// import DefaultLayout from "./DefaultLayout/DefaultLayout";
import {
  Header,
  Footer,
  Context,
  Login,
  Register,
  DefaultLayout,
} from "./index";

const PublicLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <ThemeProvider>
        <LanguageProvider>
          <Routes>
            <Route
              path="/"
              element={
                <PublicLayout>
                  <Context />
                </PublicLayout>
              }
            />
            <Route
              path="/login"
              element={
                <PublicLayout>
                  <Login />
                </PublicLayout>
              }
            />
            <Route
              path="/register"
              element={
                <PublicLayout>
                  <Register />
                </PublicLayout>
              }
            />
            <Route path="/projects" element={<DefaultLayout />} />
          </Routes>
        </LanguageProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
