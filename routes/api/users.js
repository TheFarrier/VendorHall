const router = require("express").Router();
const userController = require("../../controllers/userController");
const productController = require("../../controllers/productController")

// Matches with "/api/products"
router.route("/")
  .post(userController.registerUser);

// Matches with "/api/products/:id"
router
  .route("/:id")
  .get(userController.findUser)
  .put(userController.updateUser)
  .delete(userController.removeUser);



module.exports = router;
