import "./MainSection5.css";
import { useContext, useRef } from "react";
import { Context } from "../../../context/Context";
import { useInView } from 'framer-motion';

const MainSection5 = () => {

  const { comerciosAderidos, setComerciosAderidos } = useContext(Context)
  const ref01 = useRef(null);
  const isInView = useInView(ref01, { once: false });

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
    <div className="main5-container" style={{scale: isInView ? "1" : "0.95", opacity: isInView ? 1 : 0, transition: "all 0.6s ease-out"}}>
      <div className="contTituloNegociosAderidos" ref={ref01}>
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
