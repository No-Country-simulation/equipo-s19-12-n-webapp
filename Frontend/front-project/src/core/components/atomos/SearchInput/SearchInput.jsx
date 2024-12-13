import "./SearchInput.css";
import { useState, useContext } from "react";
import { Context } from "../../../context/Context";
import { useNavigate } from "react-router-dom";
import searchIcon from "../../../../assets/images/search-icon.svg";

const SearchInput = () => {

  const navigate = useNavigate();
  const { setAllProducts, setBusqueda0 } = useContext(Context)
  const [busqueda, setBusqueda] = useState("")

  function buscarProducto (data){
    fetch(`https://eaty-three.vercel.app/api/productos/busqueda/${data}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        setBusqueda0(1);
      })
      .then(() => navigate("/productos"))   
  }

  return (
    <div className="search-input-container">
      <input
        type="text"
        placeholder="Buscar"
        className="search-input"
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <img
        src={searchIcon}
        alt="Buscar"
        className="search-icon"
        onClick={() => buscarProducto(busqueda)}
      />
    </div>
  );
};

export default SearchInput;
