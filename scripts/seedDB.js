const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/vendorhall"
  );

const productSeed = [
  {
    _id: mongoose.Types.ObjectId("5ef401e30b6a7b5e40b2416e"),
    name: "A Cat",
    description: "This is a nice cat",
    price: 25,
    quantity: 1,
    image:"https://i.imgur.com/0LINzxs.jpg",
    vendor:mongoose.Types.ObjectId("5eebe09df2d6e5df709e8e64")
  },
  {
    _id: mongoose.Types.ObjectId("5ef401e30b6a7b5e40b2416f"),
    name: "A Dog",
    description: "This is a large dog",
    price: 30,
    quantity: 1,
    image:"https://i.imgur.com/Whf10Sd.png",
    vendor:mongoose.Types.ObjectId("5eebe09df2d6e5df709e8e64")
  },
  {
    _id: mongoose.Types.ObjectId("5ef401e30b6a7b5e40b24170"),
    name: "A shirt",
    description: "This is a quirky shirt",
    price: 15,
    quantity: 10,
    image:"https://i.imgur.com/05kFTos.jpg",
    vendor:mongoose.Types.ObjectId("5eebe09df2d6e5df709e8e66")
  },
  {
    _id: mongoose.Types.ObjectId("5ef401e30b6a7b5e40b24171"),
    name: "Jeans",
    description: "Regular blue Jeans",
    price: 20,
    quantity: 10,
    image:"https://i.imgur.com/uJmJty2.jpg",
    vendor:mongoose.Types.ObjectId("5eebe09df2d6e5df709e8e66")
  },
  {
    _id: mongoose.Types.ObjectId("5ef401e30b6a7b5e40b24172"),
    name: "Mustang",
    description: "Vroom fast car",
    price: 300,
    quantity: 2,
    image:"https://i.imgur.com/VKq4ME2.jpg",
    vendor: mongoose.Types.ObjectId("5eebe09df2d6e5df709e8e65")
  },
  {
    _id: mongoose.Types.ObjectId("5ef401e30b6a7b5e40b24173"),
    name: "Camaro",
    description: "Better than a Mustang",
    price: 500,
    quantity: 1,
    image:"https://i.imgur.com/ciOmTnu.jpg",
    vendor: mongoose.Types.ObjectId("5eebe09df2d6e5df709e8e65")
  },
];

const userSeed = [
  {
    _id: mongoose.Types.ObjectId("5eebe09df2d6e5df709e8e64"),
    name: "Pet Shop",
    description:"",
    auth_id: "",
    stripe_id: "",
    products:[mongoose.Types.ObjectId("5ef401e30b6a7b5e40b2416e"),mongoose.Types.ObjectId("5ef401e30b6a7b5e40b2416f")]
  },
  {
    _id: mongoose.Types.ObjectId("5eebe09df2d6e5df709e8e65"),
    name: "Car Central",
    auth_id: "",
    products:[mongoose.Types.ObjectId("5ef401e30b6a7b5e40b24173"),mongoose.Types.ObjectId("5ef401e30b6a7b5e40b24172")]
  },
  {
    _id: mongoose.Types.ObjectId("5eebe09df2d6e5df709e8e66"),
    name: "Cool Threads",
    auth_id: "",
    products:[mongoose.Types.ObjectId("5ef401e30b6a7b5e40b24171"),mongoose.Types.ObjectId("5ef401e30b6a7b5e40b24170")]
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

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
