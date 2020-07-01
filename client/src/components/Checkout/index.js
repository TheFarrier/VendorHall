import React from 'react';
import { Button } from 'react-bootstrap';
import './style.css';

function Checkout({ p, i }) {

var stripe = Stripe('pk_test_51GyhD6JxF3l7n3KAqKpEW0eD1002yA5Su9f1LOMx5MR4V0c0oUEP8Lo5e2uFBgOktYuJSNfrRIlUhPRb1lMcTEtp00C8W3Zb9e');

stripe.redirectToCheckout({
  // Make the id field from the Checkout Session creation API response
  // available to this file, so you can provide it as parameter here
  // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
  sessionId: '{{CHECKOUT_SESSION_ID}}'
}).then(function (result) {
  // If `redirectToCheckout` fails due to a browser or network
  // error, display the localized error message to your customer
  // using `result.error.message`.
});

  return (
    <Button>Checkout</Button>
  );
}

export default Checkout;

