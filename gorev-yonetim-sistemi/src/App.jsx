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
import { Suspense } from "react";
import Loading from "./Components/Loading.jsx";

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
                <Suspense fallback={<Loading />}>
                  <PublicLayout>
                    <Login />
                  </PublicLayout>
                </Suspense>
              }
            />
            <Route
              path="/register"
              element={
                <Suspense fallback={<Loading />}>
                  <PublicLayout>
                    <Register />
                  </PublicLayout>
                </Suspense>
              }
            />
            <Route
              path="/projects"
              element={
                <Suspense fallback={<Loading />}>
                  <DefaultLayout />
                </Suspense>
              }
            />
          </Routes>
        </LanguageProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
