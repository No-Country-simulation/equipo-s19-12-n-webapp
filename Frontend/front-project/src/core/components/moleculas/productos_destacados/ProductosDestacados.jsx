import React from 'react';
import productos_destacados from "../../../data/ProductosDestacados"; // Asegúrate de importar correctamente el array de productos
import { Grid } from '@mui/material'; // Importamos Grid de MUI
import CardProducto from '../../atomos/Card/CardProducto';

const ProductosDestacados = () => {
  console.log(productos_destacados); // Verifica que los datos se están recibiendo correctamente
  
  return (
    <Grid 
      container 
      spacing={3}  // Espacio entre las tarjetas
      justifyContent="flex-start"  // Alinea los elementos a la izquierda
      alignItems="stretch"          // Asegura que las tarjetas se estiren verticalmente
      sx={{
        padding: { xs: '10px', sm: '20px' }, // Ajuste del padding para diferentes tamaños
      }}
    >
      {productos_destacados.map((producto) => (
        <Grid 
          item 
          xs={6}  // En pantallas móviles, mostramos 2 tarjetas por fila
          sm={6}  // En pantallas medianas, seguimos mostrando 2 tarjetas por fila
          md={3}  // En pantallas grandes mostramos 4 tarjetas por fila
          key={producto.id}
        >
          <CardProducto
            src={producto.imagen}   // Asumiendo que cada producto tiene una propiedad 'imagen'
            alt={producto.titulo}   // Asumiendo que cada producto tiene una propiedad 'titulo' para el alt
            titulo={producto.titulo} // Asumiendo que cada producto tiene un 'titulo'
            precio1={producto.precio1}
            precio2={producto.precio2}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductosDestacados;