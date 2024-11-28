import React from "react";
import './style.css'
import Icon from "../Icon/Icon";

const InputImg = () => {

    return(
        <div>
            <label for="cargarImg" className="boton_mas">
                <Icon type={'mas-blanco'} className='icono_mas'/>
            </label>
            <input type="file" id="cargarImg" accept="image/*"/>
        </div>
    )
};

export default InputImg;