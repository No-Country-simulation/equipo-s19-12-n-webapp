import RestaurantImage from "../../atomos/RestaurantImage/RestaurantImage";
import RestaurantLogo from "../../atomos/RestaurantLogo/RestaurantLogo";
import Estrellas from "../../atomos/Estrellas/Estrellas";
import { useContext } from "react";
import { Context } from "../../../context/Context";
import "./RestaurantInfo.css";
import Button from "../../atomos/Button/Button";
import AcercaDe from "../AcercaDe/AcercaDe";

const RestaurantInfo = () => {

  const {datosUsuario} = useContext(Context)

  return (
    <div className="container">
      <div className="main">
        <RestaurantImage />
        <RestaurantLogo />
        <h2>{datosUsuario.nombre}</h2>
        <Estrellas />
        <div className="row">
          <h3>CUIT: {datosUsuario.cuit}</h3>
          <button className="botonAbiertoCerrado">Abierto</button>
        </div>
        <AcercaDe />
      </div>
    </div>
  );
};

export default RestaurantInfo;
