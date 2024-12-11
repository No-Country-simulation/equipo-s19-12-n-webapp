import RestaurantImage from "../../atomos/RestaurantImage/RestaurantImage";
import RestaurantLogo from "../../atomos/RestaurantLogo/RestaurantLogo";
import Estrellas from "../../atomos/Estrellas/Estrellas";
import { useContext } from "react";
import { Context } from "../../../context/Context";
import "./RestaurantInfo.css";
import PestañasPerfil from "../PestañasPerfil/PestañasPerfil";

const RestaurantInfo = () => {
  const { datosUsuario } = useContext(Context);
  console.log(datosUsuario);

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
