const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const Stripe = require('stripe');
const Axios  = require("axios");

const stripe = Stripe('sk_test_51GyhD6JxF3l7n3KAjT3zZwrXPTzUKJ87DQ1OpU6H4sKVv0ypqTxseixSN6L61HYF7DiGuzTiHIEsg1QGRv96F8Or00EeNRcztY')
// API Routes
router.use("/api", apiRoutes);

router.post("/checkout", async (req, res)=>{
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: req.body,
    mode: 'payment',
    success_url: 'https://vendorhall.herokuapp.com/',
    cancel_url: 'https://vendorhall.herokuapp.com/',
  });
  res.json({session_id: session.id})
})

router.get("/stripeinfo", (req, res)=>{
  return res.json({
    client_id: "ca_HYehoVsWJzZ8Beqd5iOkfdGjQ4Yz6VEG",
    stateValue: "sv_53124"
  })
})

router.get("/connect/oauth", async (req, res) => {
  console.log("---Route HIT")
  const { code, state } = req.query;

  if(!stateMatches(state)) {
    return res.status(403).json({ error: 'Incorrect state parameter: ' + state });
  }
  // Send the authorization code to Stripe's API.
  stripe.oauth.token({
    grant_type: 'authorization_code',
    code
  }).then(
    (response) => {
      var connected_account_id = response;
      saveAccountId(connected_account_id);

      // Render some HTML or redirect to a different page.
      return res.redirect(`https://vendorhall.herokuapp.com/vendor/${connected_account_id.stripe_user_id}`);
    },
    (err) => {
      if (err.type === 'StripeInvalidGrantError') {
        return res.status(400).json({error: 'Invalid authorization code: ' + code});
      } else {
        return res.status(500).json({error: 'An unknown error occurred.'});
      }
    }
  );
});

const stateMatches = (state_parameter) => {
  // Load the same state value that you randomly generated for your OAuth link.
  const saved_state = 'sv_53124';

  return saved_state == state_parameter;
}

const saveAccountId = async (id) => {
  // Save the connected account ID from the response to your database.
  console.log('Connected account ID: '+ id.stripe_user_id);
  let account = await stripe.accounts.retrieve(id.stripe_user_id)
  console.log(account)
}


// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
