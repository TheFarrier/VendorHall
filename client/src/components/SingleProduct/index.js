import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";

function SingleProduct() {

    const styles = {

        containerStyle: {
            border: '.02rem solid',
            borderColor: 'MediumSeaGreen',
            width: '65rem',
            height: '30rem',
            padding: '15px',
            float: 'center'
        }

    };


    return (
        <Container style={styles.containerStyle}>
            <Row>
                <Col sm={1}></Col>
                <Card style={{ width: '20rem' }}>
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
        </Container>

    )
};

export default SingleProduct;
