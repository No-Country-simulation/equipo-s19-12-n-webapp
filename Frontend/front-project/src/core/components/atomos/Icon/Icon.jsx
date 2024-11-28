import React from 'react';
import './style_icono.css';

// Carga todos los archivos SVG dentro de la carpeta Icon
const icons = import.meta.glob('./*.svg', { eager: true });

const Icon = ({ type, className, size, tipo }) => {
  // Busca la ruta del SVG
  const iconPath = icons[`./${type}.svg`]?.default;

  const iconSize =  size === 'xsmall' ? '20px' :
                    size === 'small' ? '32px' :
                    size === 'medium' ? '48px' :
                    size === 'large' ? '60px' : '48px';
        !iconSize === '';

  const tipoClase = tipo === 'circular' ? 'circular' : 'cuadrado';

  if (!iconPath) {
    console.error(`Icono "${type}" no encontrado en la carpeta Icon.`);
    return null;
  }

  return (
    <img 
      src={iconPath}
      alt={type}
      className={{className, tipoClase}}
      style={{width: iconSize, height: iconSize}}
    />
  );
}

export default Icon;