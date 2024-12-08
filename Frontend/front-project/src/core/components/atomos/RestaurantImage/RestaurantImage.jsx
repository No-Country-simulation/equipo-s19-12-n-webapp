import { useContext } from "react";
import { Context } from "../../../context/Context";
import styles from "../RestaurantImage/Rest.module.css"

const RestaurantImage = () => {

  const {datosUsuario} = useContext(Context)
  return (
    <div className={styles.contImagenPortada}>
      <div
        className={styles.imagenPortada}
        style={{backgroundImage: "url(../../../../../public/assets/images/pechuga.jpg)"}}
      />
    </div>
  );
};

export default RestaurantImage;
