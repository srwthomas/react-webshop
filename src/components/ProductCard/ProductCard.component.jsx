import { useContext } from "react";

import { CartContext } from "../../contexts/Cart.context";

import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button.component";

import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "./ProductCard.style.jsx";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}-img`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
