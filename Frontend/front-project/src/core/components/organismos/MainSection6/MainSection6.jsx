import iconBasura from "../../../../assets/images/icono-verde-basura.svg";
import iconImpacto from "../../../../assets/images/icono-verde-impacto.svg";
import iconSolucion from "../../../../assets/images/icono-verde-solucion.svg";
import CardMision from "../../moleculas/CardMision/CardMision";

const Mision = () => {
  return (
    <div className="main6-contenedor">
      <h2>Nuestra misión</h2>
      <br />
      <div className="main6-seccion-mision ">
        <CardMision
          icon={iconBasura}
          title="Desperdicio de alimentos"
          description="Cada año, se desperdician más de 1.3 mil millones de toneladas de alimentos comestibles a nivel mundial."
        />
        <CardMision
          icon={iconImpacto}
          title="Impacto ambiental"
          description="Este problema tiene un enorme impacto negativo sobre el medio ambiente, contribuyendo a la emisión de gases de efecto invernadero y el deterioro de los ecosistemas."
        />
        <CardMision
          icon={iconSolucion}
          title="Nuestra solución"
          description="En Eaty, buscamos conectar a los consumidores con productos alimenticios de calidad que de otro modo terminarían desechados, reduciendo el impacto ambiental y ofreciendo importantes ahorros."
        />
      </div>
    </div>
  );
};

export default Mision;
