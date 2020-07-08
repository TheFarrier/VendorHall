import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import { useAuth0 } from '../react-auth0-spa';
import { Form, Button, Container } from "react-bootstrap";

function StorePage() {

  const styles = {

    containerStyle: {
      border: '.03rem solid',
      borderColor: 'MediumSeaGreen',
      width: '65rem',
      height: '35rem',
      float: 'center',
      padding: '5px',
      fontFamily: 'Georgia'
    }

  };

  const mystyle = {

    fontFamily: 'Georgia',
    float: 'center'
  }
  

  const [formObject, setFormObject] = useState({});
  const [userData, setUserData] = useState({});

  const { loading, user } = useAuth0();

  useEffect(() => {
    loadUserData();
  }, []);

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  function loadUserData() {
    API.getUser(user.sub)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => console.log(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.name && formObject.price) {
      API.createProduct({
        name: formObject.name,
        description: formObject.description,
        price: formObject.price,
        quantity: formObject.quantity,
        image: formObject.image,
        vendor: userData._id,
      }).then((res) => API.updateUser(res.data))
        .catch((err) => console.log(err));
    }
  }

  return (
    <div>

      
      <Container style={styles.containerStyle}>
      <h2 style={mystyle}>Upload a product listing</h2>
      <Form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <input className="form-control" onChange={handleInputChange} name="name" placeholder="name" />
        </div>
        <div className="form-group">
          <textarea className="form-control" rows="5" onChange={handleInputChange} name="description" placeholder="description" />
        </div>
        <div className="form-group">
          -
          <input className="form-control" onChange={handleInputChange} name="price" placeholder="price" />
        </div>
        <div className="form-group">
          -
          <input className="form-control" onChange={handleInputChange} name="quantity" placeholder="quantity (optional)" />
        </div>
        <div className="form-group">
          <input className="form-control" onChange={handleInputChange} name="image" placeholder="image url" />
        </div>
        <Button type="submit" style={{ float: 'right', marginBottom: 10 }} className="btn btn-success">
          Submit
        </Button>
      </Form>
      </Container>
      </div>

  );
}

export default StorePage;
