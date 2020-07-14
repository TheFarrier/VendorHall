import { Form, Button, Col, Row } from 'react-bootstrap';
import React, { useState, useEffect} from 'react';
import { useAuth0 } from '../../react-auth0-spa';
import './style.css';
import API from '../../utils/API'
import { useParams, Redirect } from 'react-router-dom';
import './style.css';


function Vendor() {

  const [registered, setRegistered] = useState(false)
  const [newVendor, setVendor] = useState({})
  const { user } = useAuth0();
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

  const handleClick =  () => {
    API.createUser(newVendor).then(
      setRegistered(true)
    )
  }

  const handleInputChange = event => {
    setVendor({
      ...newVendor,
      [event.target.name]: event.target.value
    })
  }

  return (
    <Row>
      {registered && <Redirect to={"/profile"}/>}
      <Form onSubmit={handleClick} border="primary" style={{ width: '50rem' }}>
      <h2>Finish setting up your store</h2>
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
    </Row>
  );
}

export default Vendor;