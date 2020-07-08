// src/components/Profile.js
import React, { Fragment } from 'react';
import { useAuth0 } from '../react-auth0-spa';
import { Container } from 'react-bootstrap';


const Profile = () => {

  const styles = {

    containerStyle: {
        border: '.02rem solid',
        borderColor: 'mediumseagreen',
        width: '65rem',
        height: '25rem',
        float: 'center',
        padding: '5px'
    }

};

  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (

    <Container style={styles.containerStyle}>
    <Fragment>
      <img src={user.picture} alt="Profile" />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <code>{JSON.stringify(user, null, 2)}</code>  

    </Fragment>
    </Container>
  );
};

export default Profile;
