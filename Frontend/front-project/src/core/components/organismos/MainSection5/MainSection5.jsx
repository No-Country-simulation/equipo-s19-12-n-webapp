import "./MainSection5.css";
import { useContext } from "react";
import { Context } from "../../../context/Context";

const MainSection5 = () => {

  const { comerciosAderidos, setComerciosAderidos } = useContext(Context)

  fetch("https://eaty-three.vercel.app/api/comerciante/negociosAderidos", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      setComerciosAderidos(data);
    })

  return (
    <div className="main5-container">
      <div className="contTituloNegociosAderidos">
        Tiendas que se sumaron al cambio
      </div>
      <div className="seccion-tiendas">
        {comerciosAderidos.map((comercio) => <div className="comercioAdCont" key={comerciosAderidos.indexOf(comercio)}>
          <img src={comercio.logo} alt="" />
          <div className="comercioAdTitulo">{comercio.nombre}</div>
        </div>)}
        {/*<img
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
        />*/}
      </div>
    </div>
  );
};

export default MainSection5;
