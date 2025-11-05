import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PiUserCircleGearLight } from "react-icons/pi";
import "../css/Header-2.css";
import { CiDark } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";
import DarkLightToggle from "../Contexts/DarkLightToggle";

function Header_2() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="user">
      <button className="user-logo" onClick={handleClick}>
        <PiUserCircleGearLight />
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-item">
            <span>
              <DarkLightToggle />
            </span>
          </div>

          <div className="dropdown-item">
            <span>Profile</span>
          </div>

          <div className="dropdown-item">
            <span>Settings</span>
          </div>

          <div className="dropdown-divider"></div>

          <div className="dropdown-item" onClick={() => navigate("/")}>
            <IoLogOutOutline />
            <span>Log out</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header_2;
