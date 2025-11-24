import React from "react";
// import "../css/Card-h1.css";
import { Link } from "react-router-dom";

function Card_h1(props) {
  const { cardHeader, cardContext, cardList, cardImage } = props;

  return (
    <div className="card-container-h1">
      <h1 className="card-header-h1">{cardHeader}</h1>
      <p className="card-context-h1">{cardContext}</p>
      <div className="card-list-h1">
        {cardList &&
          cardList.map((item, index) => (
            <li
              key={index}
              style={{ display: "inline-block", margin: "0 10px" }}
            >
              <Link to="./{item}">{item}</Link>
            </li>
          ))}
      </div>
      <div className="card-image-h1">
        {cardImage != null && (
          <img src={cardImage} alt="image" className="card-img-h1" />
        )}
      </div>
    </div>
  );
}

export default Card_h1;
