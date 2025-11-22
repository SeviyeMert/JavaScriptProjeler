import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
// import "../css/Card4.css";

function Card4(props) {
  const { cardImage, cardHeader, cardContext, className } = props;
  return (
    <div className="card4-container">
      <img className="card4-image" src={cardImage} alt="Card Image" />
      <h3 className="card4-header">{cardHeader}</h3>
      <p className="card4-context">{cardContext}</p>
      <a href="">
        {" "}
        Learn more <BsArrowRightShort />
      </a>
    </div>
  );
}

export default Card4;
