import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites } from "../../features/favorites/favoritesSlice";



function Favoritezone() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);


  console.log(favorites);

  return (
    
    <div className="card-container"> 
    <div className="favorite-zone">
      <div className="header-favorite">

      <h1>Favorite Zone</h1>
      </div>
      
      <div className="favorite-cards">
        {favorites &&
          favorites.map((item) => (
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
                onClick={() => dispatch(removeFromFavorites(item.id))}
              >
                Remove from Favorite
              </button>
            </div>
            
            
            
          ))}
          <button className="exit-favorite" onClick={() => window.location.href = "/"}>Exit</button>
      </div>
    </div>
    </div>

  );
}

export default Favoritezone;
