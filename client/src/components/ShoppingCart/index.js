import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Dropdown, Button } from 'react-bootstrap';
import './style.css';

function ShoppingCart({ p, i }) {
  return (
    <Dropdown>
          <Dropdown.Toggle>
            <i className="fa fa-shopping-cart" aria-hidden="true" /> {/*Shopping cart icon*/}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Header>Shopping Cart</Dropdown.Header>
            <Dropdown.Item>
              <Card className="cart-item">
                <Row>
                  <Col lg={3}>
                    <Card.Img className="cart-image" variant="left" src="https://i.imgur.com/05kFTos.jpg"></Card.Img>
                  </Col>
                  <Col lg={3}>
                    <Card.Body className="cart-title">A shirt</Card.Body>
                  </Col>
                  <Col lg={1}>
                    <Card.Body className="cart-qty">3</Card.Body>
                  </Col>
                  <Col lg={3}>
                    <Card.Body className="cart-price">$25.00</Card.Body>
                  </Col>
                </Row>
              </Card>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

  );
}

export default ShoppingCart;

