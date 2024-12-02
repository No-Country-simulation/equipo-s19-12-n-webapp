import Texto from "../../atomos/Textos/Texto";
import Mapa from "../../atomos/Icon/mapa.svg";
import Telefono from "../../atomos/Icon/telefono.svg";
import Reloj from "../../atomos/Icon/reloj.svg";
import Pago from "../../atomos/Icon/pago.svg";
import Tarjeta from "../../atomos/Icon/tarjeta.svg";
import Monedero from "../../atomos/Icon/monedero.svg";
import Delivery from "../../atomos/Icon/delivery.svg";
import Retirar from "../../atomos/Icon/retirar.svg";
import ImagenMapa from "../../../../assets/images/ImagenMapa.svg";

import "./AcercaDe.css";

const AcercaDe = () => {
  return (
    <div className="acerca-de-container">
      <div className="acerca-de-row">
        <Texto
          level="h2"
          texto="Acerca de "
          variante="green"
        />
        <Texto
          level="h2"
          texto="Catálogo"
          variante="black"
        />
      </div>
      <div className="acerca-de-texto">
        <Texto
          level="p"
          texto="En Sabores del Valle , nos especializamos en ofrecer platos frescos y de alta calidad elaborados con ingredientes cuidadosamente seleccionados.
           Nuestra pasión es brindar a cada cliente una experiencia única a través de recetas que combinan tradición y creatividad.
           Ven a visitarnos y descubre por qué somos el lugar preferido de la comunidad. ¡Te esperamos con los brazos abiertos!"
          variante="black"
        />
        <Texto
          level="p"
          texto="Ven a visitarnos y descubre por qué somos el lugar preferido de la comunidad. ¡Te esperamos con los brazos abiertos!"
          variante="black"
        />
      </div>
      <div className="title-detail">
        <Texto
          level="h3"
          texto="Datos generales"
          variante="black"
        />
      </div>

      <div className="row-icon-details">
        <img
          src={Mapa}
          alt="icono de mapa"
        />
        <Texto
          level="p"
          texto="Dirección: Av."
          variante="black"
        />
      </div>
      <div className="row-icon-details">
        <img
          src={Telefono}
          alt="icono de telefono"
        />
        <Texto
          level="p"
          texto="984 745 748"
          variante="black"
        />
      </div>
      <div className="row-icon-details">
        <img
          src={Reloj}
          alt="icono de reloj"
        />
        <Texto
          level="p"
          texto="07:00 am - 09:00 pm"
          variante="black"
        />
      </div>
      <div className="dosFilas">
        <div className="columnaUno">
          <div className="title-detail">
            <Texto
              level="h3"
              texto="Métodos de Pago"
              variante="black"
            />
          </div>
          <div className="row-icon-details">
            <img
              src={Pago}
              alt="icono de pago en efectivo"
            />
            <Texto
              level="p"
              texto="Pago en efectivo"
              variante="black"
            />
          </div>
          <div className="row-icon-details">
            <img
              src={Tarjeta}
              alt="icono de pago en tarjeta"
            />
            <Texto
              level="p"
              texto="Pago con tarjeta"
              variante="black"
            />
          </div>
          <div className="row-icon-details">
            <img
              src={Monedero}
              alt="icono de monedero digital"
            />
            <Texto
              level="p"
              texto="Monedero Digital"
              variante="black"
            />
          </div>
        </div>
        <div className="columnaDos">
          <div className="title-detail">
            <Texto
              level="h3"
              texto="Servicios de entrega"
              variante="black"
            />
          </div>
          <div className="row-icon-details">
            <img
              src={Delivery}
              alt="icono de delivery"
            />
            <Texto
              level="p"
              texto="Monedero Digital"
              variante="black"
            />
          </div>
          <div className="row-icon-details">
            <img
              src={Retirar}
              alt="icono de retirar"
            />
            <Texto
              level="p"
              texto="Recojo en restaurante"
              variante="black"
            />
          </div>
        </div>
      </div>
      <div className="title-detail">
        <Texto
          level="h3"
          texto="Localización"
          variante="black"
        />
      </div>
      <img
        src={ImagenMapa}
        alt="imagen de un mapa"
      />
    </div>
  );
};

export default AcercaDe;
