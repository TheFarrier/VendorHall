import axios from 'axios';

export default {
  // Gets user with given id
  getUser(id) {
    return axios.get(`/api/user/${id}`);
  },
  // Saves a user to the database
  createUser(userData) {
    return axios.post('/api/user/', userData);
  },
  // Updates user info by given id
  updateUser(updateData) {
    return axios.put('/api/user/', updateData);
  },
  // Deletes user with given id
  deleteUser(id) {
    return axios.delete(`/api/user/${id}`);
  },

  // Gets all stores
  getAllProducts() {
    return axios.get('/api/products');
  },
  // Gets the stores with the given id
  createProduct(productData) {
    return axios.post('/api/products/', productData);
  },
  // Gets all stores
  getProduct(id) {
    return axios.get(`/api/products/${id}`);
  },
  // Updates stores with given id
  updateProduct(id, updateData) {
    return axios.put(`/api/products/${id}`, updateData);
  },
  // Deletes the stores with the given id
  deleteProduct(id) {
    return axios.delete(`/api/products/${id}`);
  },
  // Saves a store to the database
  getUserProducts(id) {
    return axios.get(`/api/user/products/${id}`);
  },

  createSession(cart) {
    return axios.post(`/checkout`, cart);
  },
  getStripeInfo(){
    return axios.get('/stripeinfo')
  }
};
