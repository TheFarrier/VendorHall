const router = require('express').Router();

const stripe = require('stripe')('sk_test_51GyhD6JxF3l7n3KAjT3zZwrXPTzUKJ87DQ1OpU6H4sKVv0ypqTxseixSN6L61HYF7DiGuzTiHIEsg1QGRv96F8Or00EeNRcztY');

const session = await stripe.checkout.sessions.create({
  payment_method_types: ['card'],
  line_items: [{
    price_data: {
      currency: 'usd',
      product_data: {
        name: 'T-shirt',
      },
      unit_amount: 2000,
    },
    quantity: 1,
  }],
  mode: 'payment',
  success_url: 'https://example.com/success?session_id={CHECKOUT_SESSION_ID}',
  cancel_url: 'https://example.com/cancel',
});

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