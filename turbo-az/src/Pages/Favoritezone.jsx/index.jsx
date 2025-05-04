import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../features/favorites/favoriteSlice"; 

function Favoritezone() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items); 

  return (
    <div>
      <h1>Favorite Zone</h1>
      <div className="favorite-cards">
        {favorites.map((item) => (
          <div key={item.id} className="card">
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.model}</p>
            <p>
              {item.price} {item.currency}
            </p>
            <p>
              {item.year}, {item.engine}, {item.millage}
            </p>
            <button
              className="favorite-btn"
              onClick={() => dispatch(removeFavorite(item.id))}
            >
              ♥Remove from Favorite
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favoritezone;
