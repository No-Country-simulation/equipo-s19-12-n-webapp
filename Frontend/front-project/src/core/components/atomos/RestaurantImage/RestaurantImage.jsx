import { useContext } from "react";
import { Context } from "../../../context/Context";
import styles from "../RestaurantImage/Rest.module.css";
import Button from "../Button/Button";
import "./RestaurantImage.css";

const RestaurantImage = () => {
  const { datosUsuario } = useContext(Context);
  return (
    <div className={styles.contImagenPortada}>
      <div className={styles.imagenPortada} style={{backgroundImage: `url(${datosUsuario.img1})`}}></div>
    </div>
  );
};

export default RestaurantImage;
