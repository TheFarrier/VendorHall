import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import API from '../utils/API';
import ProductCard from '../components/ProductCard';
import { CardElement } from '@stripe/react-stripe-js'

function Checkout() {
  // Initialize books as an empty array
  const [products, setProducts] = useState([]);

  useEffect(() => {

  }, []);

  return (
    <div>
      <CardElement />
    </div>
  );
}

export default Checkout;