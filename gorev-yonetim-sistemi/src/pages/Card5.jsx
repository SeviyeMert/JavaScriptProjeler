import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import "../css/Card5.css";

function Card5(props) {
  const { cardLogo, cardHeader, cardContext, className } = props;
  return (
    <div className="card5-container">
      <span
        className="card5-logo"
        style={{
          fontSize: "40px",
          padding: "11px 5px 0 7px",
          borderRadius: "20px",
        }}
      >
        {cardLogo}
      </span>
      <h3 className="card5-header">{cardHeader}</h3>
      <div className="card5-context">
        {cardContext.map((item, index) => (
          <li key={index}>
            <a href="/.{item}">{item}</a>
          </li>
        ))}
        <a className="card5-view-button" href="">
          View all
          <BsArrowRightShort />
        </a>
      </div>
    </div>
  );
}

export default Card5;
