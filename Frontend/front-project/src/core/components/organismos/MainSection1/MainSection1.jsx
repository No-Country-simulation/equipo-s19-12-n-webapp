import MainTitle from "../../atomos/MainTitle/Maintitle";
import MainSubtitle from "../../atomos/MainSubtitle/MainSubtitle";
import MainImage from "../../atomos/MainImage/MainImage";
import Button from "../../atomos/Button/Button";
import "./MainSection1.css";
import { useNavigate } from "react-router-dom";
import { Context } from "../../../context/Context";
import { useContext, useRef } from "react";
import { useInView} from "framer-motion"

const MainSection1 = () => {
  const navigate = useNavigate();
  const { setAllProducts } = useContext(Context);

  const ref01 = useRef(null);
  const isInView = useInView(ref01, { once: false });

  function obtenerProductos() {
    fetch("https://eaty-three.vercel.app/api/productos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      })
      .then(() => {
        navigate("/productos");
      });
  }

  return (
    <div className="main-banner" style={{scale: isInView ? "1" : "0.95", opacity: isInView ? 1 : 0, transition: "all 0.6s ease-out"}}>
      <div className="text-content" ref={ref01}>
        <MainTitle />
        <MainSubtitle />
        <div className="ahorroAnimaCont">
          <img src="assets/images/moneda.png" alt="" className="ahorroImg1"/>
          <img src="assets/images/alcancia.png" alt="" className="ahorroImg2"/>
        </div>
        <div className="otrosEstilos">
          <Button
            onClick={() => {
              obtenerProductos();
            }}
            variante={"orange"}
            texto={"Ver productos"}
          />
        </div>
      </div>
      <div className="image-content">
        <MainImage />
      </div>
    </div>
  );
};

export default MainSection1;
