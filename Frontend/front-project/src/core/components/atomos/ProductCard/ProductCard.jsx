import Button from "../Button/Button";
import "./ProductCard.css";
import { Context } from "../../../context/Context";
import { useContext } from "react";

const ProductCard = ({ nombre, img1, img2, img3, img4, precio, id, desc, vencimiento, comerciante, stock, categoria, estado }) => {

  const { setActualProduct, setMenuArticulo } = useContext(Context);

  const options = { 
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  function verArticulo () {
    const nuevoVencimiento = Date.parse(vencimiento);
    const nuevoVencimiento2 = new Date(parseFloat(nuevoVencimiento)).toLocaleDateString("es-ES", options)
    const nuevoVencimiento3 = nuevoVencimiento2.toString()
    setActualProduct({_id: id, nombre: nombre, desc: desc, stock: stock, precio: precio, vencimiento: nuevoVencimiento3, comerciante: comerciante, img1: img1, img2: img2, img3: img3, img4: img4, categoria: categoria, estado: estado})
    setMenuArticulo(1)
  }

  return (
    <div className="product-card">
      <img src={img1} alt={nombre} className="product-image" />
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
          <Button variante={"orange"} texto={"Ver más"} onClick={() => {verArticulo()}}></Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
