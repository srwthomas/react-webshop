import { useSelector, useDispatch } from "react-redux/es/exports";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";

import Button from "../Button/Button.component";

import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "./ProductCard.style.jsx";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}-img`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}€</Price>
      </Footer>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
