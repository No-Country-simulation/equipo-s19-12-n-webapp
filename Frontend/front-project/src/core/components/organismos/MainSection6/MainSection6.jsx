import Texto from "../../atomos/Textos/Texto";
import CardMision from "../../moleculas/CardMision/CardMision";
import "./MainSection6.css";

const MainSection6 = () => {
  return (
    <>
      <div className="main6-contenedor">
        <Texto
          level={"h2"}
          texto={"Nuestra misión"}
          variante={"black"}
        />
        <div className="main6-seccion-mision">
          <CardMision>
            <Texto
              level={"h2"}
              texto={"asaasa"}
              variante={"black"}
            />
          </CardMision>
          <CardMision />
          <CardMision />
        </div>
      </div>
    </>
  );
};

export default MainSection6;
