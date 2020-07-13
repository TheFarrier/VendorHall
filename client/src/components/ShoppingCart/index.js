import React, { useEffect, useContext } from 'react';
import { Card, Dropdown} from 'react-bootstrap';
import './style.css';
import Checkout from '../Checkout';
import CartCard from './CartCard';
import cartContext from '../../utils/cartContext'

function ShoppingCart() {

  const {cart, removeFromCart, getCart} = useContext(cartContext);

  useEffect(() => {
    getCart()
  }, [])

  return (
    <Dropdown>
      <Dropdown.Toggle>
        <i className="fa fa-shopping-cart" aria-hidden="true" />
      </Dropdown.Toggle>
      <Dropdown.Menu alignRight>
      <Dropdown.Header>Shopping Cart</Dropdown.Header>
        {cart.map((product, index) => {
          return(
            <Dropdown.Item>
              <Card className="cart-item">
                <CartCard p={product} i={index} />
              </Card>
            </Dropdown.Item>
            )
          })
        }
      <Checkout />
    </Dropdown.Menu>
    </Dropdown>
  );
}

export default ShoppingCart;

