import React, { useContext, useState } from "react";
import SideBar from "./DefaultSidebar.jsx";
import Header from "./Header-2";
import Navbar from "./Navbar";
import Project from "./Project";
import { StateContext } from "../Contexts/StateContext.jsx";
import "../css/DefaultLayout.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Outlet } from "react-router-dom";

function DefaultLayout() {
  const { projects, setProjects } = useContext(StateContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const moveProjects = (fromIndex, toIndex) => {
    const newProjects = [...projects];
    const [moveProject] = newProjects.splice(fromIndex, 1);
    newProjects.splice(toIndex, 0, moveProject);

    setProjects(newProjects);
    localStorage.setItem("projects", JSON.stringify(newProjects));
  };

  return (
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
          <Outlet moveProjects={moveProjects} />
        </div>
      </div>
    </DndProvider>
  );
}

export default DefaultLayout;
