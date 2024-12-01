import React, { useContext } from 'react'
import styles from "../Productos/Productos.module.css"
import SearchBar from '../../organismos/SearchBar/SearchBar'
import { Pagination } from '@mui/material'
import { Context } from '../../../context/Context'
import CardProducto from '../../atomos/Card/CardProducto'

function Productos() {

  const { allProducts } = useContext(Context);

  console.log(allProducts);

  return (
    <div className={styles.Productos}>
        <SearchBar></SearchBar>
        <div className={styles.seccion0}>
            <div className={styles.seccion0Cont}>
                <div className={styles.seccionFiltros}></div>
                <div className={styles.seccionPaginas}>
                    <div className={styles.paginaActual}>
                        {allProducts.map((product) => (<CardProducto key={allProducts.indexOf(product)} titulo={product.nombre} alt={""} src={"leche.jpg"} precio1={product.precio * 1.5} precio2={product.precio}></CardProducto>))}
                    </div>
                    <div className={styles.navPag}>
                        <Pagination></Pagination>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Productos