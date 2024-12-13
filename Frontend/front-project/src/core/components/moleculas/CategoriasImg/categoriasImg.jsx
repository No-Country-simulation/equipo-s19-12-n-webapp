import ImagenCategorias from '../../atomos/ImgCategorias/ImgCategorias';
import Texto from '../../atomos/Textos/Texto';
import './style.css'

const CategoriasImg = ({ nombreImg, size, tituloCat}) => {
    return(
        <div className='contenedor'>
            <ImagenCategorias type={nombreImg} size={size} />
            <Texto level={'p'} texto={tituloCat}/>
        </div>
    )
};

export default CategoriasImg;