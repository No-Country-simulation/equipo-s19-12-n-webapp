import React, { useState } from "react";
import InputImg from "../../atomos/inputImg/InputImg";
import './style.css';

//{ onImageChange }
const AgregarImg = ({ onImageChange }) => {
    //desde aca hasta prox coment con gpt
    const [ images, setImages] = useState([]);

    const handleImageUpdate = (index, newImage) => {
        const updatedImages = [...images];
        updatedImages[index] = newImage;
        setImages(updatedImages);
        onImageChange(updatedImages);
    };

    //hasta aca con gpt

    return(
        //ESTO ES EL ORIGINAL POR MI
        // <div className="contenedorInputsImg">
        //     <InputImg />
        //     <InputImg />
        //     <InputImg />
        //     <InputImg />
        // </div>

        //ACÁ ARRANCA EL GPT
        <div className="contenedorInputsImg">
            <InputImg onImageChange={onImageChange} />
            <InputImg onImageChange={onImageChange} />
            <InputImg onImageChange={onImageChange} />
            <InputImg onImageChange={onImageChange} />
        </div>
    )
}

export default AgregarImg;