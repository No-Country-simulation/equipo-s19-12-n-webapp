import React, { useContext } from 'react'
import styles from "../Navbar/NavBar.module.css"
import { Context } from '../../../context/Context'

function NavBar({verPerfil}) {

  const { cerrarSesion } = useContext(Context);

  return (
    <div className={styles.NavBar}>
        <div className={styles.NavBarCont}>
            <img src="/assets/images/logo.svg" alt="" className={styles.logo}/>
            <div className={styles.MenuCont}>
                <div className={styles.Enlace} onClick={() => verPerfil(0)}>Ver Perfil</div>
                <div className={styles.Enlace} onClick={() => verPerfil(1)}>Agregar Producto</div>
                <div className={styles.Enlace} onClick={() => cerrarSesion()}>Cerrar Sesión</div>
            </div>
            <div className={styles.MiniMenuCont}></div>
        </div>
    </div>
  )
}

export default NavBar