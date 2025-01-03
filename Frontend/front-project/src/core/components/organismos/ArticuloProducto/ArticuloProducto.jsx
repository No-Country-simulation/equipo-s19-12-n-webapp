
import React, { useContext, useState, useEffect, useRef } from "react";
import styles from "../ArticuloProducto/ArticuloProducto.module.css";
import { Context } from "../../../context/Context";
import Button from "../../atomos/Button/Button";
import ProductCard from "../../atomos/ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";
import CarritoRightDrawer from "../modal/CarritoRightDrawer";
import { useInView, motion} from "framer-motion"

function ArticuloProducto() {

  const { actualProduct, allProductsComerciante, detallesComerciante, datosUsuario, agregarVenta } = useContext(Context);
  const [actualImage, setActualImage] = useState(actualProduct.img1)
  const [numberImage, setNumberImage] = useState(1)
  const [cantidadP, setCantidadP] = useState(0)
  const { agregarAcarrito, usuario ,carrito} = useContext(Context)
  const navigate = useNavigate();
  // modal carrito
  const [openModalCarrito, setOpenModalCarrito] = useState(false);
  const ref01 = useRef(null);
  const isInView = useInView(ref01, { once: false });
  const ref02 = useRef(null);
  const isInView2 = useInView(ref02, { once: false });

  useEffect(() => {
    setActualImage(actualProduct.img1)
  }, [actualProduct.img1])

  useEffect(() => {
    if (cantidadP < 1){
      setCantidadP(1);
    }
  }, [cantidadP])
  

  function clickComprar() {
    if (usuario === null) {
      alert("Debes estar logueado para comprar")
    } else {

      const productosFormatoNuevo = [{
        id_producto: actualProduct._id,
        cantidad: 1, // Usar 1 si no hay cantidad personalizada
      }];
      // Obtener la fecha actual en formato ISO
      const fechaActual = new Date().toISOString();

      // Crear el objeto con los campos requeridos
      const objetoOrden = {
        comerciante: detallesComerciante.cuit, // Asumiendo que detallesComerciante tiene el nombre del comerciante
        consumidor: datosUsuario.email, // Asegúrate de que el objeto usuario esté disponible en el contexto
        fecha: fechaActual,
        precioT: actualProduct.precio,
        detalle: productosFormatoNuevo,
      };
      console.log(objetoOrden)
      agregarAcarrito(actualProduct)
      agregarVenta(objetoOrden)
       //     navigate("/datos_personales");
    }

  }
  const abrirModalCarrito = ()=>{
    if (carrito.length === 0) {
      clickAgregarAlCarrito();
    }
    if (usuario === null || usuario === "comerciante"){      
    }else{
      setOpenModalCarrito(true);
    }   
  }

  function clickAgregarAlCarrito() {
    if (usuario === null || usuario === "comerciante") {
      alert("Debes estar logueado como cliente para agregar al carrito")
    } else {     
       const resultado = carrito.find(producto => producto._id === actualProduct._id);
       console.log(resultado)
      if(resultado === undefined){
        agregarAcarrito(actualProduct)
      }else{
        alert("¡Este producto ya está en tu carrito de compras! Si deseas agregar más cantidad, por favor, ve a tu carrito y actualiza la cantidad desde allí.")
      }
    }
  }

  return (
    <div className={styles.ArticuloProducto} style={{scale: isInView ? "1" : "0.95", opacity: isInView ? 1 : 0, transition: "all 0.6s ease-out"}}>
        <div className={styles.panelA} ref={ref01}>
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
                <motion.img src={actualImage} alt="" className={styles.imagenPrincipal} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }}/>
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
                    style={{height: "250px", width: "auto", scale: "0.8", minWidth: "160px"}}
                ></ProductCard>
              ))}
            </div>
          </div>
          <div className={styles.descripcionCont}>
            <h3>Descripción</h3>
            <div className={styles.desc}>{actualProduct.desc}</div>
          </div>
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
          <div className={styles.cantidadCont}>
            <div className={styles.botonIncrementar} onClick={() => setCantidadP(cantidadP - 1)}>-</div>            
            <div className={styles.valorIncrementado}>{cantidadP}</div>
            <div className={styles.botonIncrementar} onClick={() => setCantidadP(cantidadP + 1)}>+</div>
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
              <p>{detallesComerciante.rubro}</p>
            </div>
          </div>
          <div className={styles.botonCont}>
            <Button onClick={() => abrirModalCarrito()} variante={"orange"} texto={"Comprar"}></Button>
            <Button onClick={clickAgregarAlCarrito} variante={"green"} texto={"Añadir al carrito"}></Button>
          </div>
        </div>
      </div>
      <CarritoRightDrawer open={openModalCarrito} onClose={() => setOpenModalCarrito(false)} /> 
    </div>
  );
}

export default ArticuloProducto;
