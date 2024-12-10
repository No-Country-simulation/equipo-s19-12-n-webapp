import MainTitle from "../../atomos/MainTitle/Maintitle";
import MainSubtitle from "../../atomos/MainSubtitle/MainSubtitle";
import MainImage from "../../atomos/MainImage/MainImage";
import Button from "../../atomos/Button/Button";
import "./MainSection1.css";
import { useNavigate } from "react-router-dom";
import { Context } from "../../../context/Context";
import { useContext } from "react";

const MainSection1 = () => {
  const navigate = useNavigate();
  const { setAllProducts } = useContext(Context);

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
    <div className="main-banner">
      <div className="text-content">
        <MainTitle />
        <MainSubtitle />
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
