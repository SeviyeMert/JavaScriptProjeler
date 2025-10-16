import React from "react";

const Card_h3 = (props) => {
  const { cardLogo, cardHeader, cardContext, cardImage } = props;

  return (
    <div>
      <span className="small-logo" style={{}}>
        {cardLogo}
      </span>
      <h3>{cardHeader}</h3>
      <div>{cardContext}</div>
      <img src={cardImage} alt="Card Image" />
    </div>
  );
};

export default Card_h3;
