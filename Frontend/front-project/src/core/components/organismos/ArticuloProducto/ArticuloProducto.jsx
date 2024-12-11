
import React, { useContext, useState, useEffect } from "react";
import styles from "../ArticuloProducto/ArticuloProducto.module.css";
import { Context } from "../../../context/Context";
import Button from "../../atomos/Button/Button";
import ProductCard from "../../atomos/ProductCard/ProductCard";
import { Navigate, useNavigate } from "react-router-dom";
import { height } from "@mui/system";

function ArticuloProducto() {

  const { actualProduct, setMenuArticulo, allProductsComerciante, detallesComerciante } = useContext(Context);
  const [actualImage, setActualImage] = useState(actualProduct.img1)
  const [numberImage, setNumberImage] = useState(1)

  useEffect(() => {
    setActualImage(actualProduct.img1)
  }, [actualProduct.img1])

  const navigate = useNavigate();
  const {usuario}=useContext(Context)
  function clickComprar(){
    if(usuario===null){
      alert("Debes estar logueado para comprar")
    }else{
      navigate("/datos_personales");
    }
    
  }
  const {agregarAcarrito} = useContext(Context)
  function clickAgregarAlCarrito(){
    if(usuario===null||usuario==="comerciante"){
      alert("Debes estar logueado como cliente para agregar al carrito")
      }else{
        agregarAcarrito(actualProduct)
      }
  }
  
  return (
    <div className={styles.ArticuloProducto}>
        <div className={styles.panelA}>
          <div className={styles.titulo2Articulo}>{actualProduct.nombre}</div>
          <div className={styles.panelACont}>
            <div className={styles.imgACont}>
              <div className={styles.imagesCont}>
                <div className={styles.carrucelImages}>
                  {actualProduct.img1 !== "" && <img src={actualProduct.img1} alt="" onClick={() => {setActualImage(actualProduct.img1); setNumberImage(1)}} style={numberImage === 1 ? {border: "1px solid rgba(0, 170, 0, 0.5)"} : {border: "1px solid rgba(0, 0, 0, 0.3)"}}></img>}
                  {actualProduct.img2 !== "" && <img src={actualProduct.img2} alt="" onClick={() => {setActualImage(actualProduct.img2); setNumberImage(2)}} style={numberImage === 2 ? {border: "1px solid rgba(0, 170, 0, 0.5)"} : {border: "1px solid rgba(0, 0, 0, 0.3)"}}></img>}
                  {actualProduct.img3 !== "" && <img src={actualProduct.img3} alt="" onClick={() => {setActualImage(actualProduct.img3); setNumberImage(3)}} style={numberImage === 3 ? {border: "1px solid rgba(0, 170, 0, 0.5)"} : {border: "1px solid rgba(0, 0, 0, 0.3)"}}></img>}
                  {actualProduct.img4 !== "" && <img src={actualProduct.img4} alt="" onClick={() => {setActualImage(actualProduct.img4); setNumberImage(4)}} style={numberImage === 4 ? {border: "1px solid rgba(0, 170, 0, 0.5)"} : {border: "1px solid rgba(0, 0, 0, 0.3)"}}></img>}
                </div>
                <img src={actualImage} alt="" className={styles.imagenPrincipal}/>
              </div>                     
            </div>
          </div>
          <div className={styles.otrosArticulos}>
            <h3>Otras ofertas del vendedor</h3>
            <div className={styles.carrucelCont}>
            <div className={styles.carrucel}>
              {allProductsComerciante.map((product) => (
                <ProductCard
                    key={allProductsComerciante.indexOf(product)}
                    nombre={product.nombre}
                    img1={product.img1}
                    img2={product.img2}
                    img3={product.img3}
                    img4={product.img4}
                    precio={product.precio}
                    off={product.off}
                    categoria={product.categoria}
                    estado={product.estado}
                    id={product._id}
                    desc={product.desc}
                    comerciante={product.comerciante}
                    vencimiento={product.vencimiento}
                    stock={product.stock}
                    style={{height: "250px", width: "auto", scale: "0.8", width: "160px"}}
                ></ProductCard>
              ))}
            </div>
            </div>
          </div>
          <div className={styles.descripcionCont}>
            <h3>Descripción</h3>
            <div className={styles.desc}>{actualProduct.desc}</div>
          </div>
        </div>
        <div className={styles.panelB}>
            <div className={styles.panelBCont}>
                <h3>{actualProduct.nombre}</h3>
                <div className={styles.precioCont}>
                    <div className={styles.precioActual}>${actualProduct.precio}</div>
                    <div className={styles.precioAnterior}>${parseInt(actualProduct.precio) * 1.5}</div>
                    <div className={styles.discount}>-{actualProduct.off}%</div>
                </div>
                <div className={styles.detallesCont}>
                    <div className={styles.detalleCont}>
                        <h4>Categoría:</h4>
                        <p>{actualProduct.categoria}</p>
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
                    <img src={detallesComerciante.logo} alt="" />
                    <div className={styles.detallesPerfilCont}>
                      <h4>{detallesComerciante.nombre}</h4>
                      <p>Ver Perfil</p>
                    </div>
                </div>
                <div className={styles.botonCont}>
                    <Button onClick={clickComprar} variante={"orange"} texto={"Comprar"}></Button>
                    <Button onClick={clickAgregarAlCarrito} variante={"green"} texto={"Añadir al carrito"}></Button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ArticuloProducto;
