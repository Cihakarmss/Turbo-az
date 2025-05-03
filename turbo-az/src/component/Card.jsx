import React from "react";
import { useNavigate } from "react-router";

function Card(props) {
  const { title, price, year, model, engine, img, currency, millage } = props;
  const navigate = useNavigate();
  const addtoFavorite = () => {
    const favoriteItems = JSON.parse(localStorage.getItem("favoriteItems")) || [];
    const newItem = {
     
      title: title,
      price: price,
      year: year,
      model: model,
      engine: engine,
      img: img,
      currency: currency,
      millage: millage,
    };
    favoriteItems.push(newItem);
    localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
    alert("Added to favorites!");
    
  }


  return (
    <>
    <div  className="card">
      <div onClick={() => navigate("/details/" + props.id)}  className="card_click">
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
      <div/>
      </div>
  <button className="favorite-btn" onClick={addtoFavorite}>
        ♥ Add to Favorite
      </button>
    </div>
    </>    
        
  );
}

export default Card;
