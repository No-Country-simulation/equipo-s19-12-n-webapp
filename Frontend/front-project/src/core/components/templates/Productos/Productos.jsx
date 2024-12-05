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


  const { allProducts, menuArticulo, setAllProducts } = useContext(Context);

  console.log(allProducts);

  function buscarCategoria (cat) {
    fetch(`https://eaty-three.vercel.app/api/productos/busqueda-por-categoria/${cat}`, {
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
        })
  }

  return (
    <div className={styles.Productos}>
        <SearchBar></SearchBar>
        <div className={styles.seccion0}>
            {menuArticulo === 0 && <div className={styles.seccion0Cont}>
                <div className={styles.seccionFiltros}>
                    <div className={styles.grupoFiltro}>
                        <Texto texto={"Categorias"} level={"h3"} variante={"black"}></Texto>
                        <div className={styles.listaDeFiltros}>
                            <p className={styles.subCategoria} onClick={() => buscarCategoria("Frutas y Verduras")}>Frutas y Verduras</p>
                            <p className={styles.subCategoria} onClick={() => buscarCategoria("Carnes y Pescados")}>Carnes y Pescados</p>
                            <p className={styles.subCategoria} onClick={() => buscarCategoria("Lácteos")}>Lácteos</p>
                            <p className={styles.subCategoria} onClick={() => buscarCategoria("Panadería y Pastelería")}>Panadería y Pastelería</p>
                            <p className={styles.subCategoria} onClick={() => buscarCategoria("Snacks y Golosinas")}>Snacks y Golosinas</p>
                            <p className={styles.subCategoria} onClick={() => buscarCategoria("Bebidas")}>Bebidas</p>
                            <p className={styles.subCategoria} onClick={() => buscarCategoria("Alimentos no perecederos")}>Alimentos no perecederos</p>
                            <p className={styles.subCategoria} onClick={() => buscarCategoria("Otros")}>Otros</p>
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
                        {allProducts.map((product) => (<ProductCard key={allProducts.indexOf(product)} nombre={product.nombre} img1={product.img1} img2={product.img2} img3={product.img3} img4={product.img4} precio={product.precio} id={product._id} desc={product.desc} comerciante={product.comerciante} vencimiento={product.vencimiento} stock={product.stock} categoria={product.categoria} estado={product.estado}></ProductCard>))}
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