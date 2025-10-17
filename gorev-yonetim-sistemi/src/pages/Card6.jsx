import React, { useState } from "react";

function Card6(props) {
  const { cardHeader, cardLogo, cardImage } = props;

  const [activeIndex, setActiveIndex] = useState(0);

  const handleImage = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="container">
      <h2>{cardHeader}</h2>
      <div className="card-logos" style={{ fontSize: "40px" }}>
        {cardLogo.map((item, index) => (
          <li
            key={index}
            onClick={() => handleImage(index)}
            className={index === activeIndex ? "active-logo" : ""}
            style={{
              display: "inline-block",
              margin: "0 10px",
              padding: 0,
              cursor: "pointer",
              border: "3px solid lemonchiffon",
            }}
          >
            {item}
          </li>
        ))}
      </div>
      <div className="card-image">
        {cardImage && cardImage[activeIndex] && (
          <img src={cardImage[activeIndex]} alt="Card image" />
        )}
      </div>
    </div>
  );
}

export default Card6;
