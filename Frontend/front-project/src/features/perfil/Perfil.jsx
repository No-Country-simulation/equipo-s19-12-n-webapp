import SearchBar from "../../core/components/organismos/SearchBar/SearchBar";
//import Pagination from "../../core/components/moleculas/Pagination/Pagination";
//import Navbar from "../../core/components/organismos/Navbar/Navbar";
//import MainSection3 from "../../core/components/organismos/MainSection3/MainSection3";
//import Navbar from "../../core/components/moleculas/Menu_navegacion/NavBar";

import Navbar from "../../core/components/moleculas/Menu_navegacion/NavBar";
import Footer from "../../core/components/organismos/Footer/Footer";
import Breadcrumb from "../../core/components/atomos/Breadcrum/Breadcrumb";
import RestaurantInfo from "../../core/components/organismos/RestaurantInfo/RestaurantInfo";
import NavBar from "../../core/components/organismos/Navbar/NavBar";
import { useState } from "react";
import styles from "../perfil/Perfil.module.css"
import AgregarProductos from "../agregarProductos/AgregarProductos";
import FormEditarProductos from "../../core/components/organismos/FormAgregarProductos/FormEditarProductos";

const Perfil = () => {

  const [panelPerfil, setPanelPerfil] = useState(0);

  return (
    <div>
      <NavBar verPerfil={setPanelPerfil}></NavBar>
      {panelPerfil === 0 && <div className={styles.perfilCont}>
        <Breadcrumb />
        <RestaurantInfo />
      </div>}
      {panelPerfil === 1 && <AgregarProductos></AgregarProductos>} 
      {panelPerfil === 2 && <FormEditarProductos></FormEditarProductos>}        
      <Footer />
    </div>
  );
};

export default Perfil;
