import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import './style.css';

function Productcard({ p, i }) {
  return (
    <section className="col-md-3 xs-12" key={i}>
      <Card>
        <Card.Img variant="top" src={p.image} className="card-image" />
        <Card.Body>
          <Card.Title>
            {p.name}
            {' '}
            ${p.price}
          </Card.Title>
          <Card.Text>
            {p.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link to={`/user/products/${p.vendor}`}>Store Page</Link>
        </Card.Footer>
      </Card>
    </section>

  );
}

export default Productcard;
