import './style.css'
import CategoriasImg from '../../moleculas/CategoriasImg/categoriasImg'
import Texto from '../../atomos/Textos/Texto'

const Categorias = () => {
    return (
        <div>
            <Texto texto={'Categorias'} level={'h2'}/>
            <div className='containerCategorias'>
                <CategoriasImg nombreImg={'frutas-verduras'} tituloCat={'Frutas y verduras'} size={'large'} />
                <CategoriasImg nombreImg={'carnes-pescados'} tituloCat={'carnes y pescados'} size={'large'} />
                <CategoriasImg nombreImg={'lacteos'} tituloCat={'lacteos'} size={'large'} />
                <CategoriasImg nombreImg={'panaderia'} tituloCat={'Panaderia y pasteleria'} size={'large'} />
                <CategoriasImg nombreImg={'snacks'} tituloCat={'Snacks y golosinas'} size={'large'} />
                <CategoriasImg nombreImg={'bebidas'} tituloCat={'Bebidas'} size={'large'} />
                <CategoriasImg nombreImg={'noperecederos'} tituloCat={'Alimentos No perecederos'} size={'large'} />
            </div>
        </div>
    )
}

export default Categorias;