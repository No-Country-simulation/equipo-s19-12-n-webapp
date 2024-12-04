import React, { useContext } from "react";
import styles from "../ArticuloProducto/ArticuloProducto.module.css";
import { Context } from "../../../context/Context";
import Texto from "../../atomos/Textos/Texto";
import Button from "../../atomos/Button/Button";
import ProductCard from "../../atomos/ProductCard/ProductCard";

function ArticuloProducto() {
  const { actualProduct, setMenuArticulo, allProducts } = useContext(Context);

  return (
    <div className={styles.ArticuloProducto}>
        <div className={styles.panelA}>
          <div className={styles.imgACont}>
            <img src={actualProduct.img} alt="" />
            <div className={styles.infoPanel}>
                <p className={styles.back} onClick={() => setMenuArticulo(0)}>Volver {`>`}</p>
                <p>{actualProduct.desc}</p>
            </div>
            
          </div>
          <div className={styles.otrosArticulos}>
            <h3>Otras Ofertas</h3>
            <div className={styles.carrucelCont}>
            <div className={styles.carrucel}>
              {allProducts.map((product) => (
                <ProductCard
                    key={allProducts.indexOf(product)}
                    nombre={product.nombre}
                    img={product.img}
                    precio={product.precio}
                    id={product._id}
                    desc={product.desc}
                    comerciante={product.comerciante}
                    vencimiento={product.vencimiento}
                    stock={product.stock}
                ></ProductCard>
              ))}
            </div>
            </div>
          </div>
        </div>
        <div className={styles.panelB}>
            <div className={styles.panelBCont}>
                <h3>{actualProduct.nombre}</h3>
                <div className={styles.precioCont}>
                    <div className={styles.precioActual}>${actualProduct.precio}</div>
                    <div className={styles.precioAnterior}>${parseInt(actualProduct.precio) * 1.5}</div>
                </div>
                <div className={styles.detallesCont}>
                    <div className={styles.detalleCont}>
                        <h4>Categoría:</h4>
                        <p>Lácteos</p>
                    </div>
                    <div className={styles.detalleCont}>
                        <h4>Stock:</h4>
                        <p>{actualProduct.stock}</p>
                    </div>
                </div>
                <div className={styles.vencimientoCont}>
                    <h4>Fecha de vencimiento</h4>
                    <p>{actualProduct.vencimiento}</p>
                </div>
                <div className={styles.comercianteCont}>
                    <h4>CUIT Cte: {actualProduct.comerciante}</h4>
                    <p>Ver Perfil</p>
                </div>
                <div className={styles.botonCont}>
                    <Button variante={"orange"} texto={"Comprar"}></Button>
                    <Button variante={"green"} texto={"Añadir al carrito"}></Button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ArticuloProducto;
