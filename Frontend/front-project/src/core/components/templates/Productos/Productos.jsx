import React, { useContext } from 'react'
import styles from "../Productos/Productos.module.css"
import SearchBar from '../../organismos/SearchBar/SearchBar'
import { Pagination } from '@mui/material'
import { Context } from '../../../context/Context'
import ProductCard from '../../atomos/ProductCard/ProductCard'
import Texto from '../../atomos/Textos/Texto'
import Button from '../../atomos/Button/Button'
import ArticuloProducto from '../../organismos/ArticuloProducto/ArticuloProducto'

function Productos() {

  const { allProducts, menuArticulo } = useContext(Context);

  console.log(allProducts);

  return (
    <div className={styles.Productos}>
        <SearchBar></SearchBar>
        <div className={styles.seccion0}>
            {menuArticulo === 0 && <div className={styles.seccion0Cont}>
                <div className={styles.seccionFiltros}>
                    <div className={styles.grupoFiltro}>
                        <Texto texto={"Categorias"} level={"h3"} variante={"black"}></Texto>
                        <div className={styles.listaDeFiltros}>
                            <p className={styles.subCategoria}>Frutas y Verduras</p>
                            <p className={styles.subCategoria}>Carnes y Pescados</p>
                            <p className={styles.subCategoria}>Lácteos</p>
                            <p className={styles.subCategoria}>Panadería y Pastelería</p>
                            <p className={styles.subCategoria}>Snacks y Golosinas</p>
                            <p className={styles.subCategoria}>Bebidas</p>
                            <p className={styles.subCategoria}>Alimentos no perecederos</p>
                            <p className={styles.subCategoria}>Otros</p>
                        </div>
                    </div>
                    <div className={styles.grupoFiltro}>
                        <Texto texto={"Precio"} level={"h3"} variante={"black"}></Texto>
                        <div className={styles.listaDeFiltros}>
                            <div className={styles.ragoCont}>
                                <p>Desde</p>
                                <input type='text' placeholder='Ingresa un valor'></input>
                            </div>
                            <div className={styles.ragoCont}>
                                <p>Hasta</p>
                                <input type='text' placeholder='Ingresa un valor'></input>
                            </div>
                            <Button variante={"green"} texto={"Buscar"}></Button>
                        </div>
                    </div>
                    <div className={styles.grupoFiltro}>
                        <Texto texto={"Descuentos"} level={"h3"} variante={"black"}></Texto>
                        <div className={styles.listaDeFiltros}>
                            <p className={styles.subCategoria} style={{color: "var(--color-naranja)"}}>30% OFF</p>
                            <p className={styles.subCategoria} style={{color: "var(--color-naranja)"}}>40% OFF</p>
                            <p className={styles.subCategoria} style={{color: "var(--color-naranja)"}}>50% OFF</p>
                            <p className={styles.subCategoria} style={{color: "var(--color-naranja)"}}>60% OFF</p>
                            <p className={styles.subCategoria} style={{color: "var(--color-naranja)"}}>70% OFF</p>
                        </div>
                    </div>
                </div>
                <div className={styles.seccionPaginas}>
                    <div className={styles.paginaActual}>
                        {allProducts.map((product) => (<ProductCard key={allProducts.indexOf(product)} nombre={product.nombre} img={product.img} precio={product.precio} id={product._id} desc={product.desc} comerciante={product.comerciante} vencimiento={product.vencimiento} stock={product.stock}></ProductCard>))}
                    </div>
                    <div className={styles.navPag}>
                        <Pagination></Pagination>
                    </div>
                </div>
            </div>}
            {menuArticulo === 1 && <div className={styles.paginaArticulo}>
                <ArticuloProducto></ArticuloProducto>
            </div>}
        </div>
    </div>
  )
}

export default Productos