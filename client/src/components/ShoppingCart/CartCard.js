import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Container } from 'react-bootstrap';
import './style.css';

function ShoppingCart({ p, i }) {

  
  return (

    <Container key={i}>
      <Link to={`/product/${p.listID}`}>
        <Row>
          <Col lg={3}>
            <Card.Img className="cart-image" variant="left" src={p.image}></Card.Img>
          </Col>
          <Col lg={3}>
            <Card.Body className="cart-title">{p.name}</Card.Body>
          </Col>
          <Col lg={1}>
            <Card.Body className="cart-qty">1</Card.Body>
          </Col>
          <Col lg={3}>
            <Card.Body className="cart-price">${p.price}</Card.Body>
          </Col>
        </Row>
      </Link>
    </Container>
  );
}

export default ShoppingCart;

