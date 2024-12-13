import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ImagenGenerica from '../Imagen/ImagenGenerica';
import BotonAgregarAcarrito from '../Button/BotonAgregarAcarrito';

const CardProducto = ({ src, alt, titulo, precio1, precio2 }) => {
  return (
    <Card
      sx={{
        width: '100%',  // Ocupa todo el ancho disponible dentro del Grid
        height: 'auto', // Altura dinámica
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: { xs: '8px', sm: '16px' }, // Padding adaptativo
        boxSizing: 'border-box',
        borderRadius: '12px',
        margin: { xs: '8px', sm: '12px' }, // Ajuste de márgenes
      }}
    >
      <ImagenGenerica
        src={src}
        alt={alt}
        sx={{
          width: '100%',
          height: { xs: '150px', sm: '200px', md: '250px' }, // Ajuste dinámico de altura
          objectFit: 'cover',
          borderRadius: '8px',
        }}
      />
      <CardContent sx={{ padding: '8px', flex: 1 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            fontSize: { xs: '14px', sm: '16px', md: '18px' }, // Tamaño dinámico
            textAlign: 'center',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
          }}
        >
          {titulo}
        </Typography>

        <Box display="flex" justifyContent="space-between" gap={2} mt={1}>
          <Typography
            sx={{
              fontSize: { xs: '14px', sm: '18px', md: '20px' }, // Tamaño dinámico
              color: '#909090',
              fontWeight: 700,
            }}
          >
            {precio1}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '14px', sm: '18px', md: '20px' },
              color: '#76B939',
              fontWeight: 700,
            }}
          >
            {precio2}
          </Typography>
        </Box>

        <Box display="flex" justifyContent="center" mt={2}>
          <BotonAgregarAcarrito
            texto="Agregar al carrito"
            colorFondo="#F87C01"
            colorLetra="#fff"
            Icono={ShoppingCartIcon}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardProducto;
