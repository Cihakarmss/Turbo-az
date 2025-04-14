import React from 'react'

function Card2(props) {
  const {  title, price, year, model, engine, img, currency, millage } =
    props;
  return (
    <div>
       <div  className="card2" >
        <img src={img} alt="Card Image" />
        <div className="card-content">
          <h3>
            {" "}
            {price} {currency}
          </h3>
          <p>
            {title} {model}
          </p>
          <p>
            {" "}
            {year},{engine},{millage}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card2
