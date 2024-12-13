import React, { useContext } from 'react'

import { Navigate } from 'react-router-dom';
import { Context } from '../../context/Context';

const PrivateRouteCliente = ({ children }) => {
    const { usuario } = useContext(Context);

    // si esta logueado entonces muestra el children
    console.log(usuario)
    if (usuario === "cliente")
        return children
    // si no esta logueado redirecciona
    return <>
        <Navigate to={"/productos"}></Navigate>
    </>

}

export default PrivateRouteCliente