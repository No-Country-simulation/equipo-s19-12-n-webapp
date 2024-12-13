import './style.css';
import Img from '../../../../assets/images/Img';

const ImgCategorias = ({ type, size }) => {

    return(
        <div className='container'>
            <Img type={type} size={size} />
            <Img type={type} size={size} />
        </div>
    )
}

export default ImgCategorias;