import React, { useState } from "react";
import InputImg from "../../atomos/inputImg/InputImg";
import './style.css';
import PreviewImg from "../../atomos/inputImg/PreviewImg";

const AgregarImg = ({ evento1, evento2, evento3, evento4, estado1, estado2, estado3, estado4 }) => {

    return(
        <div className="contenedorInputsImg">
            {estado1 === "" ? <InputImg setImagen={evento1} /> : <PreviewImg url={estado1}></PreviewImg> }
            {estado2 === "" ? <InputImg setImagen={evento2} /> : <PreviewImg url={estado2}></PreviewImg> }
            {estado3 === "" ? <InputImg setImagen={evento3} /> : <PreviewImg url={estado3}></PreviewImg> }
            {estado4 === "" ? <InputImg setImagen={evento4} /> : <PreviewImg url={estado4}></PreviewImg> }
        </div>
    )
}

export default AgregarImg;