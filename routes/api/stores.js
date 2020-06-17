const router = require("express").Router();
const storeController = require("../../controllers/storeController");

// Matches with "/api/products"
router.route("/")
  .get(storeController.findAllStores)
  .post(storeController.createStore);

// Matches with "/api/products/:id"
router
  .route("/:id")
  .get(storeController.findStoreByUserId)
  .put(storeController.updateStore)
  .delete(storeController.removeStore);

module.exports = router;
