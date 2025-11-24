import React from "react";
// import "../css/Card-h3.css";
import "../css/Context.css";

const Card_h3 = (props) => {
  const { cardLogo, cardHeader, cardContext, cardImage } = props;

  return (
    <div className="card-container-h3">
      <span
        className="card-logo-h3"
        style={{
          fontSize: "2rem",
          padding: "11px 5px 0 7px",
          borderRadius: "1.4rem",
        }}
      >
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
