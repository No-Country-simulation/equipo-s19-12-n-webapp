import Button from "../Button/Button";
import "./ProductCard.css";
import { Context } from "../../../context/Context";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useInView } from 'framer-motion';

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
  const { setActualProduct, setPanelPerfil, setMenuArticulo, setDetallesComerciante, usuario } = useContext(Context);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const navigate = useNavigate();
  const ref01 = useRef(null);
  const isInView = useInView(ref01, { once: false });

  async function editarProducto () {
    const nuevoVencimiento = Date.parse(vencimiento);
    const nuevoVencimiento2 = new Date(
      parseFloat(nuevoVencimiento)
    ).toLocaleDateString("es-ES", options);
    const nuevoVencimiento3 = nuevoVencimiento2.toString();

    await setActualProduct({
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
    await setPanelPerfil(2);
  }

  function eliminarProducto (){
    fetch(
      `https://eaty-three.vercel.app/api/productos/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json",
        },
      }
    )
  }

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
      style={{scale: isInView ? "1" : "0.95", opacity: isInView ? 1 : 0, transition: "all 0.6s ease-out"}}
    >
      <img
        src={img1}
        alt={nombre}
        className="product-image"
        ref={ref01}
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
          {usuario === "comerciante" ? <div className="contBotonesEditarProducto">
            <div className="contBotonEditarProducto">
              <Button variante={"orange"} texto={"Editar"} onClick={() => editarProducto()}></Button>
            </div>
            <div className="contimagenPapeleraB" onClick={() => eliminarProducto()}>
              <img src="/assets/images/papelera.png" alt="" />
            </div>
          </div> :
          <Button
            variante={"orange"}
            texto={"Ver más"}
            onClick={() => {
              verArticulo();
            }}
          ></Button>}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
