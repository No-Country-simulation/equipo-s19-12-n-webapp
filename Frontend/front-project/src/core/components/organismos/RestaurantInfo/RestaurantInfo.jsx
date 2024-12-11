import RestaurantImage from "../../atomos/RestaurantImage/RestaurantImage";
import RestaurantLogo from "../../atomos/RestaurantLogo/RestaurantLogo";
import Estrellas from "../../atomos/Estrellas/Estrellas";
import { useContext } from "react";
import { Context } from "../../../context/Context";
import "./RestaurantInfo.css";
import PestañasPerfil from "../PestañasPerfil/PestañasPerfil";

const RestaurantInfo = () => {
  const { datosUsuario, setAllProductsComerciante } = useContext(Context);
  console.log(datosUsuario);

  fetch(
    `https://eaty-three.vercel.app/api/productos/busqueda-por-comerciante/${datosUsuario.cuit}`,
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
      setAllProductsComerciante(data);
    });

  return (
    <div className="container">
      <div className="main">
        <RestaurantImage />
        <RestaurantLogo />
        <h2>{datosUsuario.nombre}</h2>
        <div className="row-estrellas">
          <h3>4.0</h3>
          <Estrellas />
          <h3>1 reseña</h3>
        </div>
        <div className="cuit-row">
          <h3>CUIT: {datosUsuario.cuit}</h3>
          <button className="botonAbiertoCerrado">Abierto</button>
        </div>
        <PestañasPerfil />
      </div>
    </div>
  );
};

export default RestaurantInfo;
