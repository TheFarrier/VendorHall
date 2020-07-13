// src/components/Profile.js

import React, { Fragment, useState, useEffect } from 'react';
import { useAuth0 } from '../react-auth0-spa';
import { Container } from 'react-bootstrap';
import API from '../utils/API';


const Profile = () => {

  const styles = {

    containerStyle: {
        border: '.02rem solid',
        borderColor: 'MediumSeaGreen',
        width: '65rem',
        height: '25rem',
        float: 'center',
        padding: '5px'
    }

};

  const { loading, user } = useAuth0();
  const [vendor, setVendor] = useState({})

  useEffect(() => {
    API.getUser(user.sub).then((res) => {
      setVendor(res.data);
    })
  },[])

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (

    <Container style={styles.containerStyle}>
      <Fragment>
        <img src={user.picture} alt="Profile" />
        <h2>{user.name}</h2>
        <p>Registered Email: {user.email}</p>
        <p>Vendor Name: {vendor.name}</p>
        {/* <code>{JSON.stringify(user, null, 2)}</code>   */}
      </Fragment>
    </Container>
  );
};

export default Profile;
