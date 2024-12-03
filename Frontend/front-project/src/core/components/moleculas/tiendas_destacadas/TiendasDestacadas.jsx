import React from 'react';
import tiendas_destacadas from "../../../data/tiendasData";
import CardTienda from '../../atomos/Card/CardTienda';
import { Grid } from '@mui/material'; // Importamos Grid de MUI

const TiendasDestacadas = () => {

  return (
    <Grid 
      container 
      spacing={3}  // Espacio entre las tarjetas
      justifyContent="flex-start"  // Alinea los elementos a la izquierda
      alignItems="flex-start"       // Alinea verticalmente
      sx={{
        padding: { xs: '10px', sm: '20px', md: '30px' }, // Diferente padding según el tamaño de pantalla
      }}
    >
      {tiendas_destacadas.map((tienda) => (
        <Grid 
          item 
          xs={12} 
          sm={6} 
          md={4} 
          lg={3} 
          key={tienda.id} 
          sx={{
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
          }}
        > 
          <CardTienda 
            imagen={tienda.imagen} 
            titulo={tienda.titulo} 
            descripcion={tienda.descripcion} 
            sx={{
              width: '100%',  // Asegura que la tarjeta ocupe todo el ancho del contenedor
              maxWidth: 350,  // Limita el ancho máximo de la tarjeta
              minHeight: 350, // Mantiene una altura mínima constante para la tarjeta
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between', // Asegura que los elementos dentro de la tarjeta estén bien distribuidos
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default TiendasDestacadas;
