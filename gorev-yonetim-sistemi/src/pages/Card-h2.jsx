import React from "react";
import "../css/Card-h2.css";

function Card_h2(props) {
  const { cardHeader, cardLogos, cardContext, cardImage } = props;

  return (
    <div className="card-container-h2">
      <h2 className="card-header-h2">{cardHeader}</h2>
      <div className="card-logo-h2">{cardLogos}</div>
      <p className="card-context-h2">{cardContext}</p>
      <div className="card-image-h2">
        {cardImage != null && <img src={cardImage} alt="image" />}
      </div>
    </div>
  );
}

export default Card_h2;
