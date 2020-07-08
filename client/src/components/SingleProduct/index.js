import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import API from "../../utils/API"
import DB from '../../utils/IndexedDB'

function SingleProduct() {

    const addtocart = (product) => {
        console.log("cart button pressed!")
        DB.addToCart(product)
      };

    const { id } = useParams();
    const [product, setProduct] = useState({});
    const styles = {

        containerStyle: {
            border: '.02rem solid',
            borderColor: 'gray',
            width: '65rem',
            height: '30rem',
            padding: '15px',
            float: 'center'
        }

    };

    useEffect(() => {
        API.getProduct(id)
          .then((res) => {
              console.log(res.data)
            setProduct(res.data);
          })
          .catch((err) => console.log(err));
      }, []);


    return (
        <Container style={styles.containerStyle}>
            <Row>
                <Col sm={1}></Col>
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={product.image} />
                </Card>
                <Col sm={1}></Col>
                <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Title>{product.price}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{product.name}</Card.Subtitle>
                        <Card.Text>
                            {product.description}
                        </Card.Text>
                        <Button onClick={()=>addtocart(product)}>Add to Cart</Button>
                    </Card.Body>
                </Card>
            </Row>
        </Container>

    )
};

export default SingleProduct;
