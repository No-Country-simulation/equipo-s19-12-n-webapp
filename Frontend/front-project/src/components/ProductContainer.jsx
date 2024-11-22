import ProductCard from "./ProductCard";
import "./ProductContainer.css"; // Importa el CSS específico del componente

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
