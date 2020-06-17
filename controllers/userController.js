const db = require("../models")

module.exports ={
  registerUser: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findUser: function(req, res) {
    db.User
      .findOne({username:req.params.username, password:req.params.password})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};