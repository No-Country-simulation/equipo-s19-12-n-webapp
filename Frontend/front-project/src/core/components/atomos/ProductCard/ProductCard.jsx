import Button from "../Button/Button";
import "./ProductCard.css";
import ImgCategorias from "../ImgCategorias/ImgCategorias";

const ProductCard = ({ nombre, img, precio }) => {
  return (
    <div className="product-card">
      <img src={img} alt={nombre} className="product-image" />
      <div className="contDataCard">
        <div className="contDataCardDetails">
          <div className="contDataCardProducto">
            <h3>{nombre}</h3>
          </div>
          <div className="contDataCardProducto">
            <p className="precioAnterior">${parseInt(precio) * 1.5}</p>
            <p className="precioActual">${precio}</p>
          </div>
        </div>
        <div className="contDataCardProducto2">
          <Button variante={"orange"} texto={"Agregar al carrito"}></Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
