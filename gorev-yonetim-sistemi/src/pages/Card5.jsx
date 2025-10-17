import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

function Card5(props) {
  const { cardLogo, cardHeader, cardContext } = props;
  return (
    <div className="container">
      <img src={cardLogo} alt="Card Logo" />
      <h3>{cardHeader}</h3>
      <div>
        {cardContext.map((item, index) => (
          <li key={index}>
            <a href="/.{item}">{item}</a>
          </li>
        ))}
      </div>
      <a href="">
        View all <BsArrowRightShort />
      </a>
    </div>
  );
}

export default Card5;
