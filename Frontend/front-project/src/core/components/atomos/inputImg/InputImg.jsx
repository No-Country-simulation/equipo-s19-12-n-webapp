import React from "react";
import './style.css'
import Icon from "../Icon/Icon";

//{ onImageSelect }
const InputImg = ({ setImagen }) => {
    //ESTO ES GPT HASTA PROX COMENT
    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "EatyPreset");

        const response = await fetch("https://api.cloudinary.com/v1_1/dabb8jxxh/image/upload", {
          method: "POST",
          body: data
        });

        if (response.ok) {
          const result = await response.json();
          setImagen(result.secure_url)
        } else {
          console.error("Error al subir la imagen:", response.statusText);
        }
    };
    //HASTA ACÁ GPT
    //onChange={handleFileChange}
    return(
        <div className="contenedor_Input">
            <label htmlFor="cargarImg" className="boton_mas">
                <Icon type={'mas-blanco'} className='icono_mas'/>
            </label>
            <input type="file" id="cargarImg" accept="image/*" className="inputImg" multiple onChange={(e) => handleFileChange(e)}/>
        </div>
    )
};

export default InputImg;