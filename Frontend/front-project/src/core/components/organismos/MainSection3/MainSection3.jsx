import Button from "../../atomos/Button/Button";
import MainSubtitleTablet from "../../atomos/MainSubtitleTablet/MainSubtitleTablet";
import MainTitleTablet from "../../atomos/MainTitleTablet/MainTitleTablet";
import bolsaVerde from "../../../../assets/images/bolsa-verde.svg";
import "./MainSection3.css";

const MainSection3 = () => {
  return (
    <div className="contenedor-seccion-3">
      <div className="main3-text-content">
        <img
          src={bolsaVerde}
          alt="imagen de bolsa verde"
          className="main3-imagen-bolsa"
        />
        <MainTitleTablet />
        <MainSubtitleTablet />
        <div className="mainsection3-btn-tablet">
          <Button
            variante={"orange"}
            texto={"Reservá ahora"}
          />
        </div>
      </div>
    </div>
  );
};

export default MainSection3;
