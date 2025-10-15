import React from "react";

function Card_h2(props) {
  const { cardHeader, cardLogos, cardContext, cardImage } = props;

  return (
    <div>
      <h2>{cardHeader}</h2>
      <div>{cardLogos}</div>
      <p>{cardContext}</p>
      <img src={cardImage} alt="image" />
    </div>
  );
}

export default Card_h2;
