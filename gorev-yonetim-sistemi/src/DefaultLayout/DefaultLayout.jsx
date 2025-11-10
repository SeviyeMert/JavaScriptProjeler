import React, { useState } from "react";
import SideBar from "./Sidebar";
import Header from "./Header-2";
import Navbar from "./Navbar";
import Project from "./Project";
import StateProvider from "../Contexts/StateContext.jsx";
import "../css/DefaultLayout.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Outlet } from "react-router-dom";

function DefaultLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <StateProvider>
      <DndProvider backend={HTML5Backend}>
        <div className={`layout-container ${menuOpen ? "sidebar-open" : ""}`}>
          <div className="sidebar-area">
            <SideBar menuOpen={menuOpen} handleToggle={handleToggle} />
          </div>
          <div className="header-area">
            <Header />
          </div>
          <div className="content-area">
            <Navbar />
            <Outlet />
          </div>
        </div>
      </DndProvider>
    </StateProvider>
  );
}

export default DefaultLayout;
