import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Auth0Provider } from './react-auth0-spa';
import { loadStripe } from '@stripe/stripe-js';
import { Elements }  from '@stripe/react-stripe-js'
import config from './auth_config.json';
import history from './utils/history';

const stripePromise = loadStripe('pk_test_51GyhD6JxF3l7n3KAqKpEW0eD1002yA5Su9f1LOMx5MR4V0c0oUEP8Lo5e2uFBgOktYuJSNfrRIlUhPRb1lMcTEtp00C8W3Zb9e')
// A function that routes the user to the right place
// after login
const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname,
  );
};

ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </Auth0Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
