import React, { useState, useEffect } from "react";
import API from "../utils/API";
import ProductCard from "../components/ProductCard";
import  Card  from "../components/Card";
import { Row } from "react-bootstrap";

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
        <Row>
          {products.map((product, index) =>
            <Card p={product} i={index}/>
          )}
        </Row>
      </div>
    );
  }

export default StorePage;