import React from "react";
import "../css/Footer.css";
import logo from "../images/logo.png";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="socials">
        <button className="button">
          <IoLogoLinkedin />
        </button>
        <button className="button">
          <FaFacebookSquare />
        </button>
        <button className="button">
          <IoLogoInstagram />
        </button>
        <button className="button">
          <FaSquareXTwitter />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
