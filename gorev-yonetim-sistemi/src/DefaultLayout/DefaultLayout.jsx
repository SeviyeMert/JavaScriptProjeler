import React from "react";
import SideBar from "./Sidebar";
import Header from "./Header-2";
import Navbar from "./Navbar";
import Project from "./Project";
import StateProvider from "../Contexts/StateContext.jsx";

function DefaultLayout() {
  return (
    <StateProvider>
      <SideBar />
      <Header />
      <Navbar />
      <Project />
    </StateProvider>
  );
}

export default DefaultLayout;
