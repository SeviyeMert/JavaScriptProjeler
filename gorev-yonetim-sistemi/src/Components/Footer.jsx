import React from "react";
import "../css/Footer.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
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
        <a
          href="https://www.linkedin.com/"
          className="social-button"
          target="_blank"
        >
          <IoLogoLinkedin />
        </a>
        <a
          href="https://www.facebook.com/"
          className="social-button"
          target="_blank"
        >
          <FaFacebookSquare />
        </a>
        <a
          href="https://www.instagram.com/"
          className="social-button"
          target="_blank"
        >
          <IoLogoInstagram />
        </a>
        <a href="https://x.com/" className="social-button" target="_blank">
          <FaSquareXTwitter />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
