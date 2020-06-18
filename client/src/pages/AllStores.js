import React, { useState, useEffect } from "react";
import API from "../utils/API";

function StorePage() {
  // Initialize books as an empty array
    const [stores, setStores] = useState([]);

    useEffect(() => {
      API.getStores()
        .then(res => setStores(res.data))
        .catch(err => console.log(err));
    }, [])

    return (
      <div>
        <p>All Stores</p>
        <div>
          {stores.map(store =>(
            <div key={store._id}>
              <p>{store.user}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

export default StorePage;