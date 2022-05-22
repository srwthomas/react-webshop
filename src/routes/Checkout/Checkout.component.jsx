import { useContext } from "react";

import { CartContext } from "../../contexts/Cart.context";

import CheckoutItem from "../../components/CheckoutItem/CheckoutItem.component";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div>
      <h1>CHECKOUT</h1>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
    </div>
  );
};

export default Checkout;
