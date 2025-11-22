import React, { useState } from "react";
// import "../css/Card6.css";

function Card6(props) {
  const { cardHeader, cardLogo, cardImage, className } = props;

  const [activeIndex, setActiveIndex] = useState(0);

  const handleImage = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="card6-container">
      <h2 className="card6-header">{cardHeader}</h2>
      <div className="card6-logos">
        {cardLogo.map((item, index) => (
          <li
            key={index}
            onClick={() => handleImage(index)}
            className={index === activeIndex ? "card6-active-logo" : ""}
          >
            {item}
          </li>
        ))}
      </div>
      <div className="card6-image">
        {cardImage && cardImage[activeIndex] && (
          <img src={cardImage[activeIndex]} alt="Card image" />
        )}
      </div>
    </div>
  );
}

export default Card6;
