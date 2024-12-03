import Logorestaurante from "../../../../assets/images/RestaurantLogo.svg";
import "./RestaurantLogo.css";

const RestaurantLogo = () => {
  return (
    <img
      className="img"
      src={Logorestaurante}
      alt="Imagen del logo del Restaurante"
    />
  );
};

export default RestaurantLogo;
