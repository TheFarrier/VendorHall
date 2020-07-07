
import { Form, InputGroup, Button, Col, Row, Container } from "react-bootstrap";
import React, { useState, useEffect } from "react";

import { useAuth0 } from '../../react-auth0-spa';
import './style.css';
import RegisterStripe from "../RegisterStripe"
import API from '../../utils/API'
import { useParams, Redirect } from "react-router-dom";

function Vendor() {


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
    API.createUser(newVendor)
  }

  const handleInputChange = event => {
    setVendor({
      ...newVendor,
      [event.target.name]: event.target.value
    })
  }

  return (
    <Container>
      <Form>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Vendor</Form.Label>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Vendor"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
            </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
          </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
          </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Zip" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
          </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
          />
        </Form.Group>
        <Button type="submit">Submit form</Button>
        <Form.Row>
          <RegisterStripe />
        </Form.Row>
      </Form>
    </Container>
  );
}

export default Vendor;
//     <Row>
//       <h2>Finish setting up your store</h2>
//       <Form onSubmit={handleClick} border="primary" style={{ width: '50rem' }}>
//         <Form.Row>
//           <Form.Group as={Col} md={{ span: 3, offset: 3 }}>
//             <input 
//               onChange={handleInputChange}
//               name="name"
//               type="text"
//               className="form-control"
//               placeholder="Vendor Name"
//               id="name"
//             />
//             <Form.Control.Feedback>Please choose a vendor name.</Form.Control.Feedback>
//           </Form.Group>
//         </Form.Row>
//         <Form.Row>
//           <Form.Group as={Col} md={{ span: 4, offset: 3 }} >
//           <input 
//               onChange={handleInputChange}
//               name="description"
//               type="textarea"
//               className="form-control"
//               placeholder="Describe your store!"
//               id="description"
//             />
//             <Form.Control.Feedback type="invalid">
//               Please describe your store.
//               </Form.Control.Feedback>
//           </Form.Group>
//         </Form.Row>
//         <Form.Row>
//           <Form.Group as={Col} md={{ span: 4, offset: 3 }}>
//             <Form.Check
//               label="Agree to terms and conditions"
//               feedback="You must agree before submitting."
//             />
//           </Form.Group>
//         </Form.Row>
//         <Form.Row >
//           <Button onClick={handleClick} as={Col} md={{ span: 4, offset: 3 }}>Submit form</Button>
//         </Form.Row>
//       </Form>
//       <RegisterStripe />
//     </Row>
//   );
// }

// export default Vendor;


