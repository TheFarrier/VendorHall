import axios from "axios";

export default {
  // Gets user with given id
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },
  // Saves a user to the database
  createUser: function(userData) {
    return axios.post("/api/user/", userData);
  },
  // Updates user info by given id
  updateUser: function(id, updateData) {
    return axios.put("/api/user/" + id, updateData);
  },
  // Deletes user with given id
  deleteUser: function(id) {
    return axios.delete("/api/user/" + id);
  },

  // Gets all stores
  getAllProducts: function() {
    return axios.get("/api/products");
  },
  // Gets the stores with the given id
  createProduct: function(productData) {
    return axios.post("/api/products/", productData);
  },
  // Gets all stores
  getProduct: function(id) {
    return axios.get("/api/products" + id);
  },
  // Updates stores with given id
  updateProduct: function(id, updateData) {
    return axios.put("/api/products/" + id, updateData);
  },
  // Deletes the stores with the given id
  deleteProduct: function(id) {
    return axios.delete("/api/products/" + id);
  },
  // Saves a store to the database
  getUserProducts: function(id) {
    return axios.get("/api/products/user/" + id);
  }
};
