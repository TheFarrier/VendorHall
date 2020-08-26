# VendorHall

Vendorhall is an ecommerce product hosting site where users can post products for sale. Similar to sites like Etsy, Vendorhall allows for individuals to promote handmade and unique products to shoppers.

Vendorhall uses Auth0 https://auth0.com/ to authenticate users before allowing them access to the site. Payments and the creation of a store account are handled by Stripe https://stripe.com/.

After logging in, users can browse products for purchase from registereed vendors, or choose to become a vendor themselves and upload products. These options can be found in by clicking the user dropdown icon.

![Stripe Checkout](https://i.gyazo.com/a6b8e22a54c7c2534ffc33b6574296ad.png)

# Test Mode

Vendorhall is currently running in test mode. Stripe integrations will not ask for or store personal information, but creating an account can be simulated by completing the forms with prefilled test info. 

![Vendor Registration](https://i.gyazo.com/3b6e15db070a8e423610522861446f35.png)

Users who make a test account through the "Become a Vendor" option, and complete the stripe express account creation will be able to name their store and upload products. Vendorhall does not currently support image hosting, so images for products will need to be submited by url on a separate hosting site. Similarly, a checkout session can be simulated with credit card number 4242 4242 4242 4242 and any valid expiration date and postal code.

![Stripe Checkout](https://i.gyazo.com/9b59e8e0ea4dabe7260818f938225ca0.png)

# Database Usage

Sensitive user data is handled entirely by our 3rd-party APIs Auth0 and Stripe. Vendorhall's database only stores the neccessary data to link vendors' Auth0 and Stripe accounts, as well product data submitted by vendors.

# Technologies Used

React, JSX, with React-Bootstrap frontend

Axios for API call handling

Express, Mongoose/MongoDB backend (Currently using mLabs, but will be migrated)

Stripe-js for handling payments

Auth0 for handling login and user authentication
