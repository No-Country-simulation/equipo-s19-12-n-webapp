import Texto from "../../atomos/Textos/Texto";
import Input from "../../atomos/Inputs/Inputs";
import SelectorInput from "../../atomos/Selector/SelectorInput";

const InputTit = ({ modo, titulo, type, placeholder, categorias = [] }) => {

    return(
        <div className="contenedorInput">
            <Texto level={'h3'} texto={titulo}/>
            { modo === 'input' && (<Input type={type} placeholder={placeholder}/>)}
            { modo === 'selector' && <SelectorInput categorias={categorias} placeholder={placeholder} />}
        </ div>
    )

}

export default InputTit;