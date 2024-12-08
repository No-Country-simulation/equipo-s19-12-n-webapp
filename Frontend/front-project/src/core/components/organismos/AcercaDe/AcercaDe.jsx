import React, { useEffect, useState } from "react";
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

const AcercaDe = () => {
  const [datosGenerales, setDatosGenerales] = useState({
    direccion: "",
    telefono: "",
    horario: "",
  });

  const [servicios, setServicios] = useState({
    pagoEfectivo: false,
    pagoTarjeta: false,
    monederoDigital: false,
    delivery: false,
    recojoEnRestaurante: false,
  });

  useEffect(() => {
    // Simulamos llamada al backend para obtener los datos
    // Puedes reemplazar esto con fetch/axios para obtener los datos reales.
    const fetchDatos = async () => {
      // Simula una respuesta del backend
      const responseDatosGenerales = {
        direccion: "Av. Principal 123",
        telefono: "984 745 748",
        horario: "07:00 am - 09:00 pm",
      };
      const responseServicios = {
        pagoEfectivo: true,
        pagoTarjeta: true,
        monederoDigital: false,
        delivery: true,
        recojoEnRestaurante: true,
      };

      setDatosGenerales(responseDatosGenerales);
      setServicios(responseServicios);
    };

    fetchDatos();
  }, []);

  return (
    <div className="acerca-de-container">
      <div className="acerca-de-texto">
        <DescripcionComerciante comercianteId={123} />
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
          descripcion={
            datosGenerales.direccion || "Falta completar información"
          }
          altText="icono de mapa"
        />
      </div>

      <div className="row-icon-details">
        <IconoConTexto
          icono={Telefono}
          descripcion={datosGenerales.telefono || "Falta completar información"}
          altText="icono de teléfono"
        />
      </div>

      <div className="row-icon-details">
        <IconoConTexto
          icono={Reloj}
          descripcion={datosGenerales.horario || "Falta completar información"}
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

      {Object.values(servicios).some((servicio) => servicio) ? (
        <div className="dosFilas">
          <div className="columnaUno">
            {servicios.pagoEfectivo && (
              <IconoConTexto
                icono={Pago}
                descripcion="Pago en efectivo"
                altText="icono de pago en efectivo"
              />
            )}
            {servicios.pagoTarjeta && (
              <IconoConTexto
                icono={Tarjeta}
                descripcion="Pago con tarjeta"
                altText="icono de pago con tarjeta"
              />
            )}
            {servicios.monederoDigital && (
              <IconoConTexto
                icono={Monedero}
                descripcion="Monedero Digital"
                altText="icono de monedero digital"
              />
            )}
          </div>

          <div className="columnaDos">
            {servicios.delivery && (
              <IconoConTexto
                icono={Delivery}
                descripcion="Delivery"
                altText="icono de delivery"
              />
            )}
            {servicios.recojoEnRestaurante && (
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
