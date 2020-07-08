import React, { useState, useEffect } from 'react';
import { Card, Dropdown} from 'react-bootstrap';
import './style.css';
import Checkout from '../Checkout';
import CartCard from './CartCard'

function ShoppingCart() {
  const [products, setProducts] = useState([{}])

  useEffect(() => {
    const request = window.indexedDB.open("shoppingCart", 1);
    
    request.onupgradeneeded = event => {
      
      const db = event.target.result;
      
      // Creates an object store with a listID keypath that can be used to query on.
      const shoppingCartStore = db.createObjectStore("shoppingCart", {keyPath: "listID"});
      // Creates a statusIndex that we can query on.
      shoppingCartStore.createIndex("idIndex", "ID");
      console.log("store created")
    }

    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction(["shoppingCart"], "readwrite");
      const shoppingCartStore = transaction.objectStore("shoppingCart");
    
      // Adds data to our objectStore
      const getRequest = shoppingCartStore.getAll()
      getRequest.onsuccess = ()=> {
        setProducts(getRequest.result)
      }
    } 
  }, [])


  return (
    <Dropdown>
      <Dropdown.Toggle>
        <i className="fa fa-shopping-cart" aria-hidden="true" /> {/*Shopping cart icon*/}
      </Dropdown.Toggle>
      <Dropdown.Menu alignRight>
        <Dropdown.Header>Shopping Cart</Dropdown.Header>
          {products.map((product, index) => {
            return(
              <Dropdown.Item key={index}>
                <Card className="cart-item">
                  <CartCard p={product} i={index} />
                </Card>
              </Dropdown.Item>
            )
          })}
        <Checkout />
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ShoppingCart;

