import { Box, Grid } from '@mui/material';
import React from 'react'
import ofertas from '../../../data/ofertas'
import Oferta from '../../atomos/Card/Oferta';
import './style.css'

const Ofertas = () => {
    console.log(ofertas)
    return (
        <div className='contenedorOfertasHome'>
            <div className='contenedorTituloOfertas'>¿Qué oferta elegís hoy?</div>
            <div className='contenedorCarrucelOfertas'>
                {ofertas.map((imagen, index) => (
                    <Oferta tipo={"img" } alt={"oferta"+imagen.id} src={imagen.imagen} titulo={imagen.titulo}></Oferta>
                ))}
            </div>
        </div>
    );
}

export default Ofertas