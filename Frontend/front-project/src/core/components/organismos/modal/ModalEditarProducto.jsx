import './style.editar.css'
import Texto from '../../atomos/Textos/Texto'
import Button from '../../atomos/Button/Button'
import Icon from '../../atomos/Icon/Icon'

const Modal = ({ onClose, onAccept}) => {
    return (
        <div className='modal-overlay'>
            <div className='modal-content'>
                <Icon type={'check'} size={'large'}/>
                <Texto level={'h2'} texto= {'¡Producto editado con éxito!'} />
                <Texto level={'p'} texto={'La información del producto se ha actualizado correctamente en tu catálogo. Puedes seguir editando o volver a tu perfíl'} />
                <Button texto={'Cancelar'} variante={'green'} onClick={onClose} />
                <Button texto={'Aceptar'} variante={'orange'} onClick={onAccept} />
            </div>
        </div>
    )
};

export default Modal;