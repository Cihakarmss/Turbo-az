import React from "react";
import { useEffect, useState } from "react";

function Favoritezone() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("favoriteItems")) || [];
    setFavorites(storedItems);

  }, [])

  

  const removeProduct = (id) => {
    const updatedItems = favorites.filter((item) => item.id !== id);

    setFavorites(updatedItems);

    localStorage.setItem("favoriteItems", JSON.stringify(updatedItems));
  };


  return (
    <>
      <div className="favorite_header">
        <h1>Favorite</h1>
      </div>

      <div className="favorite">
        <div className="favorite_header"></div>

        <div className="favorite_card">
          {favorites.map((item) => (
            <div key={item.id} className="favorite_card_item">
              <img src={item.img} alt="car_image" />
              <h3>
                {item.price} {item.currency}
              </h3>
              <p>
                {item.title} {item.model}
              </p>
              <p>
                {item.year}, {item.engine}, {item.millage}
              </p>
              <button
                onClick={() => removeProduct(item.id)}
                className="remove_button"
              ></button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Favoritezone;
