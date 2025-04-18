import React from "react";
import { useParams } from "react-router";
import { CarData } from "../../Cardata/Data";
import Product from "../../component/Product.jsx";

function CardDetails() {
  const { id } = useParams();
  return (
    <div>
      <div className="card-details">
        {CarData &&
          CarData.map((item) => {
            if (item.id == id) {
              return (
                <Product
                  key={item.id}
                  img={item.img}
                  title={item.brand}
                  model={item.model}
                  price={item.price}
                  currency={item.currency}
                  year={item.year}
                  millage={item.mileage}
                  engine={item.engine}
                  city={item.city}
                  phone={item.phone}
                />
              );
            }
          })}
      </div>
    </div>
  );
}

export default CardDetails;
