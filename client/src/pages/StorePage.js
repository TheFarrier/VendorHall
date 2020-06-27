import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import API from '../utils/API';
import Card from '../components/Card';

function StorePage() {
  // Initialize books as an empty array
  const [store, setStore] = useState([]);
  // const [products, setProducts] = useState([])

  const { id } = useParams();

  useEffect(() => {
    API.getUserProducts(id)
      .then((res) => {
        setStore(res.data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Row>
        {store.map((product, index) => 
          <Card p={product} i={index} />
          )}
      </Row>
    </div>
  );
}

export default StorePage;
