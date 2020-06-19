import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function StorePage() {
  // Initialize books as an empty array
    const [store, setStore] = useState([]);
    // const [products, setProducts] = useState([])

    const {id} = useParams()
    
    useEffect(() => {
      API.getUserProducts(id)
        .then((res) => {
          setStore(res.data);
        })
        .catch(err => console.log(err));
    }, [])

    
    return (
      <div>
        <div>
          {store.map((product, index) =>
            <ProductCard p={product} key={index}/>
          )}
        </div>
      </div>
    );
  }

export default StorePage;