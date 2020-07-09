import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import './style.css';
import DB from '../../utils/IndexedDB'

const addtocart = (product) => {
  console.log("cart button pressed!")
  DB.addToCart(product)
};

function Productcard({ p, i }) {

  return (
    <section className="col-md-3 xs-12" key={i}>
      <Card>
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
          <p><Link to={`/user/products/${p.vendor._id}`}>{p.vendor.name}</Link></p>
          <Button onClick={()=>addtocart(p)}>Add to Cart</Button>
        </Card.Footer>
        
      </Card>
    </section>

  );
}

export default Productcard;

