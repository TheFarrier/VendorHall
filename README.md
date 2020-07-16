# VendorHall

Vendorhall is an ecommerce product hosting site where users can post products for sale. Similar to sites like Etsy, Vendorhall allows for individuals to promote handmade and unique products to shoppers.

Vendorhall uses Auth0 https://auth0.com/ to authenticate users before allowing them access to the site. Payments and the creation of a store account are handled by Stripe https://stripe.com/.

# Test Mode

Vendorhall is currently running in test mode. Stripe integrations will not ask for or store personal information, but creating an account can be simulated by completing the forms with prefilled test info. Similarly, a checkout session can be simulated with credit card number 4242 4242 4242 4242 and any valid expiration date and postal code.
Users who make a test account through the "Become a Vendor" option, and complete the stripe express account creation will be able to name their store and upload products.
Vendorhall does not currently support image hosting, so images for products will need to be submited by url on a separate hosting site.
