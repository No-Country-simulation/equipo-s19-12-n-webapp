import RestaurantImage from "../../atomos/RestaurantImage/RestaurantImage";
import RestaurantLogo from "../../atomos/RestaurantLogo/RestaurantLogo";
import Estrellas from "../../atomos/Estrellas/Estrellas";

import "./RestaurantInfo.css";
import Button from "../../atomos/Button/Button";
import AcercaDe from "../AcercaDe/AcercaDe";

const RestaurantInfo = () => {
  return (
    <div className="container">
      <div className="main">
        <RestaurantImage />
        <RestaurantLogo />
        <h2>El Rincón Tropical</h2>
        <Estrellas />
        <div className="row">
          <h3>CUIT: 26145127</h3>
          <Button
            texto={"Abierto"}
            variante={"black"}
          />
        </div>
        <AcercaDe />
      </div>
    </div>
  );
};

export default RestaurantInfo;
