import Texto from "../../atomos/Textos/Texto";
import PropTypes from "prop-types";
import "./IconoConTexto.css";

const IconoConTexto = ({ icono, descripcion, altText }) => {
  return (
    <div className="icono-con-texto">
      <img
        src={icono}
        alt={altText || descripcion} // Uso del texto alternativo o de la descripción si no hay alt
        className="icono-imagen"
      />
      <Texto
        level="p"
        texto={descripcion}
        variante="black"
      />
    </div>
  );
};

// Validación de los tipos de propiedades
IconoConTexto.propTypes = {
  icono: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  altText: PropTypes.string, // opcional para un texto alternativo
};

export default IconoConTexto;
