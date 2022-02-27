import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <Auth0Provider
    domain="hacknyu.jp.auth0.com"
    clientId="alqlsr2XUTxw7cjdbjJiIhl40MVm6EGo"
    redirectUri="http://localhost:3000/"
  >
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Auth0Provider>,
  document.getElementById("root")
);
