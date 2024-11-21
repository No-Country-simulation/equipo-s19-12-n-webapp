import React from "react";
import Texto from "../../atomos/Textos/Texto";
import './style.css';

const Menu_nav  = () => {
    return (
        <ul className="molecula_opc_navbar">
            <li><Texto level = "h3" texto = {'Inicio'} /></li>
            <li><Texto level = "h3" texto = {'Categorias'} /></li>
            <li><Texto level = "h3" texto = {'Perfil'} /></li>
            <li><Texto level = "h3" texto = {'Soporte'} /></li>
        </ul>
    );
};

export default Menu_nav;

