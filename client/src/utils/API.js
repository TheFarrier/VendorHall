import axios from "axios";

export default {
  // Gets user with given id
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },
  // Saves a user to the database
  createUser: function(userData) {
    return axios.get("/api/user/", userData);
  },
  // Updates user info by given id
  updateUser: function(id, updateData) {
    return axios.get("/api/user/" + id, updateData);
  },
  // Deletes user with given id
  deleteUser: function(id) {
    return axios.get("/api/user/" + id);
  },
  // Gets all stores
  getStores: function() {
    return axios.get("/api/stores");
  },
  // Gets the stores with the given id
  getStore: function(id) {
    return axios.get("/api/stores/" + id);
  },
  // Deletes the stores with the given id
  deleteStore: function(id) {
    return axios.delete("/api/stores/" + id);
  },
  // Updates stores with given id
  updateStore: function(id, updateData) {
    return axios.put("/api/stores/" + id, updateData);
  },
  // Saves a store to the database
  makeStore: function(storeData) {
    return axios.post("/api/stores", storeData);
  }
};
