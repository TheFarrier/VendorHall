const router = require("express").Router();
const storeController = require("../../controllers/storeController");

// Matches with "/api/stores"
router.route("/")
  .get(storeController.findAllStores)
  .post(storeController.createStore);

// Matches with "/api/stores/:id"
router.route("/:id")
  .get(storeController.findStore)
  .put(storeController.updateStore)
  .delete(storeController.removeStore);

module.exports = router;
