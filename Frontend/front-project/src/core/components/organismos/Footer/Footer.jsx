import Texto from "../../atomos/Textos/Texto";
import Icon from "../../atomos/Icon/Icon";
import "./style.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="seccionFooter">
        <div>
          <Texto
            level={"p"}
            texto={"ACERCA DE NOSOTROS"}
            variante={"tituloFooter"}
          />
          <Texto
            level={"p"}
            texto={"--"}
            variante={"white"}
          />
          <Texto
            level={"p"}
            texto={"Preguntas frecuentes"}
            variante={"white"}
          />
        </div>
        <div>
          <Texto
            level={"p"}
            texto={"POLITICA DE COOKIES"}
            variante={"tituloFooter"}
          />
          <Texto
            level={"p"}
            texto={"Privacidad"}
            variante={"white"}
          />
          <Texto
            level={"p"}
            texto={"Términos y condiciones"}
            variante={"white"}
          />
          <Texto
            level={"p"}
            texto={"Publicidad"}
            variante={"white"}
          />
        </div>
        <div>
          <Texto
            level={"p"}
            texto={"CATEGORIAS"}
            variante={"tituloFooter"}
          />
          <Texto
            level={"p"}
            texto={"Frutas y verduras"}
            variante={"white"}
          />
          <Texto
            level={"p"}
            texto={"Carnes y pescado"}
            variante={"white"}
          />
          <Texto
            level={"p"}
            texto={"Lácteos y huevos"}
            variante={"white"}
          />
          <Texto
            level={"p"}
            texto={"Panadería y pastelería"}
            variante={"white"}
          />
        </div>
        <div>
          <Texto
            level={"p"}
            texto={"UNETE A LA COMUNIDAD"}
            variante={"tituloFooter"}
          />
          <div className="redes">
            <Icon
              type={"facebook"}
              size={"xsmall"}
            />
            <Icon
              type={"instagram"}
              size={"xsmall"}
            />
            <Icon
              type={"twitter"}
              size={"xsmall"}
            />
            <Icon
              type={"youtube"}
              size={"xsmall"}
            />
          </div>
          <span className="contacto">
            <Icon
              type={"telefono-blanco"}
              size={"xsmall"}
            />
            <Texto
              level={"p"}
              texto={"123 456 789 / 994926294"}
              variante={"white"}
            />
          </span>
          <span className="contacto">
            <Icon
              type={"email"}
              size={"xsmall"}
            />
            <Texto
              level={"p"}
              texto={"eaty@gmail.com"}
              variante={"white"}
            />
          </span>
        </div>
      </div>
      <div className="derechos">
        <Texto
          level={"p"}
          texto={"© 2024 Eaty - Todos los derechos reservados"}
          variante={"white"}
        />
      </div>
    </section>
  );
};

export default Footer;
