//import Navbar from "../components/organismos/Navbar/Navbar";
import { Button } from "@mui/material";
import Navbar from "../components/moleculas/Menu_navegacion/NavBar";
import Footer from "../components/organismos/Footer/Footer";
import { useContext } from "react";
import { Context } from "../context/Context";
import ResponsiveAppBar from "../components/moleculas/Menu_navegacion/ResponsiveAppBar";


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
    <div>
       {/* <ResponsiveAppBar></ResponsiveAppBar> */}
       <Navbar></Navbar>    
      <Button onClick={cerrar}>cerrar sesion</Button>
      <Button onClick={ver}>ver sesion</Button>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
