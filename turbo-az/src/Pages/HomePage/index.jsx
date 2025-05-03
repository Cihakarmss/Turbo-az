import React from "react";

import { CarData } from "../../Cardata/Data.jsx";
import Card from "../../component/card.jsx";





function homePage() {
  return (
    <div>
     
      
         <div className="card-container"> 
        { CarData && CarData.map((item) => (
          
        <Card 
          id={item.id}
          key ={item.id}
          img={item.img}
          title={item.brand}
          model={item.model}
          price={item.price}
          currency={item.currency}
          year={item.year}
          millage={item.mileage}
          engine={item.engine}

        />
        ))
        }
      </div>
  
    </div>
  );
}

export default homePage;
