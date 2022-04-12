import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { UserProvider } from "./contexts/User.context";
import { ProductsProvider } from "./contexts/Products.context";
import { CartProvider } from "./contexts/Cart.context";
import App from "./App";

import "./index.sass";

render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
