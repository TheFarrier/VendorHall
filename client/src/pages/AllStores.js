import React, { useState, useEffect, useContext } from 'react';
import { Row } from 'react-bootstrap';
import API from '../utils/API';
import Card from '../components/Card';
import QString from 'query-string';
import SearchContext from '../utils/searchContext';

function StorePage(props) {
  // Initialize books as an empty array
  const [products, setProducts] = useState([]);
  const {search, setSearch} = useContext(SearchContext)

  useEffect(() => {
    if(search){
      const body = {
        q:search
      }
      API.searchProducts(body)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err))
    } else if(props.location.search){
      const params = QString.parse(props.location.search);
      API.searchProducts(params)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err))
    }else{
      API.getAllProducts()
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
    }
  }, [search]);

  return (
    <div>
      <p>All Stores</p>
      <Row>
        {products.map((product, index) => <Card p={product} i={index} />)}
      </Row>
    </div>
  );
}

export default StorePage;
