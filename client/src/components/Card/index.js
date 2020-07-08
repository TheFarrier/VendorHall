import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import './style.css';
import DB from '../../utils/IndexedDB'

const addtocart = (product) => {
  DB.addToCart(product)
};

function Productcard({ p, i }) {

  const styles = {
    cardStyle: {
      border: '.02rem solid',
      borderColor: 'MediumSeaGreen',
      width: '15rem',
    }
  }

  return (
    <section className="col-md-3 xs-12" key={i}>
      <Card style={styles.cardStyle}>
        <Link to={`/product/${p._id}`}>
        <Card.Img variant="top" src={p.image} className="card-image" />
        </Link>
        <Card.Body>
          <Card.Title>
            {p.name} ${p.price}
          </Card.Title>
          <Card.Text>
            {p.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link to={`/user/products/${p.vendor._id}`}>{p.vendor.name}</Link>
          <Button onClick={()=>addtocart(p)}>Add to Cart</Button>
        </Card.Footer>
      </Card>
    </section>

  );
}

export default Productcard;

