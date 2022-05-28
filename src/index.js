import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { UserProvider } from "./contexts/User.context";
import { CategoriesProvider } from "./contexts/Categories.context";
import { CartProvider } from "./contexts/Cart.context";
import App from "./App";

import "./index.sass";

render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
