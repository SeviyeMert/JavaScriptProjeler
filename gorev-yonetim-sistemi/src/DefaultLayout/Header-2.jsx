import React from "react";
import { PiUserCircleGearLight } from "react-icons/pi";
import "../css/Header-2.css";

function Header_2() {
  return (
    <div className="user">
      <button className="user-logo">
        <PiUserCircleGearLight />
      </button>
    </div>
  );
}

export default Header_2;
