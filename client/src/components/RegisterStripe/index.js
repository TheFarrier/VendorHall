import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import './style.css';
import API from '../../utils/API'



function RegisterStripe () {

  const [stripe, setStripe] = useState({});

  useEffect(()=>{
    API.getStripeInfo()
      .then((res)=>{
        console.log(res)
        setStripe(res.data)
      })
      .catch((err) => console.log(err));
  },[])



  let stripelink = `https://connect.stripe.com/express/oauth/authorize?client_id=${stripe.client_id}&state=${stripe.stateValue}&stripe_user[country]=US&suggested_capabilities[]=transfers`

  return (
    <div>
      <Button href={stripelink}>stripelink</Button>

    </div>
    
  );
}

export default RegisterStripe;