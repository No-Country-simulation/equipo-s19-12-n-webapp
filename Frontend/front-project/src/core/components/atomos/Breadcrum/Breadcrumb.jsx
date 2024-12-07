import Texto from "../Textos/Texto";
import "./BreadCrumb.css";

const Breadcrumb = () => {
  return (
    <>
      <div className="breadcrum-container">
        <Texto
          level="p"
          texto={"Inicio > Restaurante"}
          variante="black"
        />
        <Texto
          level="h2"
          texto={"Restaurante El Rincón Tropical"}
          variante="black"
        />
      </div>
    </>
  );
};

export default Breadcrumb;
