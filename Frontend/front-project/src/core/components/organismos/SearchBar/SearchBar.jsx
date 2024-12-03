import React, { useState } from "react";
import SearchInput from "../../atomos/SearchInput/SearchInput";
import Button from "../../atomos/Button/Button";
import "./SearchBar.css";

const SearchBar = () => {
  const [selectedValue, setSelectedValue] = useState("");

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

  return (
    <div className="search-bar">
      <div className="boton-filtro">
        <Button icon={"filtro"}
          variante={'noneBackground'} />
      </div>
      <div className="sectionSearch">
        <SearchInput />
      </div>
      <div className="sectionButtons">
        {/* <Button
          texto={"Mapa"}
          variante={"white"}
          icon={"mapa"}
        /> */}
        <Button
          texto={"Carrito"}
          variante={"white"}
          icon={"carrito"}
        />
      </div>
    </div>
  );
};

export default SearchBar;
