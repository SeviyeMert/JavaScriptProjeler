import React, { useState } from "react";
import SideBar from "./Sidebar";
import Header from "./Header-2";
import Navbar from "./Navbar";
import Project from "./Project";
import StateProvider from "../Contexts/StateContext.jsx";
import "../css/DefaultLayout.css";

function DefaultLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <StateProvider>
      <div className={`layout-container ${menuOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar-area">
          <SideBar menuOpen={menuOpen} handleToggle={handleToggle} />
        </div>
        <div className="header-area">
          <Header />
        </div>
        <div className="content-area">
          <Navbar />
          <Project />
        </div>
      </div>
    </StateProvider>
  );
}

export default DefaultLayout;
