import React from "react";
import { Card, CardGroup, Col, Row } from "react-bootstrap";


function Productcard(props) {
  var products = [Card.Img, Card.Body, Card.Title, Card.Text, Card.Footer].join("Card");
  // document.getElementsByClassName("demo").innerHTML = card.map(Productcard)

  return (

    <Row>
      
      {/* <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Filter Products
                </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </div> */}

      <Col sm={3}>
        <Card className="mx-3">
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Product Description</small>
          </Card.Footer>
        </Card>
      </Col>
      <Col sm={3}>
        <Card className="mx-3">
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Product Description</small>
          </Card.Footer>
        </Card>
      </Col>
      <Col sm={3}>
        <Card className="mx-3">
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Product Description</small>
          </Card.Footer>
        </Card>
      </Col>
    </Row>

  );
}

export default Productcard;

