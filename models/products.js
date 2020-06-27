const mongoose = require("mongoose").set('debug',true);
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {type: String},
  description: {type: String},
  price: {type:Number},
  quantity:{type:Number},
  image:{type:String},
  vendor:{type:Schema.Types.ObjectId, ref:"User"}
})


const Product = mongoose.model("Product",productSchema)

module.exports = Product;