import "./CartItem.style.sass";

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name}></img>
      <h2>{name}</h2>
      <span>{quantity}</span>
    </div>
  );
};

export default CartItem;
