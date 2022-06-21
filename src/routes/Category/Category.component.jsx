import { useParams } from "react-router-dom";

import { useContext, useState, useEffect } from "react";

import { CategoriesContext } from "../../contexts/Categories.context";

import ProductCard from "../../components/ProductCard/ProductCard.component";

import { CategoryContainer, CategoryTitle } from "./Category.style.jsx";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </>
  );
};

export default Category;
