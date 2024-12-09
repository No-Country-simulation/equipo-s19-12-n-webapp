import Texto from "../../atomos/Textos/Texto";
import "./MainSection5.css";
import Carrefour from "../../../../assets/images/carrefour.svg";
import Jumbo from "../../../../assets/images/jumbo.svg";
import ChangoMas from "../../../../assets/images/changomas.svg";
import Dia from "../../../../assets/images/dia.svg";
import Disco from "../../../../assets/images/disco.svg";
import Vea from "../../../../assets/images/vea.svg";

const MainSection5 = () => {
  return (
    <div className="main5-container">
      <div className="contTituloNegociosAderidos">
        Tiendas que se sumaron al cambio
      </div>
      <div className="seccion-tiendas">
        <img
          src={Carrefour}
          alt="imagen de carrefour"
        />
        <img
          src={Jumbo}
          alt="imagen de jumbo"
        />
        <img
          src={ChangoMas}
          alt="imagen de changomas"
        />
        <img
          src={Dia}
          alt="imagen de dia"
        />
        <img
          src={Disco}
          alt="imagen de disco"
        />
        <img
          src={Vea}
          alt="imagen de vea"
        />
      </div>
    </div>
  );
};

export default MainSection5;
