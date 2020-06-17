const User = require("./users")
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storeSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: User}, //reference to user ID from user table
  store:[productSchema]
});

const productSchema = new Schema({
  name: {type: String},
  description: {type: String},
  price: {tpye:Number},
  quantity:{type:Number}
})

const Store = mongoose.model("Store",storeSchema)

module.exports = Store;