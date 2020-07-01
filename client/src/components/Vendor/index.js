import React, { useState } from "react";
import { Form, InputGroup, Button, Col } from "react-bootstrap";
import './style.css';
import RegisterStripe from "../RegisterStripe"

function Vendor() {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div>
      <Form noValidate validated={validated} onSubmit={handleSubmit} border="primary" style={{ width: '50rem' }}>
        <Form.Row>
          <Form.Group as={Col} md={{ span: 3, offset: 3 }} controlId="validationCustom01">
            <Form.Control
              required
              type="text"
              placeholder="First name"
              defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md={{ span: 3, offset: 3 }} controlId="validationCustom02">
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>.
        <Form.Row>
          <Form.Group as={Col} md={{ span: 3, offset: 3 }} controlId="validationCustomUsername">
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="valid">
                Please choose a username.
                </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md={{ span: 3, offset: 3 }} controlId="validationCustom02">
            <Form.Control
              required
              type="text"
              placeholder="Vendor name"
              defaultValue=""
            />
            <Form.Control.Feedback>Please choose a vendor name.</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>.
        <Form.Row>
          <Form.Group as={Col} md={{ span: 4, offset: 3 }} controlId="validationCustom03">
            <Form.Control type="text" placeholder="City" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
              </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md={{ span: 4, offset: 3 }} controlId="validationCustom04">
            <Form.Control type="text" placeholder="State" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
              </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md={{ span: 4, offset: 3 }} controlId="validationCustom05">
            <Form.Control type="text" placeholder="Zip" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md={{ span: 4, offset: 3 }}>
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
            />
          </Form.Group>
        </Form.Row>
        <Form.Row >
          <Button type="submit" as={Col} md={{ span: 4, offset: 3 }}>Submit form</Button>
        </Form.Row>
      </Form>
      <RegisterStripe />
    </div>
    
  );
}


export default Vendor;


