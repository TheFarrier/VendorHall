const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://TheFarrier:Vendorhall1@ds233551.mlab.com:33551/heroku_7wqdtxx6"
  );

const productSeed = [
  {
    _id: mongoose.Types.ObjectId("5ef401e30b6a7b5e40b2416e"),
    name: "Hummingbird Notebook",
    description: "A 40 page ruled notebook with handpainted cover. Use this as a dream journal or to document your hikes!",
    price: 25,
    quantity: 1,
    image:"https://i.etsystatic.com/14335962/r/il/4c9a10/1718166118/il_794xN.1718166118_kf8n.jpg",
    vendor:mongoose.Types.ObjectId("5eebe09df2d6e5df709e8e64")
  },
  {
    _id: mongoose.Types.ObjectId("5ef401e30b6a7b5e40b2416f"),
    name: "Emily's Journal",
    description: "The perfect gift for the Emily in your life. 30 page ruled with hand painted cover.",
    price: 30,
    quantity: 1,
    image:"https://i.etsystatic.com/8126753/r/il/5ab2fa/1620891961/il_570xN.1620891961_5b55.jpg",
    vendor:mongoose.Types.ObjectId("5eebe09df2d6e5df709e8e64")
  },
  {
    _id: mongoose.Types.ObjectId("5ef401e30b6a7b5e40b24170"),
    name: "Pearl Pendant",
    description: "Handmade copper pendant with mock peral center.",
    price: 45,
    quantity: 10,
    image:"https://i.imgur.com/4Z5PBTm.jpeg",
    vendor:mongoose.Types.ObjectId("5eebe09df2d6e5df709e8e66")
  },
  {
    _id: mongoose.Types.ObjectId("5ef401e30b6a7b5e40b24171"),
    name: "Heart Charm Bracelete",
    description: "A beautiful bead bracelet for young girls.",
    price: 10,
    quantity: 10,
    image:"https://i.imgur.com/ezVvhVf.jpg",
    vendor:mongoose.Types.ObjectId("5eebe09df2d6e5df709e8e66")
  },
  {
    _id: mongoose.Types.ObjectId("5ef401e30b6a7b5e40b24175"),
    name: "Silver Shell Bracelete",
    description: "A charm bracelete made from recycled spoons.",
    price: 20,
    quantity: 10,
    image:"https://i.imgur.com/PaHLj4W.jpeg",
    vendor:mongoose.Types.ObjectId("5eebe09df2d6e5df709e8e66")
  },
  {
    _id: mongoose.Types.ObjectId("5ef401e30b6a7b5e40b24172"),
    name: "Comicbook Dress",
    description: "A handmade dress of comic book covers. Featuring the Flash and Green Lantern",
    price: 70,
    quantity: 2,
    image:"https://i.imgur.com/eAXqq5F.jpeg",
    vendor: mongoose.Types.ObjectId("5eebe09df2d6e5df709e8e65")
  },
  {
    _id: mongoose.Types.ObjectId("5ef401e30b6a7b5e40b24173"),
    name: "Pink Polka Dot Dress",
    description: "A Handmade pink dress with a white polka dot patter",
    price: 500,
    quantity: 1,
    image:"https://i.imgur.com/uQMUHNJ.jpg",
    vendor: mongoose.Types.ObjectId("5eebe09df2d6e5df709e8e65")
  },
];

const userSeed = [
  {
    _id: mongoose.Types.ObjectId("5eebe09df2d6e5df709e8e64"),
    name: "Nikki's Notebooks",
    description:"",
    auth_id: "",
    stripe_id: "",
    products:[mongoose.Types.ObjectId("5ef401e30b6a7b5e40b2416e"),mongoose.Types.ObjectId("5ef401e30b6a7b5e40b2416f")]
  },
  {
    _id: mongoose.Types.ObjectId("5eebe09df2d6e5df709e8e65"),
    name: "Cool Threads",
    auth_id: "auth0|5eeacbcc357c150b6c22ea4a",
    products:[mongoose.Types.ObjectId("5ef401e30b6a7b5e40b24173"),mongoose.Types.ObjectId("5ef401e30b6a7b5e40b24172")]
  },
  {
    _id: mongoose.Types.ObjectId("5eebe09df2d6e5df709e8e66"),
    name: "The Joyous Jeweler",
    auth_id: "auth0|5eeac76f357c150b6c22ea2f",
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
