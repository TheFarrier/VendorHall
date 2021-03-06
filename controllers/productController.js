const db = require('../models');

module.exports = {
  findAllProducts: function(req,res) {
    db.Products
      .find(req.query)
      .populate('vendor')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findProduct: function(req, res) {
    db.Products
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  searchProducts: function(req, res) {
    console.log(req.body)
    db.Products
      .find({$or:[
        {name:{$regex: req.body.q, $options: 'i'}},
        {description:{$regex: req.body.q, $options: 'i'}}
      ]})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createProduct: function(req, res) {
    db.Products
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateProduct: function(req, res) {
    db.Products
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeProduct: function(req, res) {
    db.Products
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

};