import React from 'react';

function ProductCard({ p, index }) {
  return (
    <div key={index}>
      <p>
        {p.name}
        {' '}
        <span>
          $
          {p.price}
        </span>
      </p>
      <img src={p.image} style={{ width: '300px', height: '300px' }} />
      <p>{p.description}</p>
    </div>
  );
}

export default ProductCard;
