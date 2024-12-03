// import Button from "../../core/components/atomos/Button/Button";
// import Texto from "../../core/components/atomos/Textos/Texto";
import Footer from "../../core/components/organismos/Footer/Footer";
// import CategoriasImg from "../../core/components/moleculas/CategoriasImg/categoriasImg";
// import Categories from "../../core/components/organismos/Categorias/Categorias";
// import AgregarImg from "../../core/components/moleculas/AgregarImg/AgregarImg";
// import Inputs from "../../core/components/atomos/Inputs/Inputs";
// import SelectorInput from "../../core/components/atomos/Selector/SelectorInput";
// import InputTit from "../../core/components/moleculas/InputTit/InputTit";
import FormProductos from "../../core/components/organismos/FormAgregarProductos/FormProductos";
import SearchBar from "../../core/components/organismos/SearchBar/SearchBar"

const Categorias = () => {
  return (
    // <div>Categorias</div>
    <div>
      {/* <Button
        texto={"probando"}
        variante={"white"}
        icon={"carrito"}
        iconSize={"xsmall"}
      />
      <Texto
        level={"h1"}
        texto={"probando h1 naranja"}
        variante={"orange"}
      />
      <CategoriasImg nombreImg={'carnes-pescados'} tituloCat={'carnes y pescados'} size={'large'} />
      <Categories />
      <AgregarImg />
      <Inputs placeholder={'Precio'} type={'number'} />
      <SelectorInput categorias={['opción 1', 'opcion2', 'opcion3']} placeholder={'productoss'} />
      <InputTit titulo={'Nombre del producto'} modo={'input'} type={'text'} placeholder={'pureba input'}/>
      <InputTit titulo={'Nombre de otra cooosa'} modo={'selector'} placeholder={'pureba selector'} categorias={['opc1', 'opc2', 'opc3']}/> */}
      <SearchBar />
      <FormProductos />
      <Footer />   
    </div>
  );
};

export default Categorias;
