import React, { useState } from "react";
import SearchInput from "../../atomos/SearchInput/SearchInput";
import Button from "../../atomos/Button/Button";
import "./SearchBar.css";
//import ModalCarrito from '../modal/CarritoRightDrawer'
import CarritoRightDrawer from "../modal/CarritoRightDrawer";
import { Box } from "@mui/material";

const SearchBar = () => {
  const [selectedValue, setSelectedValue] = useState("");
  // modal carrito
  const [openModalCarrito, setOpenModalCarrito] = useState(false);


  // Definir las opciones para el selector
  const options = [
    { value: "", label: "Ordenar por" }, // Opción por defecto
    { value: "precio", label: "Precio" },
    { value: "popularidad", label: "Popularidad" },
  ];

  const handleSelectChange = (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
  };

  const abrirModalCarrito = ()=>{
    setOpenModalCarrito(true);
  }

  return (
    <>
    <div className="search-bar">
      <div className="searchBarCont0">
        <div className="sectionSearch">
          <SearchInput />
        </div>
        {/* <div className="sectionButtons">
          <Button texto={"Mapa"} variante={"white"} icon={"mapa"} iconSize={"small"}/>
          <Button texto={"Carrito"} variante={"white"} icon={"carrito"} iconSize={"small"}/>
          
        </div> */}
        <Button onClick={abrirModalCarrito} ancho={156} texto={"Carrito"} variante={"white"} icon={"carrito"} iconSize={"small"}/>

      </div>
    </div>

     <CarritoRightDrawer open={openModalCarrito} onClose={() => setOpenModalCarrito(false)} /> 
    </>
    
  );
};

export default SearchBar;
