const User = require("./users")
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {type: String},
  description: {type: String},
  price: {type:Number},
  quantity:{type:Number},
  image:{type:String}
})

const storeSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: User}, //reference to user ID from user table
  products:[productSchema]
});

const Store = mongoose.model("Store",storeSchema)

module.exports = Store;