import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from "./state/store"
import { Auth0Provider } from "@auth0/auth0-react";

const authDomain = process.env.REACT_APP_AUTH0_DOMAIN;
const authClient = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <Auth0Provider
    domain={authDomain}
    clientId={authClient}
    redirectUri={window.location.origin}
    >
    <Provider store={store}>
      <App />
    </Provider>,
  </Auth0Provider>,
  document.getElementById('root'))
