import React from 'react';

// Carga todos los archivos SVG dentro de la carpeta Icon
const icons = import.meta.glob('./*.svg', { eager: true });

const Icon = ({ type, className }) => {
  // Busca la ruta del SVG
  const iconPath = icons[`./${type}.svg`]?.default;

  if (!iconPath) {
    console.error(`Icono "${type}" no encontrado en la carpeta Icon.`);
    return null;
  }

  return <img src={iconPath} alt={type} className={className} />;
};

export default Icon;