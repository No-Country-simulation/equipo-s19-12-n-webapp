import React from "react";
import './style.css'
import Icon from "../Icon/Icon";

//{ onImageSelect }
const InputImg = ({ onImageChange }) => {
    //ESTO ES GPT HASTA PROX COMENT
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            onImageChange(reader.result); // Convertir a Base64 y pasar al padre
          };
          reader.readAsDataURL(file);
        }
    };
    //HASTA ACÁ GPT
    //onChange={handleFileChange}
    return(
        <div className="contenedor_Input">
            <label htmlFor="cargarImg" className="boton_mas">
                <Icon type={'mas-blanco'} className='icono_mas'/>
            </label>
            <input type="file" id="cargarImg" accept="image/*" className="inputImg" multiple onChange={onImageChange}/>
        </div>
    )
};

export default InputImg;