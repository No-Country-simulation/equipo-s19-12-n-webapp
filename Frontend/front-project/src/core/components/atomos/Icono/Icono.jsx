
import React from 'react';
import './style_icono.css'; // Asegúrate de que el archivo de estilo esté importado

const Icono = ({ size, src, tipo, alt }) => {
    // Establecer el tamaño del icono
    const iconSize = size === 'small' ? '32px' :
                     size === 'medium' ? '48px' :
                     size === 'large' ? '60px' : '48px'; // Tamaño predeterminado si no se pasa `size`

    // Definir la clase basada en el parámetro `tipo`
    const tipoClase = tipo === 'circular' ? 'circular' : 'cuadrado';

    return (
        <img 
            src={src}        
            alt={alt}        
            className={tipoClase} // Aplica la clase CSS para los estilos generales y la clase condicional
            style={{ width: iconSize, height: iconSize }}  // Aplicar tamaño dinámico
        />
    );
}

export default Icono;
  
{/* <Icono size="small" src="/assets/react.svg" tipo="cuadrado" alt="Icono pequeño" />
        
       
    <Icono size="medium" src="/assets/react.svg" tipo="circular" alt="Icono mediano" />
        
        
    <Icono size="large" src="/assets/react.svg" tipo="cuadrado" alt="Icono grande" />
    <Icono size="large" src="/assets/icono_corazon.svg" alt="Icono grande" />
    <Icono size="large" src="/assets/icono-mapa.svg" tipo="circular" alt="Icono grande" /> */}