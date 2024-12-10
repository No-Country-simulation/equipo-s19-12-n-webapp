import Texto from "../../atomos/Textos/Texto";
import "./DescripcionComerciante.css";
import { Context } from "../../../context/Context";
import { useContext } from "react";

const DescripcionComerciante = ({ comercianteId }) => {
  const { datosUsuario } = useContext(Context);
  const placeholder = "Ingrese la descripción del negocio";

  return (
    <div className="descripcion-container">
      <div className="descripcion-comerciante">
        <Texto
          level="p"
          texto={datosUsuario.desc || placeholder}
          variante="gray"
        />
      </div>
    </div>
  );
};

export default DescripcionComerciante;
