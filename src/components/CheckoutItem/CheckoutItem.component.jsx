import "./CheckoutItem.style.sass";

const CheckoutItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <div className="checkout-item-container">
      <img src={imageUrl} alt={name} />
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x ${price}
      </span>
    </div>
  );
};

export default CheckoutItem;
