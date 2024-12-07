import { useEffect, useState } from "react";
import Texto from "../../atomos/Textos/Texto";
import "./DescripcionComerciante.css";

const DescripcionComerciante = ({ comercianteId }) => {
  const [descripcion, setDescripcion] = useState("");
  const [loading, setLoading] = useState(true);
  const placeholder = "Ingrese la descripción del negocio";

  useEffect(() => {
    const fetchDescripcion = async () => {
      try {
        const response = await fetch(
          `https://eaty-three.vercel.app/api/comerciante/${comercianteId}`
        );
        const data = await response.json();

        // Verificamos si existe una descripción
        if (data?.descripcion) {
          setDescripcion(data.descripcion);
        } else {
          setDescripcion("");
        }
      } catch (error) {
        console.error("Error al obtener la descripción:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDescripcion();
  }, [comercianteId]);

  return (
    <div className="descripcion-container">
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className="descripcion-comerciante">
          <Texto
            level="p"
            texto={descripcion || placeholder}
            variante="gray"
          />
        </div>
      )}
    </div>
  );
};

export default DescripcionComerciante;
