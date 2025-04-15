import React from "react";

function Card2(props) {
  const { title,phone, price, year, model, engine, img, currency, millage, city } =
    props;
  return (
    <div>
      <div className="product">
        <div className="product_header">
          <h1>
            {title} {model},{engine},{year} il,{millage}
          </h1>
        </div>
        <div className="card2">
          <div className="product_side1">
            <span className="product_photos">
              <img className="product_img" src={img} alt="" />
            </span>
            <div className="product-content">
              <p>
                <span>Seher:</span> Seher:{city}
              </p>
              <p>
                <span>Marka:</span>
                {title}
              </p>
              <p>
                <span>Model:</span>
                {model}
              </p>
              <p>
                <span>Buraxilis ile:</span>
                {year}
              </p>
              <p>
                <span>Muherrik:</span>
                {engine}
              </p>
              <p>
                <span>Yurus:</span>
                {millage}
              </p>
            </div>
          </div>
          <div className="product_side2">
            <div className="product-price">{price}  {currency}</div>
              <div className="product_region">{city}</div>
              <button className="phone-number">
                <p><span>nomreni goster:</span>{phone}</p>
              </button>
            
          </div>
        </div>
      </div>
      <div />
    </div>
  );
}

export default Card2;
