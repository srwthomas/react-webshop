import { useContext } from "react";

import { CategoriesContext } from "../../contexts/Categories.context";

import CategoryPreview from "../../components/CategoryPreview/CategoryPreview.component";

import "./Shop.styles.sass";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};

export default Shop;
