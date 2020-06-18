import React from "react";


function ProductCard({p, index}) {

    return (
      <div key={index}>
        <p>{p.name} <span>${p.price}</span></p>
        <img src={p.image}></img>
        <p>{p.description}</p>
      </div>
    );
  }

export default ProductCard;
