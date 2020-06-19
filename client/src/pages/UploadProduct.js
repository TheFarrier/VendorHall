import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { useParams } from "react-router-dom";
import { useAuth0 } from "../react-auth0-spa";
import ProductCard from "../components/ProductCard";

function StorePage() {
  // Initialize books as an empty array
    const [formObject, setFormObject] = useState({})
    const [userData, setUserData] = useState({})

    const {id} = useParams()
    const { loading, user} = useAuth0();
    
    useEffect(() => {
      loadUserData()
    }, [])

    if (loading || !user) {
      return <div>Loading...</div>;
    }

    function loadUserData() {
      API.getUser(id)
        .then(res => 
          setUserData(res.data)
        )
        .catch(err => console.log(err));
    };

    function handleInputChange(event) {
      const { name, value } = event.target;
      setFormObject({...formObject, [name]: value})
    };

    function handleFormSubmit(event) {
      event.preventDefault();
      if (formObject.name && formObject.price) {
        API.createProduct({
          name: formObject.name,
          description: formObject.description,
          price: formObject.price,
          quantity: formObject.quantity,
          image: formObject.image,
          user: userData._id
        }).then( res =>
          API.updateUser(
            {$push:{products: res._id}}
          )
        )
          .catch(err => console.log(err));
      }
    }

    return (
      <div>
        <h2>Upload a product listing</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <input className="form-control" onChange={handleInputChange} name="name" placeholder= "name"/>
          </div>
          <div className="form-group">
            <textarea className="form-control" rows="20" onChange={handleInputChange} name="description" placeholder= "description" />
          </div>
          <div className="form-group">-
            <input className="form-control" onChange={handleInputChange} name="price" placeholder= "price"/>
          </div>
          <div className="form-group">-
            <input className="form-control" onChange={handleInputChange} name="quantity" placeholder= "quantity (optional)"/>
          </div>
          <div className="form-group">
            <input className="form-control" onChange={handleInputChange} name="image" placeholder= "image url"/>
          </div>
          <button onClick={handleFormSubmit} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    );
  }

export default StorePage;