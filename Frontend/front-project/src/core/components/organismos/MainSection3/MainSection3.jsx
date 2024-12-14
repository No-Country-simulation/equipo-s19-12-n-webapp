import Button from "../../atomos/Button/Button";
import MainSubtitleTablet from "../../atomos/MainSubtitleTablet/MainSubtitleTablet";
import MainTitleTablet from "../../atomos/MainTitleTablet/MainTitleTablet";
import bolsaVerde from "../../../../assets/images/bolsa-verde.svg";
import React, { useRef } from 'react'
import { useInView } from 'framer-motion';
import "./MainSection3.css";

const MainSection3 = () => {

  const ref01 = useRef(null);
  const isInView = useInView(ref01, { once: false });

  return (
    <div className="contenedor-seccion-3" style={{scale: isInView ? "1" : "0.95", opacity: isInView ? 1 : 0, transition: "all 0.6s ease-out"}}>
      <div className="main3-text-content" ref={ref01}>
        <img
          src={bolsaVerde}
          alt="imagen de bolsa verde"
          className="main3-imagen-bolsa"
        />
        <MainTitleTablet />
        <MainSubtitleTablet />
        <div className="mainsection3-btn-tablet">
          <Button
            variante={"orange"}
            texto={"Reservá ahora"}
          />
        </div>
      </div>
    </div>
  );
};

export default MainSection3;
