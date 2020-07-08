import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import './style.css';
import API from '../../utils/API'
import {loadStripe} from '@stripe/stripe-js';


function Checkout() {

  let [cart, setCart] = useState([{}])
  const [sessionId, setID] = useState('')
  const stripePromise = loadStripe('pk_test_51GyhD6JxF3l7n3KAqKpEW0eD1002yA5Su9f1LOMx5MR4V0c0oUEP8Lo5e2uFBgOktYuJSNfrRIlUhPRb1lMcTEtp00C8W3Zb9e');

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
        setCart(getRequest.result)
        startSession();
      }
    } 
  }, [])

  const startSession = () => {
    cart = cart.map(item =>{
      return ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
          },
          unit_amount: item.price*100,
        },
        quantity: item.quantity,
      })
    })
    API.createSession(cart)
    .then((res) => {
      setID(res.data.session_id)
    })
    .catch((err) => console.log(err));
  }

  const checkout = async (event) => {
    const stripe = await stripePromise
    await console.log(sessionId)
    const { error } = await stripe.redirectToCheckout({sessionId});
  }
  
  return (
    <Button onClick={checkout}>Checkout</Button>
  );
}

export default Checkout;

