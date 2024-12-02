import Texto from "../../atomos/Textos/Texto";
import AgregarImg from "../../moleculas/AgregarImg/AgregarImg";
import InputTit from "../../moleculas/InputTit/InputTit";
import Boton from '../../atomos/Button/Button'
import './style.css'

const FormProductos = () => {
    return (
        <form>
                <Texto level={'h2'} texto={'Cargar producto'} />
                <AgregarImg />
            <div className="seccion">
                <InputTit titulo={'Nombre del producto'} modo={'input'} type={'text'} />
                <InputTit titulo={'Precio'} modo={'input'} type={'number'} placeholder={'$'}/>
                <InputTit modo={'selector'} placeholder={'Categorías'}
                categorias={['Frutas y verduras', 'Carnes y pescados', 'Lacteos', 'Panadería y pastelería', 'Snacks y golosinas', 'Bebidas', 'No perecederos']} />
                <InputTit titulo={'Stock'} modo={'input'} placeholder={'unidades'} type={'number'}/> 
            </div>
            
            <Texto level={'h2'} texto={'Detalle del alimento'} />
            <div className="seccion"> 
                <InputTit titulo={'Cond. de almacenamiento'} modo={'selector'} placeholder={'Condiciones'}
                categorias={['Refrigerado', 'Ambiente seco', 'otra opc', 'otra opc']} />
                <InputTit titulo={'Estado del producto'} modo={'selector'} placeholder={'Estado'}
                categorias={['Ligeramente abierto', 'otra opc', 'otra opc', 'otra opc']} />
                <InputTit titulo={'Fecha de vencimiento'} modo={'input'} placeholder={'dd/mm/aaaa'} type={'date'}/>
            </div>

            <div className="botones">
                <Boton texto={'Cargar producto'} variante={'orange'} />
                <Boton texto={'Cancelar'} variante={'green'} />
            </div>        
        </ form>
    )
}

export default FormProductos;