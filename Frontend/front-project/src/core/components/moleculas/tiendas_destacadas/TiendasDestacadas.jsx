import React from 'react';
import tiendas_destacadas from "../../../data/tiendasData";
import CardTienda from '../../atomos/Card/CardTienda';
import { Grid } from '@mui/material'; // Importamos Grid de MUI

const TiendasDestacadas = () => {
  console.log(tiendas_destacadas); // Verifica que los datos se están recibiendo correctamente
  return (
    <Grid 
      container 
      spacing={3}
      justifyContent="flex-start"  // Alinea los elementos a la izquierda
      alignItems="center"          // Centra los elementos verticalmente
      sx={{
        // Agregamos márgenes para la versión escritorio
        padding: { xs: '10px', sm: '20px' },
      }}
    >
      {tiendas_destacadas.map((tienda) => (
        <Grid item xs={6} sm={6} md={3} key={tienda.id}> {/* Ajuste del grid */}
          <CardTienda 
            imagen={tienda.imagen} 
            titulo={tienda.titulo} 
            descripcion={tienda.descripcion} 
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default TiendasDestacadas;