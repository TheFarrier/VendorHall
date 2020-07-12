import React, { createContext, useReducer, useContext } from "react";

const CartContext = createContext();
const { Provider } = CartContext;

const reducer = (state, action) => {
  switch (action.type) {
  case "addToCart":
    const request = window.indexedDB.open("shoppingCart", 1);

    request.onupgradeneeded = event => {
      const db = event.target.result;
      
      // Creates an object store with a listID keypath that can be used to query on.
      const shoppingCartStore = db.createObjectStore("shoppingCart", {keyPath: "listID"});
      // Creates a statusIndex that we can query on.
      shoppingCartStore.createIndex("idIndex", "ID"); 
    }

    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction(["shoppingCart"], "readwrite");
      const shoppingCartStore = transaction.objectStore("shoppingCart");
    
      // Adds data to our objectStore
      shoppingCartStore.add({ listID: product._id, name: product.name, price: product.price, image:product.image ,quantity: 1 });
    }
    return
  case "getCart":
    const request = window.indexedDB.open("shoppingCart", 1);
    
    request.onupgradeneeded = event => {
      
      const db = event.target.result;
      
      // Creates an object store with a listID keypath that can be used to query on.
      const shoppingCartStore = db.createObjectStore("shoppingCart", {keyPath: "listID"});
      // Creates a statusIndex that we can query on.
      shoppingCartStore.createIndex("idIndex", "ID");
      console.log("store created")
    }

    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction(["shoppingCart"], "readwrite");
      const shoppingCartStore = transaction.objectStore("shoppingCart");
    
      // Adds data to our objectStore
      const getRequest = shoppingCartStore.getAll()
      getRequest.onsuccess = ()=> {
        return {cart: getRequest.result}
      }
    };
  default:
    throw new Error(`Invalid action type: ${action.type}`);
  }
};

const CartProvider = ({props}) => {
  const [state, dispatch] = useReducer(reducer);

  return <Provider value={[state, dispatch]} {...props} />;
};

const useCartContext = () => {
  return useContext(cartContext);
};

export { CartProvider, useCartContext };
