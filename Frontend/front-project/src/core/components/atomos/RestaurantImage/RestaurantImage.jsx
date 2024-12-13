import { useContext } from "react";
import { Context } from "../../../context/Context";
import styles from "../RestaurantImage/Rest.module.css";
import Button from "../Button/Button";
import "./RestaurantImage.css";

const RestaurantImage = () => {
  const { datosUsuario } = useContext(Context);
  return (
    <div className={styles.contImagenPortada}>
      <div
        className={styles.imagenPortada}
        style={{
          backgroundImage:
            "url(../../../../../public/assets/images/pechuga.jpg)",
        }}
      >
        {/*<div className="contenedor botones-row">
          <div className="contenedor-botones">
            <div className="contenedor-btn-portada">
              <Button
                variante={"white"}
                texto={"Cambiar foto de portada"}
              />
            </div>
            <div className="contenedor-btn-informacion">
              <Button
                variante={"black"}
                texto={"Completar información"}
              />
            </div>
          </div>
        </div>*/}
      </div>
    </div>
  );
};

export default RestaurantImage;
