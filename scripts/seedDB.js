const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/vendorhall" //name database
);

const storeSeed = [
  {
    user: "5ee97cb874b5755e048e32cf",
    store: [
      {
        name: "A Cat",
        description: "This is a nice cat",
        price: 25,
        quantity: 1
      },
      {
        name: "A Dog",
        description: "This is a large dog",
        price: 30,
        quantity: 1
      },
    ]
  },
  {
    user: "5ee97cb874b5755e048e32d0",
    store: [
      {
        name: "A shirt",
        description: "This is a quirky shirt",
        price: 15,
        quantity: 10
      },
      {
        name: "Jeans",
        description: "Regular blue Jeans",
        price: 20,
        quantity: 10
      },
    ]
  },
  {
    user: "5ee97cb874b5755e048e32d1",
    store: [
      {
        name: "Mustang",
        description: "Vroom fast car",
        price: 300,
        quantity: 2
      },
      {
        name: "Camaro",
        description: "Better than a Mustang",
        price: 500,
        quantity: 1
      },
    ]
  }
];

const userSeed = [
  {
    username: "ToddHoward",
    email: "TDogg@gmail.com",
    password:"PasswordTodd"
  },
  {
    username: "Greggie123",
    email: "Gregorym@yahoo.com",
    password:"PasswordGreg"
  },
  {
    username: "Carboy6000",
    email: "CamaroMan@gmail.com",
    password:"PasswordCar"
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

  db.Store
  .remove({})
  .then(() => db.Store.collection.insertMany(storeSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });