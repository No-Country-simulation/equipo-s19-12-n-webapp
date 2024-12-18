import React from 'react';
import { Box } from '@mui/material';

const ImagenGenerica = ({ src, alt, width, height, sx, ...props }) => {
  return (
    <Box
      sx={{
        height: "100%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',  // Para asegurarnos de que las imágenes que exceden el contenedor no se salgan
        ...sx,  // Permite que se agreguen estilos personalizados desde el componente padre
      }}
      {...props}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: width || "auto",  // Si no se pasa width, toma el valor por defecto '100%'
          height: height || "70%",  // Si no se pasa height, mantiene la relación de aspecto // Hace que la imagen cubra el contenedor, sin distorsionarse
        }}
      />
    </Box>
  );
};

export default ImagenGenerica;