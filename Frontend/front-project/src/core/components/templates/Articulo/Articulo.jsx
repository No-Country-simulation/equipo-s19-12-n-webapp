import React from 'react'
import SearchBar from '../../organismos/SearchBar/SearchBar'
import ArticuloProducto from '../../organismos/ArticuloProducto/ArticuloProducto'
import styles from "../Articulo/Articulo.module.css"

function Articulo() {
  return (
    <div className={styles.Articulo}>
        <SearchBar></SearchBar>
        <div className={styles.seccion0}>
            <div className={styles.paginaArticulo}>
                <ArticuloProducto></ArticuloProducto>
            </div>
        </div>
    </div>
  )
}

export default Articulo