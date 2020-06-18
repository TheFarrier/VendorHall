const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/vendorhall" //name database
);

const storeSeed = [
  {
    user: "5eea6d7dde1afbd16c227b50",
    products: [
      {
        name: "A Cat",
        description: "This is a nice cat",
        price: 25,
        quantity: 1,
        image:"https://i.imgur.com/0LINzxs.jpg"
      },
      {
        name: "A Dog",
        description: "This is a large dog",
        price: 30,
        quantity: 1,
        image:"https://i.imgur.com/Whf10Sd.png"
      },
    ]
  },
  {
    user: "5eea6d7dde1afbd16c227b51",
    products: [
      {
        name: "A shirt",
        description: "This is a quirky shirt",
        price: 15,
        quantity: 10,
        image:"https://i.imgur.com/05kFTos.jpg"
      },
      {
        name: "Jeans",
        description: "Regular blue Jeans",
        price: 20,
        quantity: 10,
        image:"https://i.imgur.com/uJmJty2.jpg"
      },
    ]
  },
  {
    user: "5eea6d7dde1afbd16c227b52",
    products: [
      {
        name: "Mustang",
        description: "Vroom fast car",
        price: 300,
        quantity: 2,
        image:"https://i.imgur.com/VKq4ME2.jpg"
      },
      {
        name: "Camaro",
        description: "Better than a Mustang",
        price: 500,
        quantity: 1,
        image:"https://i.imgur.com/ciOmTnu.jpg"
      },
    ]
  }
];

const userSeed = [
  {
    username: "ToddHoward",
    email: "TDogg@gmail.com",
    password:"PasswordTodd",
    avatarUrl:"https://i.imgur.com/O9Wmyek.jpg"
  },
  {
    username: "Greggie123",
    email: "Gregorym@yahoo.com",
    password:"PasswordGreg",
    avatarUrl:""
  },
  {
    username: "Carboy6000",
    email: "CamaroMan@gmail.com",
    password:"PasswordCar",
    avatarUrl:"https://i.imgur.com/rnSyGHP.jpg"
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
