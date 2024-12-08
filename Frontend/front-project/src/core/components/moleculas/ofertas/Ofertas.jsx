import { Box, Grid } from '@mui/material';
import React from 'react'
import ofertas from '../../../data/ofertas'
import Oferta from '../../atomos/Card/Oferta';

const Ofertas = () => {
    console.log(ofertas)
    return (
        <Box sx={{ flexGrow: 1, padding: 2 }}>
            {/* Contenedor para las imágenes con grid */}
            <Grid container spacing={2} sx={{
                // Ajuste de márgenes para diferentes tamaños de pantalla
                '@media (max-width:600px)': {
                    // Márgenes de 10px en móvil
                    gap: '10px',
                },
                '@media (min-width:600px)': {
                    // Márgenes de 31px en modo escritorio
                    gap: '31px',
                }
            }}>
                {ofertas.map((imagen, index) => (
                    <Grid item  key={index}>
                        <Oferta tipo={"img" } alt={"oferta"+imagen.id} src={imagen.imagen} titulo={imagen.titulo}></Oferta>
                        {/* <Card>
                            <CardMedia
                                component="img"
                                alt={`imagen-${index}`}
                                height="140"
                                image={imagen}
                                title={`Imagen ${index}`}
                            />
                        </Card> */}
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Ofertas