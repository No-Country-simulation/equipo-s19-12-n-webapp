// src/components/templates/Home/Home.jsx
import { useContext, useState } from "react";
import Hero from "../../organismos/Hero/Hero";
import productsData from "../../../data/productsData.js";
import { Context } from "../../../context/Context.jsx";
import TiendasDestacadas from "../../moleculas/tiendas_destacadas/TiendasDestacadas.jsx";
import NavBar from "../../moleculas/Menu_navegacion/NavBar.jsx";
import CardProducto from "../../atomos/Card/CardProducto.jsx";
import ProductosDestacados from "../../moleculas/productos_destacados/ProductosDestacados.jsx";
import SearchBar from "../../organismos/SearchBar/SearchBar.jsx";
import MainSection3 from "../../organismos/MainSection3/MainSection3.jsx";
import MainSection1 from "../../organismos/MainSection1/MainSection1.jsx";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("frutas");

  const { isLoggedIn } = useContext(Context);
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);

    // aca obtiene las variables del contexto

    console.log("isLoggedIn:" + isLoggedIn);
  };
  const handleSelectChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <>
      <SearchBar></SearchBar>
      <MainSection1></MainSection1>
      <TiendasDestacadas></TiendasDestacadas>
      <MainSection3></MainSection3>
      <ProductosDestacados></ProductosDestacados>
    </>
  );
};

export default Home;
