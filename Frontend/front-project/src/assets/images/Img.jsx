import React from 'react';
import './style.css';

// Carga todos los archivos SVG dentro de la carpeta Images
const imgs = import.meta.glob('./*.png', { eager: true });

const Img = ({ type, size, tipo }) => {
  // Busca la ruta del PNG
  const imgPath = imgs[`./${type}.png`]?.default;

  const imgSize =  size === 'xsmall' ? '20px' :
                    size === 'small' ? '32px' :
                    size === 'medium' ? '48px' :
                    size === 'large' ? '60px' :
                    size === 'xlarge' ? '100px' : '48px';
        !imgSize === '';

  const tipoClase = tipo === 'circular' ? 'circular' : 'cuadrado';

  if (!imgPath) {
    console.error(`Imagen "${type}" no encontrado en la carpeta Img.`);
    return null;
  }

  return (
    <img 
      src={imgPath}
      alt={type}
      className={{tipoClase}}
      style={{width: imgSize, height: imgSize}}
    />
  );
}

export default Img;