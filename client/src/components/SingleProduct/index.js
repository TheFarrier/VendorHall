import React from "react";
import { Card, Row, Col } from "react-bootstrap";

function SingleProduct() {
    return (
        <Row>
            <Col sm={2}></Col>
            <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" src="./images/logo192.png" />
            </Card>
            <Col sm={1}></Col>
            <Card style={{ width: '20rem' }}>
                <Card.Body>
                    <Card.Title>Price</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Product Description</Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Card.Link href="#">Add to Cart</Card.Link>
                </Card.Body>
            </Card>
        </Row>

    )
};

export default SingleProduct;
