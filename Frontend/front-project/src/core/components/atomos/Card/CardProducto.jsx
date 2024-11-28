import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Importar el ícono de carrito
import ImagenGenerica from '../Imagen/ImagenGenerica';
import BotonAgregarAcarrito from '../Button/BotonAgregarAcarrito';

const CardProducto = ({ src, alt, titulo, precio1, precio2 }) => {
  return (
    <Card 
      sx={{ 
        width: { xs: '100%', sm: '290px', md: '300px', lg: '320px' },  // Ajuste del ancho según el tamaño de pantalla
        height: { xs: 'auto', sm: '424px', md: 'auto' }, // En pantallas medianas, la altura se ajusta automáticamente
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: { xs: '8px', sm: '16px' }, // Padding más pequeño en móviles
        boxSizing: 'border-box',
        margin: { xs: '8px', sm: '12px' }, // Ajustamos el margen para que no se vean tan grandes
      }}
    >
      {/* Imagen con tamaño ajustado según el tamaño de pantalla */}
      <ImagenGenerica 
        src={src} 
        alt={alt} 
        sx={{
          width: '100%',  // La imagen ocupa todo el ancho de la card
          height: { xs: '200px', sm: '250px', md: '270px' }, // Ajustamos el tamaño de la imagen para pantallas más grandes
          objectFit: 'cover', // Asegura que la imagen no se distorsione
        }}
      />
      <CardContent sx={{ flex: 1 }}>
        {/* Título ajustado */}
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 600, 
            fontSize: { xs: '14px', sm: '16px', md: '18px' }, // Tamaño adaptable
            lineHeight: 1.5, // Aseguramos que el texto tenga un buen espaciado
            textOverflow: 'ellipsis', 
            whiteSpace: 'nowrap', 
            overflow: 'hidden',
          }}
        >
          {titulo}
        </Typography>

        {/* Precios ajustados */}
        <Box display="flex" justifyContent="flex-start" gap={2} mt={1}>
          <Typography 
            sx={{ 
              fontSize: { xs: '18px', sm: '24px', md: '28px' }, // Tamaño de texto adaptable
              color: '#909090', 
              fontWeight: 700,  
              height: '39px',     
              lineHeight: '39px', 
            }}
          >
            {precio1}
          </Typography>
          <Typography 
            sx={{ 
              fontSize: { xs: '18px', sm: '24px', md: '28px' }, // Tamaño de texto adaptable
              color: '#76B939', 
              fontWeight: 700,  
              height: '39px',     
              lineHeight: '39px', 
            }}
          >
            {precio2}
          </Typography>
        </Box>
        
        {/* Botón con ajuste dinámico */}
        <Box display="flex" justifyContent="center" mt={2}>
          <BotonAgregarAcarrito
            texto="Agregar al carrito"
            colorFondo="#F87C01"  // Naranja para el fondo
            colorLetra="#fff"     // Blanco para el texto
            //tamano={{ xs: '12px', sm: '14px', md: '16px' }} // Tamaño adaptable del texto
            Icono={ShoppingCartIcon} // Pasar el componente directamente, no JSX
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardProducto;