import React from "react";

function Card_h1(props) {
  const { cardHeader, cardContext, cardList, cardImage } = props;

  return (
    <div className="container">
      <h1>{cardHeader}</h1>
      <p>{cardContext}</p>
      <div>{cardList}</div>
      <img src={cardImage} alt="image" />
    </div>
  );
}

export default Card_h1;
