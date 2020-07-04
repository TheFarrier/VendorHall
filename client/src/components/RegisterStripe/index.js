import React from 'react';
import { Button } from 'react-bootstrap';
import './style.css';

function RegisterStripe () {

  let client_id ="ca_HYehoVsWJzZ8Beqd5iOkfdGjQ4Yz6VEG"

  let stripelink = `https://connect.stripe.com/express/oauth/authorize
  ?client_id=${client_id}
  &state={STATE_VALUE}
  &stripe_user[business_type]=individual
  &suggested_capabilities[]=transfers`

  return (
    <div>
      <Button href={stripelink}>stripelink</Button>

    </div>
    
  );
}

export default RegisterStripe;

