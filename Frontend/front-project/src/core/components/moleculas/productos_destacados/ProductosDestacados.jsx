import React from 'react';
import productos_destacados from "../../../data/ProductosDestacados";
import { Grid } from '@mui/material';
import CardProducto from '../../atomos/Card/CardProducto';

const ProductosDestacados = () => {
  return (
    <Grid
      container
      spacing={2} // Espacio entre las tarjetas
      justifyContent="flex-start"
      alignItems="stretch"
      sx={{
        padding: { xs: '10px', sm: '20px' }, // Ajuste del padding
      }}
    >
      {productos_destacados.map((producto) => (
        <Grid
          item
          xs={6}  // 2 tarjetas por fila en móvil
          sm={4}  // 3 tarjetas por fila en pantallas medianas
          md={3}  // 4 tarjetas por fila en pantallas grandes
          key={producto.id}
        >
          <CardProducto
            src={producto.imagen}
            alt={producto.titulo}
            titulo={producto.titulo}
            precio1={producto.precio1}
            precio2={producto.precio2}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductosDestacados;
