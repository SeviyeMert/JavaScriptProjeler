import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "../css/Context.css";

function BackHomeButton() {
  const navigate = useNavigate();
  return (
    <div>
      <button className="back-home-button" onClick={() => navigate("/")}>
        <IoMdArrowBack />
      </button>
    </div>
  );
}

export default BackHomeButton;
