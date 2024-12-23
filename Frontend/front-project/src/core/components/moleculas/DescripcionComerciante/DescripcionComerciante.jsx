import Texto from "../../atomos/Textos/Texto";
import "./DescripcionComerciante.css";

const DescripcionComerciante = ({ desc }) => {
  const placeholder = "Ingrese la descripción del negocio";

  return (
    <div className="descripcion-container">
      <div className="descripcion-comerciante">
        <div className="desc-texto-0">{desc || placeholder}</div>
      </div>
    </div>
  );
};

export default DescripcionComerciante;
