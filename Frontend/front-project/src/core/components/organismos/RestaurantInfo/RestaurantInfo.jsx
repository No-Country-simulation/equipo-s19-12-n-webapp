import RestaurantImage from "../../atomos/RestaurantImage/RestaurantImage";
import RestaurantLogo from "../../atomos/RestaurantLogo/RestaurantLogo";
import Estrellas from "../../atomos/Estrellas/Estrellas";

import "./RestaurantInfo.css";
import Button from "../../atomos/Button/Button";
import PestañasPerfil from "../PestañasPerfil/PestañasPerfil";

const RestaurantInfo = () => {
  return (
    <div className="container">
      <div className="main">
        <RestaurantImage />
        <RestaurantLogo />
        <h2>El Rincón Tropical</h2>
        <div className="row-estrellas">
          qqqq
          <Estrellas />
          wwww
        </div>

        <div className="row">
          <h3>CUIT: 26145127</h3>
          <div className="btn-info-container">
            <Button
              texto={"Abierto"}
              variante={"black"}
            />
          </div>
        </div>
        <PestañasPerfil />
      </div>
    </div>
  );
};

export default RestaurantInfo;
