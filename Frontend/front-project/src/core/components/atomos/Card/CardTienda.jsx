import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const CardTienda = ({ imagen, titulo, descripcion }) => { // Aquí recibimos las props
  console.log(imagen);
  return (
    <Card
      sx={{
        backgroundColor: '#D9D9D9',
        width: { xs: '178px', sm: 'auto' },  // Contenedor con ancho de 178px en móvil
        height: { xs: '180px', sm: 'auto' },  // Ajusta la altura de la tarjeta en móvil
        margin: '10px auto',  // Añadimos un margen de 10px a la tarjeta en móvil
        display: 'flex',
        flexDirection: 'column',  // Aseguramos que los elementos dentro de la tarjeta estén en columna
        padding: { xs: '0', sm: '16px' },  // Ajustamos padding para móvil y escritorio
        borderRadius: '12px',  // Borde redondeado para la tarjeta
      }}
    >
      {/* Imagen de la card */}
      <CardMedia
        component="img"
        sx={{
          height: { xs: '94px', sm: '140px' },  // 94px en móvil, 140px en pantallas grandes
          width: { xs: '158px', sm: '100%' },  // 158px en móvil, auto en pantallas grandes
          marginTop: '10px',  // Añadimos margen de 10px arriba de la imagen
          marginBottom: '10px',  // Añadimos margen de 10px abajo de la imagen
          marginLeft: 'auto',  // Centra la imagen en el eje horizontal
          marginRight: 'auto',  // Centra la imagen en el eje horizontal
          borderRadius: '8px',  // Borde redondeado para la imagen
        }}
        image={imagen} // Usamos la imagen pasada como prop
        alt={titulo}   // Usamos el título como alt
      />
      <CardContent sx={{ padding: '8px' }}>
        {/* Título de la Card */}
        <Typography
          variant="h6"
          component="div"
          sx={{
            textAlign: 'center',  // Centra el título
            fontWeight: 'bold',
            fontSize: { xs: '1rem', sm: '1.25rem' }, // Ajusta el tamaño del texto según el tamaño de pantalla
          }}
        >
          {titulo}  {/* Mostrar el título */}
        </Typography>
        
      </CardContent>
    </Card>
  );
};

export default CardTienda;
