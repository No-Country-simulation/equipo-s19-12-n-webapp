import React from 'react'
import { Link } from 'react-router-dom';
import './style_enlace.css'

const Enlace = ({ pagina, texto ,tipo}) => {
    return (
        <>
        <Link to={pagina} className={tipo} >{texto}</Link>
        </>

    )

}

export default Enlace

// ejemplo de llamado
{/* <Enlace pagina={"/soporte"} texto={"soporte"} tipo={"enlace_navbar"}></Enlace>
    <Enlace pagina={"/soporte"} texto={"soporte"} tipo={"enlace_login"}></Enlace>
    <Enlace pagina={"/soporte"} texto={"Registrarse"} tipo={"enlace_login_registrarse"}></Enlace>
    <Enlace pagina={"/soporte"} texto={"Privacidad"} tipo={"enlace_footer"}></Enlace> */}