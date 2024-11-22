import ProductCard from "../../atomos/ProductCard/ProductCard";
import "./ProductContainer.css";

const ProductContainer = ({ products }) => {
  return (
    <div className="product-container">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductContainer;
