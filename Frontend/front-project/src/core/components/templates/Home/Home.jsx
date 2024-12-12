// src/components/templates/Home/Home.jsx
import { useContext, useState } from "react";
import Hero from "../../organismos/Hero/Hero";
import productsData from "../../../data/productsData.js";
import { Context } from "../../../context/Context.jsx";
import ProductosDestacados from "../../moleculas/productos_destacados/ProductosDestacados.jsx";
import SearchBar from "../../organismos/SearchBar/SearchBar.jsx";
import MainSection3 from "../../organismos/MainSection3/MainSection3.jsx";
import MainSection1 from "../../organismos/MainSection1/MainSection1.jsx";
import MainSection5 from "../../organismos/MainSection5/MainSection5.jsx";
import Ofertas from "../../moleculas/ofertas/Ofertas.jsx";
import MainSection6 from "../../organismos/MainSection6/MainSection6.jsx";
import './style.css'

const Home = () => {

  return (
    <>
      <SearchBar></SearchBar> 
      <MainSection1></MainSection1>
      <Ofertas></Ofertas>
      <MainSection3></MainSection3>      
      <ProductosDestacados></ProductosDestacados>
      <MainSection5 />
      {/*<MainSection6 />*/}
    </>
  );
};

export default Home;
