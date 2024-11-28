import Button from "../../core/components/atomos/Button/Button";
import Texto from "../../core/components/atomos/Textos/Texto";
import InputImg from "../../core/components/atomos/inputImg/InputImg";
import Pagination from "../../core/components/moleculas/Pagination/Pagination";
import Footer from "../../core/components/organismos/Footer/Footer";

const Categorias = () => {
  return (
    // <div>Categorias</div>
    <div>
      <Button
        texto={"probando"}
        variante={"white"}
        icon={"carrito"}
        iconSize={"xsmall"}
      />
      <Button
        texto={"probando"}
        variante={"white"}
      />
      <Button
        texto={"probando"}
        variante={"orange"}
      />
      <Button
        texto={"probando"}
        variante={"green"}
      />
      <Texto
        level={"h1"}
        texto={"probando h1 naranja"}
        variante={"orange"}
      />
      <Texto
        level={"h2"}
        texto={"probando h2 verde"}
        variante={"green"}
      />
      <Texto
        level={"h3"}
        texto={"probando h3"}
      />
      <Texto
        level={"p"}
        texto={"probando regular"}
      />
      <Texto
        level={"p"}
        texto={"ACERCA DE NOSOTROS"}
        variante={"tituloFooter"}
      />
      <InputImg />
      <Pagination />
      <Footer />
    </div>
  );
};

export default Categorias;
