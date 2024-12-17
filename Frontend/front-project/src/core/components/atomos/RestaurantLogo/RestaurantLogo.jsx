import Logorestaurante from "../../../../assets/images/RestaurantLogo.svg";
import "./RestaurantLogo.css";
import { useContext } from "react";
import { Context } from "../../../context/Context";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";
import Button from "../Button/Button";

const RestaurantLogo = () => {
  const { datosUsuario } = useContext(Context);

  return (
    <div className="contenedorLogoEn">
      <img
        className="img"
        src={datosUsuario.logo}
        alt="Imagen del logo del Restaurante"
      />
      <div className="contenedor-btn-imagen-perfil">
        <PhotoCameraOutlinedIcon
          sx={{
            backgroundColor: "#76B939",
            borderRadius: "50%",
            color: "white",
            border: "8px solid #76B939",
            cursor: "pointer",
          }}
          fontSize="large"
        />
      </div>
    </div>
  );
};

export default RestaurantLogo;
