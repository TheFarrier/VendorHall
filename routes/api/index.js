const router = require("express").Router();
const storeRoutes = require("./stores");
const userRoutes = require("./users");

// product routes
router.use("/stores", storeRoutes);
router.use("/user", userRoutes);

module.exports = router;