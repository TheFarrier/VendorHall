const router = require("express").Router();
const productRoutes = require("./products");
const userRoutes = require("./users");

// product routes
router.use("/products", productRoutes);
router.use("/user", userRoutes);

module.exports = router;