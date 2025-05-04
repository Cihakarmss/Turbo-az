import React from "react";
import { useNavigate } from "react-router";
import { addToFavorites, removeFromFavorites } from "../features/favorites/favoritesSlice";

import { useDispatch, useSelector } from "react-redux";

function Card(props) {
  const { title, price, year, model, engine, img, currency, millage } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favoriteItems = useSelector((state) => state.favorite.favourites);
   const isFavorite = favoriteItems.some((fav) => fav.id === props.id);
  const addtoFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites({ id: props.id }));
    } else {
      dispatch(
        addToFavorites({
          id: props.id,
          img: img,
          title: title,
          model: model,
          price: price,
          currency: currency,
          year: year,
          millage: millage,
          engine: engine,
        })
      );
    }


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
        Add to Favorite
      </button>
    </div>
    </>    
        
  );
}



export default Card;
