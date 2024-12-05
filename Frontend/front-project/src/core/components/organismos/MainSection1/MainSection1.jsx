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
  const { setAllProducts, allProducts } = useContext(Context);

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
        console.log(allProducts);
      });
  }

  return (
    <div className="main-banner">
      <div className="text-content">
        <MainTitle />
        <MainSubtitle />
        <div className="mainsection1-btn-tablet">
          <Button
            onClick={() => {
              navigate("/productos");
              obtenerProductos();
            }}
            variante={"orange"}
            texto={"Ver productos"}
            className="otrosEstilos"
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
