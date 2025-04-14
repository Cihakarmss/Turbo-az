import React from "react";
import { useNavigate } from "react-router";

function Card(props) {
  const { title, price, year, model, engine, img, currency, millage } = props;
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/details/" + props.id)} className="card">
      <img src={img} alt="Card Image" />
      <div className="card-content">
        <h3>
          {price} {currency}
        </h3>
        <p>
          {title} {model}
        </p>
        <p>
          {year}, {engine}, {millage}
        </p>
      </div>
    </div>
  );
}

export default Card;
