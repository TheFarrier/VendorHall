import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function StorePage() {
  // Initialize books as an empty array
    const [store, setStore] = useState({});
    const [products, setProducts] = useState([])

    const {id} = useParams()
    
    useEffect(() => {
      API.getStore(id)
        .then((res) => {
          setStore(res.data);
          setProducts(res.data.products)
        })
        .catch(err => console.log(err));
    }, [])

    // useEffect(() => {
    //   products = store.products
    //   console.log(products)
    // }, [store])

    return (
      <div>
        <p>{store.user}</p>
        <div>
          {products.map((product, index) =>
            <ProductCard p={product} key={index}/>
          )}
        </div>
      </div>
    );
  }

export default StorePage;