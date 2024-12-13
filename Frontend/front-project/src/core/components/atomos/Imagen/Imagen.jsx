import React from 'react'
import './style_imagen.css'

const Imagen = ({ src, alt, width, height, shape }) => {
    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={shape === 'circle' ? 'circle' : 'default'}
        />
    );
};

export default Imagen
// ejemplo de llamado
{/* <Imagen 
                src="/assets/images/uva.jpg" 
                alt="Descripción de la imagen" 
                width="300" 
                height="200" 
                shape="circle"  // cambiar a "default" si no quieres círculo
            /> 
            
   <Imagen 
                src="/assets/images/fondo1140x314.svg" 
                alt="Descripción de la imagen" 
                width="1140" 
                height="314" 
                shape="default"  // cambiar a "default" si no quieres círculo
            />
        <Imagen 
                src="/assets/images/circular220x220.svg" 
                alt="Descripción de la imagen" 
                width="220" 
                height="220" 
                shape="circular"  // cambiar a "default" si no quieres círculo
            />

<Imagen 
                src="/assets/images/Frutasyverduras.svg" 
                alt="Descripción de la imagen" 
                width="93.33" 
                height="120" 
                shape="circular"  // cambiar a "default" si no quieres círculo
            />         
            
            
            */}