import "./App.css";
import { LanguageProvider } from "./Contexts/languageContext";
import { ThemeProvider } from "./Contexts/ThemeContext";
import StateProvider from "./Contexts/StateContext.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
import { Suspense, useState } from "react";
import Loading from "./Components/Loading.jsx";
import Project from "./DefaultLayout/Project.jsx";
import Tasks from "./DefaultLayout/Tasks.jsx";

import Products from "./pages/Products.jsx";
import Solutions from "./pages/Solutions.jsx";
import Resources from "./pages/Resources.jsx";
import Overview from "./pages/Overview.jsx";
import Services from "./pages/Services.jsx";

const PublicLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

function App() {
  const initialLoginState = localStorage.getItem("isLoggedIn") === "true";
  const [isLoggedIn, setIsLoggedIn] = useState(initialLoginState);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);

    localStorage.setItem("isLoggedIn", "true");
  };

  return (
    <Router>
      <ThemeProvider>
        <LanguageProvider>
          <StateProvider>
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
                path="/products"
                element={
                  <PublicLayout>
                    <Products />
                  </PublicLayout>
                }
              />
              <Route
                path="/solutions"
                element={
                  <PublicLayout>
                    <Solutions />
                  </PublicLayout>
                }
              />
              <Route
                path="/resources"
                element={
                  <PublicLayout>
                    <Resources />
                  </PublicLayout>
                }
              />
              <Route
                path="/enterprise/overview"
                element={
                  <PublicLayout>
                    <Overview />
                  </PublicLayout>
                }
              />
              <Route
                path="/enterprise/services"
                element={
                  <PublicLayout>
                    <Services />
                  </PublicLayout>
                }
              />

              <Route
                path="/login"
                element={
                  <Suspense fallback={<Loading />}>
                    <PublicLayout>
                      <Login onLoginSuccess={handleLoginSuccess} />
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
                path="/projects/*"
                element={
                  <Suspense fallback={<Loading />}>
                    {isLoggedIn ? (
                      <DefaultLayout />
                    ) : (
                      <Navigate to="/login" replace />
                    )}
                  </Suspense>
                }
              >
                <Route index element={<Project />} />

                <Route path="tasks/:projectId" element={<Tasks />} />
              </Route>
            </Routes>
          </StateProvider>
        </LanguageProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
