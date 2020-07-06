import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import './style.css';
import API from '../../utils/API'
import DB from '../../utils/IndexedDB'
import {loadStripe} from '@stripe/stripe-js';


function Checkout() {

  const [sessionId, setID] = useState('')
  const stripePromise = loadStripe('pk_test_51GyhD6JxF3l7n3KAqKpEW0eD1002yA5Su9f1LOMx5MR4V0c0oUEP8Lo5e2uFBgOktYuJSNfrRIlUhPRb1lMcTEtp00C8W3Zb9e');

  useEffect(() => {
    DB.openDB()
    API.createSession()
      .then((res) => {
        setID(res.data.session_id)
      })
      .catch((err) => console.log(err));
  }, []);

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

