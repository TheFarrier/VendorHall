const router = require('express').Router();
const productController = require('../../controllers/productController');

// Matches with "/api/products"
router.route('/')
  .get(productController.findAllProducts)
  .post(productController.createProduct);

// Matches with "/api/products/:id"
router.route('/:id')
  .get(productController.findProduct)
  .put(productController.updateProduct)
  .delete(productController.removeProduct);


module.exports = router;