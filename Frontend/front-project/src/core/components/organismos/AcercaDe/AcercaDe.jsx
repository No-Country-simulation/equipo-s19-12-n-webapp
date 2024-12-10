import { useContext } from "react";
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

const AcercaDe = () => {
  const { datosUsuario } = useContext(Context);

  const {
    direccion = "Falta completar información",
    telefono = "Falta completar información",
    horario = "08:00 am - 20:00 pm",
    pagoEfectivo = true,
    pagoTarjeta = true,
    monederoDigital = true,
    delivery = true,
    recojoEnRestaurante = true,
  } = datosUsuario || {};

  return (
    <div className="acerca-de-container">
      <div className="acerca-de-texto">
        <DescripcionComerciante comercianteId={datosUsuario?.id} />
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
          descripcion={telefono}
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
          texto="Servicios que brinda de manera presencial"
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
    </div>
  );
};

export default AcercaDe;
