// const request = window.indexedDB.open("shoppingCart", 1);

// // Create schema
// request.onupgradeneeded = event => {
//   const db = event.target.result;
  
//   // Creates an object store with a listID keypath that can be used to query on.
//   const shoppingCartStore = db.createObjectStore("shoppingCart", {keyPath: "listID"});
//   // Creates a statusIndex that we can query on.
//   shoppingCartStore.createIndex("idIndex", "ID"); 
// }

// // Opens a transaction, accesses the shoppingCart objectStore and idIndex.
// request.onsuccess = () => {
//   const db = request.result;
//   const transaction = db.transaction(["shoppingCart"], "readwrite");
//   const shoppingCartStore = transaction.objectStore("shoppingCart");
//   const statusIndex = shoppingCartStore.index("idIndex");

//   // Adds data to our objectStore
//   shoppingCartStore.add({ listID: "1", ID: "complete" });
//   shoppingCartStore.add({ listID: "2", ID: "in-progress" });
//   shoppingCartStore.add({ listID: "3", ID: "complete" });
//   shoppingCartStore.add({ listID: "4", ID: "backlog" });
  
//   // Return an item by keyPath
//   const getRequest = shoppingCartStore.get("1");
//   getRequest.onsuccess = () => {
//     console.log(getRequest.result);
//   };

//   // Return an item by index
//   const getRequestIdx = statusIndex.getAll("complete");
//   getRequestIdx.onsuccess = () => {
//     console.log(getRequestIdx.result); 
//   }; 
// };

export default {

  openDB () {
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
        // console.log(getRequest.result)
        return getRequest.result
      }
    }
  },

  addToCart (product) {
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
      console.log(product)
    }
  },

  removeFromCart (product) {
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
      shoppingCartStore.delete({ listID: product._id});
      console.log(product)
    }
  }
}