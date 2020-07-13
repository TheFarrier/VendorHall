import React from "react";

const CartContext = React.createContext({
  cart: [{
  listID: "",
  image: "",
  name: "",
  price: 0,
  quantity: 0 
  }],
  addToCart: () =>{},
  removeFromCart: ()=>{},
  getCart: ()=>{}
});

export default CartContext;