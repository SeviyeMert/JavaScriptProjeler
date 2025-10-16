import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

function Card4(props) {
  const { cardImage, cardHeader, cardContext } = props;
  return (
    <div className="container">
      <img src={cardImage} alt="Card Image" />
      <h3>{cardHeader}</h3>
      <p>{cardContext}</p>
      <a href="">
        {" "}
        Learn more <BsArrowRightShort />
      </a>
    </div>
  );
}

export default Card4;
