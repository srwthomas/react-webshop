import { useContext } from "react";

import { CartContext } from "../../contexts/Cart.context";

import { Button } from "../Button/Button.component";
import CartItem from "../CartItem/CartItem.component";

import "./CartDropdown.style.sass";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
