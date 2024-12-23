import { useContext, useState } from "react";
import Texto from "../../atomos/Textos/Texto";
import Mapa from "../../atomos/Icon/mapa.svg";
import Telefono from "../../atomos/Icon/telefono.svg";
import Reloj from "../../atomos/Icon/reloj.svg";
import Pago from "../../atomos/Icon/pago.svg";
import Tarjeta from "../../atomos/Icon/tarjeta.svg";
import Monedero from "../../atomos/Icon/monedero.svg";
import Delivery from "../../atomos/Icon/delivery.svg";
import Retirar from "../../atomos/Icon/retirar.svg";
import "./AcercaDe.css";
import DescripcionComerciante from "../../moleculas/DescripcionComerciante/DescripcionComerciante";
import IconoConTexto from "../../moleculas/IconoConTexto/IconoConTexto";
import { Context } from "../../../context/Context";
import { motion } from "framer-motion"

const AcercaDe = () => {
  const { datosUsuario } = useContext(Context);
  const [descActive, setDescActive] = useState(false)
  const [descData, setDescData] = useState(datosUsuario.desc || "")

  const {
    direccion = "Falta completar información",
    telefono = 0,
    horario = "08:00 am - 20:00 pm",
    pagoEfectivo = true,
    pagoTarjeta = true,
    monederoDigital = true,
    delivery = true,
    recojoEnRestaurante = true,
  } = datosUsuario || {};

  function guardarDescripcion () {
    fetch(`https://eaty-three.vercel.app/api/comerciante/${datosUsuario.id}`, {
      method: "PUT",
      body: JSON.stringify({nombre: datosUsuario.nombre, direccion: datosUsuario.direccion, ciudad: datosUsuario.ciudad, rubro: datosUsuario.rubro, desc: descData, telefono: datosUsuario.telefono, logo: datosUsuario.logo, pass: datosUsuario.pass, img1: datosUsuario.img1}),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
  }

  return (
    <motion.div className="acerca-de-container" initial={{scale: 0.98, opacity: 0.5}} animate={{scale: 1, opacity: 1}} transition={{ease: "easeInOut", duration: 0.4}}>
      <div className="acerca-de-texto">
        {descActive === false ? <DescripcionComerciante desc={descData} /> : <textarea className="textADesc" style={{width: "100%"}} onChange={(e) => setDescData(e.target.value)}>{descData}</textarea>}

        {descActive === false ? <div className="controlDescPanel">
          <div className="desc0boton1" onClick={() => setDescActive(true)}>Editar</div>
        </div> :
        <div className="controlDescPanel">
          <div className="desc0boton2" onClick={() => {setDescData(datosUsuario.desc); setDescActive(false)}}>Cancelar</div>
          <div className="desc0boton1" onClick={() => {guardarDescripcion(); setDescActive(false)}}>Guardar</div>
        </div>}        
      </div>

      {/* Sección Datos Generales */}
      <div className="title-detail">
        <Texto
          level="h3"
          texto="Datos generales"
          variante="black"
        />
      </div>

      <div className="row-icon-details">
        <IconoConTexto
          icono={Mapa}
          descripcion={direccion}
          altText="icono de mapa"
        />
      </div>

      <div className="row-icon-details">
        <IconoConTexto
          icono={Telefono}
          descripcion={telefono.toString()}
          altText="icono de teléfono"
        />
      </div>

      <div className="row-icon-details">
        <IconoConTexto
          icono={Reloj}
          descripcion={horario}
          altText="icono de reloj"
        />
      </div>

      {/* Sección Servicios que brinda de manera presencial */}
      <div className="title-detail">
        <Texto
          level="h3"
          texto="Servicios en local"
          variante="black"
        />
      </div>

      {pagoEfectivo ||
      pagoTarjeta ||
      monederoDigital ||
      delivery ||
      recojoEnRestaurante ? (
        <div className="dosFilas">
          <div className="columnaUno">
            {pagoEfectivo && (
              <IconoConTexto
                icono={Pago}
                descripcion="Pago en efectivo"
                altText="icono de pago en efectivo"
              />
            )}
            {pagoTarjeta && (
              <IconoConTexto
                icono={Tarjeta}
                descripcion="Pago con tarjeta"
                altText="icono de pago con tarjeta"
              />
            )}
            {monederoDigital && (
              <IconoConTexto
                icono={Monedero}
                descripcion="Monedero Digital"
                altText="icono de monedero digital"
              />
            )}
          </div>

          <div className="columnaDos">
            {delivery && (
              <IconoConTexto
                icono={Delivery}
                descripcion="Delivery"
                altText="icono de delivery"
              />
            )}
            {recojoEnRestaurante && (
              <IconoConTexto
                icono={Retirar}
                descripcion="Recojo en restaurante"
                altText="icono de recojo en restaurante"
              />
            )}
          </div>
        </div>
      ) : (
        <Texto
          level="p"
          texto="Falta completar información"
          variante="black"
        />
      )}
    </motion.div>
  );
};

export default AcercaDe;
