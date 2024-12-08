//import Navbar from "../components/organismos/Navbar/Navbar";
import { Button } from "@mui/material";
import Navbar from "../components/moleculas/Menu_navegacion/NavBar";
import Footer from "../components/organismos/Footer/Footer";
import { useContext } from "react";
import { Context } from "../context/Context";
import Perfil from "../../features/perfil/Perfil";
import styles from "../layouts/Layout.module.css"

const Layout = ({ children }) => {
 const {usuario,datosUsuario,isLoggedIn,cerrarSesion}=useContext(Context)
  function cerrar(){
    cerrarSesion()
  }
  function ver(){
    console.log("sesion:"+isLoggedIn)
    console.log("usuario:"+usuario)
    console.log("datos de usuario:"+datosUsuario)
  }
  return (
    <div className={styles.Layout}>
      {usuario === "comerciante" ? <Perfil></Perfil> : <div className={styles.Layout}>
        <Navbar></Navbar>   
        <main>{children}</main>
        <Footer />
      </div>}
    </div>
  );
};

export default Layout;
