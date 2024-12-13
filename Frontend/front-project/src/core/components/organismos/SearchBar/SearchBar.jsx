import React, { useState, useEffect } from "react";
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

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Función para actualizar el estado con el ancho de la ventana
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Añadir el event listener para el cambio de tamaño de la ventana
    window.addEventListener('resize', handleResize);

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
    <div className="search-bar">
      <div className="searchBarCont0">
        <div className="sectionSearch">
          <SearchInput />
        </div>
        {windowWidth > 600 ? <Button onClick={abrirModalCarrito} ancho={"auto"} alto={"60%"} texto={"Carrito"} variante={"white"} icon={"carrito"} iconSize={"small"}/>
        : <Button onClick={abrirModalCarrito} ancho={"auto"} alto={"60%"} texto={""} variante={"white"} icon={"carrito"} iconSize={"small"}/>}

      </div>
    </div>

     <CarritoRightDrawer open={openModalCarrito} onClose={() => setOpenModalCarrito(false)} /> 
    </>
    
  );
};

export default SearchBar;
