import React, { useState } from "react";
import InputImg from "../../atomos/inputImg/InputImg";
import './style.css';
import PreviewImg from "../../atomos/inputImg/PreviewImg";

//{ onImageChange }
const AgregarImg = ({ evento1, evento2, evento3, evento4, estado1, estado2, estado3, estado4 }) => {
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
            {estado1 === "" ? <InputImg setImagen={evento1} /> : <PreviewImg url={evento1}></PreviewImg> }
            {estado2 === "" ? <InputImg setImagen={evento2} /> : <PreviewImg url={evento2}></PreviewImg> }
            {estado3 === "" ? <InputImg setImagen={evento3} /> : <PreviewImg url={evento3}></PreviewImg> }
            {estado4 === "" ? <InputImg setImagen={evento4} /> : <PreviewImg url={evento4}></PreviewImg> }
        </div>
    )
}

export default AgregarImg;