import Button from "../Button/Button";
import "./ProductCard.css";
import { Context } from "../../../context/Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({
  style,
  nombre,
  img1,
  img2,
  img3,
  img4,
  precio,
  off,
  id,
  desc,
  vencimiento,
  comerciante,
  stock,
  categoria,
  estado,
}) => {
  const { setActualProduct, setMenuArticulo, setDetallesComerciante } =
    useContext(Context);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const navigate = useNavigate();

  function verArticulo() {
    const nuevoVencimiento = Date.parse(vencimiento);
    const nuevoVencimiento2 = new Date(
      parseFloat(nuevoVencimiento)
    ).toLocaleDateString("es-ES", options);
    const nuevoVencimiento3 = nuevoVencimiento2.toString();

    setActualProduct({
      _id: id,
      nombre: nombre,
      off: off,
      desc: desc,
      stock: stock,
      precio: precio,
      vencimiento: nuevoVencimiento3,
      comerciante: comerciante,
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
      categoria: categoria,
      estado: estado,
    });
    navigate("/productos/articulo");

    fetch(
      `https://eaty-three.vercel.app/api/comerciante/detallesVendedor/${comerciante}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDetallesComerciante(data);
      });
  }

  return (
    <div
      className="product-card"
      style={style}
    >
      <img
        src={img1}
        alt={nombre}
        className="product-image"
      />
      <div className="discountC">OFF {off}%</div>
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
          <Button
            variante={"orange"}
            texto={"Ver más"}
            onClick={() => {
              verArticulo();
            }}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
