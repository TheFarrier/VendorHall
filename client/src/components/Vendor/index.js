import React, { useState, useEffect } from "react";
import { Form, InputGroup, Button, Col, Row } from "react-bootstrap";
import { useAuth0 } from '../../react-auth0-spa';
import './style.css';
import RegisterStripe from "../RegisterStripe"
import API from '../../utils/API'
import { useParams, Redirect } from "react-router-dom";

function Vendor() {

  const [validated, setValidated] = useState(false);
  const [newVendor, setVendor] = useState({})
  const { loading, user } = useAuth0();
  const { id } = useParams();

  useEffect(() => {
    setVendor({
      name: "",
      description: "",
      auth_id: user.sub,
      stripe_id: id,
      products:[]
    }) 
  }, []);


  const handleClick = async () => {
    await API.createUser(newVendor)
    await Redirect
  }

  const handleInputChange = event => {
    setVendor({
      ...newVendor,
      [event.target.name]: event.target.value
    })
  }

  return (
    <Row>
      <h2>Finish setting up your store</h2>
      <Form onSubmit={handleSubmit} border="primary" style={{ width: '50rem' }}>
        <Form.Row>
          <Form.Group as={Col} md={{ span: 3, offset: 3 }}>
            <input 
              onChange={handleInputChange}
              name="name"
              type="text"
              className="form-control"
              placeholder="Vendor Name"
              id="name"
            />
            <Form.Control.Feedback>Please choose a vendor name.</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md={{ span: 4, offset: 3 }} >
          <input 
              onChange={handleInputChange}
              name="description"
              type="textarea"
              className="form-control"
              placeholder="Describe your store!"
              id="description"
            />
            <Form.Control.Feedback type="invalid">
              Please describe your store.
              </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md={{ span: 4, offset: 3 }}>
            <Form.Check
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
            />
          </Form.Group>
        </Form.Row>
        <Form.Row >
          <Button onClick={handleClick} as={Col} md={{ span: 4, offset: 3 }}>Submit form</Button>
        </Form.Row>
      </Form>
      <RegisterStripe />
    </Row>
  );
}

export default Vendor;


