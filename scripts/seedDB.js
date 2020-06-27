const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/vendorhall" //name database
);

const productSeed = [
  {
    name: "A Cat",
    description: "This is a nice cat",
    price: 25,
    quantity: 1,
    image:"https://i.imgur.com/0LINzxs.jpg",
    user:"5eebe09df2d6e5df709e8e64"
  },
  {
    name: "A Dog",
    description: "This is a large dog",
    price: 30,
    quantity: 1,
    image:"https://i.imgur.com/Whf10Sd.png",
    user:"5eebe09df2d6e5df709e8e64"
  },
  {
    name: "A shirt",
    description: "This is a quirky shirt",
    price: 15,
    quantity: 10,
    image:"https://i.imgur.com/05kFTos.jpg",
    user:"5eebe09df2d6e5df709e8e66"
  },
  {
    name: "Jeans",
    description: "Regular blue Jeans",
    price: 20,
    quantity: 10,
    image:"https://i.imgur.com/uJmJty2.jpg",
    user:"5eebe09df2d6e5df709e8e66"
  },

  {
    name: "Mustang",
    description: "Vroom fast car",
    price: 300,
    quantity: 2,
    image:"https://i.imgur.com/VKq4ME2.jpg",
    user:"5eebe09df2d6e5df709e8e65"
  },
  {
    name: "Camaro",
    description: "Better than a Mustang",
    price: 500,
    quantity: 1,
    image:"https://i.imgur.com/ciOmTnu.jpg",
    user:"5eebe09df2d6e5df709e8e65"
  },
];

const userSeed = [
  {
    username: "yours@example.com",
    auth_id: "auth0|5eeb6410129c430bebd1cfc2",
    products:[]
  },
  {
    username: "Nate Farrey",
    auth_id: "auth0|5eeacbcc357c150b6c22ea4a",
    products:[]
  },
  {
    username: "sylviadiane69@gmail.com",
    auth_id: "auth0|5eeac76f357c150b6c22ea2f",
    products:[]
  }
];

// db.User
//   .remove({})
//   .then(() => db.User.collection.insertMany(userSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

db.Products
  .remove({})
  .then(() => db.Products.collection.insertMany(productSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
