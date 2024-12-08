import Logorestaurante from "../../../../assets/images/RestaurantLogo.svg";
import "./RestaurantLogo.css";
import { useContext } from "react";
import { Context } from "../../../context/Context";

const RestaurantLogo = () => {

  const {datosUsuario} = useContext(Context)

  return (
    <img
      className="img"
      src={datosUsuario.logo}
      alt="Imagen del logo del Restaurante"
    />
  );
};

export default RestaurantLogo;
