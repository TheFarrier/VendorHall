import React, { useState, useEffect } from 'react';
import './style.css';
import API from '../../utils/API'
import { useAuth0 } from '../../react-auth0-spa';
import { Dropdown } from 'react-bootstrap';



function RegisterStripe () {

  const [stripe, setStripe] = useState({});
  const { user } = useAuth0();

  useEffect(()=>{
      API.getStripeInfo()
        .then((res)=>{
          setStripe(res.data)
        })
        .catch((err) => console.log(err));
    },[])
  



  let stripelink = `https://connect.stripe.com/express/oauth/authorize?client_id=${stripe.client_id}&state=${stripe.stateValue}&stripe_user[country]=US&suggested_capabilities[]=transfers&stripe_user[email]=${user.email}`

  return (
    <Dropdown.Item href={stripelink}>Become a Vendor</Dropdown.Item>
  );
}

export default RegisterStripe;