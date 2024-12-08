import { Card, CardMedia } from '@mui/material'
import React from 'react'

const Oferta = ({tipo,alt,src,titulo,altura,ancho}) => {
    return (
        <Card sx={{
            // Ajustamos el tamaño de la Card para que coincida con la imagen
            width: 115,  // Ancho de la Card igual al de la imagen en modo móvil
            height: 150, // Altura de la Card igual a la altura de la imagen en modo móvil
            borderRadius: '12px', // Bordes redondeados (puedes ajustar el valor)
            boxShadow: 'none', // Sin sombra
            overflow: 'hidden',  // Asegura que la imagen no sobresalga de la Card
            // Tamaño en modo escritorio
            '@media (min-width:600px)': {
                width: 140,  // Ancho de la Card igual al de la imagen en modo escritorio
                height: 202, // Altura de la Card igual a la altura de la imagen en modo escritorio
            },
        }}>
            <CardMedia
                component={tipo}
                alt={alt}
                image={src}
                title={titulo}
                sx={{
                    // Tamaño en modo móvil
                    width: 115,  // Ancho en px
                    height: 150, // Altura en px
                    objectFit: 'cover', // Asegura que la imagen se ajuste correctamente

                    // Tamaño en modo escritorio
                    '@media (min-width:600px)': {
                        width: 140,  // Ancho en px
                        height: 202, // Altura en px
                    },
                }}
            />
        </Card>
    )
}

export default Oferta