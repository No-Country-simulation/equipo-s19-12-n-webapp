import React, { useState } from "react";
import SearchInput from "../../atomos/SearchInput/SearchInput";
import Button from "../../atomos/Button/Button";
import Selector from "../../atomos/Selector/Selector";
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
      <div className="sectionSearch">
        <SearchInput />
      </div>
      <div className="sectionButtons">
        <Selector
          options={options}
          selectedValue={selectedValue}
          handleChange={handleSelectChange}
          borderType="rounded"
        />

        <Button
          texto={"mapa"}
          variante={"white"}
          icon={"carrito"}
        />
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
