import React from "react";
import "../css/card-h3.css";

const Card_h3 = (props) => {
  const { cardLogo, cardHeader, cardContext, cardImage } = props;

  return (
    <div>
      <span className="small-logo" style={{ fontSize: "40px" }}>
        {cardLogo}
      </span>
      <h3 className="card-header-h3">{cardHeader}</h3>
      <div className="card-context-h3">{cardContext}</div>
      <div className="card-image-h3">
        {cardImage != null && <img src={cardImage} alt="image" />}
      </div>
    </div>
  );
};

export default Card_h3;
