import React, { useState, useEffect } from "react";
import API from "../utils/API";
import ProductCard from "../components/ProductCard";

function StorePage() {
  // Initialize books as an empty array
    const [products, setProducts] = useState([]);

    useEffect(() => {
      API.getAllProducts()
        .then(res => setProducts(res.data))
        .catch(err => console.log(err));
    }, [])

    return (
      <div>
        <p>All Stores</p>
        <div>
          {products.map((product, index) =>
            <ProductCard p={product} key={index}/>
          )}
        </div>
      </div>
    );
  }

export default StorePage;