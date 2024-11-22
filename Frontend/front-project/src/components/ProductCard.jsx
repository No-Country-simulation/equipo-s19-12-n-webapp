import "./ProductCard.css"; // Importa el CSS específico del componente

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button>Agregar al carrito</button>
    </div>
  );
};

export default ProductCard;
