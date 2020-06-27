const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router.route("/")
  .post(userController.registerUser)
  .put(userController.updateUser)

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(userController.findUser)
  .delete(userController.removeUser)

router.route("/products/:id")
  .get(userController.findUserProducts)



module.exports = router;
