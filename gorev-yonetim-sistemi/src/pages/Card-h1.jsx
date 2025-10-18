import React from "react";
import "../css/Card-h1.css";
import { Link } from "react-router-dom";

function Card_h1(props) {
  const { cardHeader, cardContext, cardList, cardImage } = props;

  return (
    <div className="container">
      <h1 className="card-header">{cardHeader}</h1>
      <p className="card-context">{cardContext}</p>
      <div className="card-list">
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
      <div className="card-image">
        {cardImage != null && <img src={cardImage} alt="image" />}
      </div>
    </div>
  );
}

export default Card_h1;
