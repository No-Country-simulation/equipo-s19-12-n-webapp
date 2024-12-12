import { Card, CardMedia } from '@mui/material'
import React, { useContext } from 'react'
import styles from "../Card/Oferta.module.css"
import { useNavigate } from 'react-router-dom'
import { Context } from '../../../context/Context'

const Oferta = ({tipo,alt,src,titulo,altura,ancho}) => {

    const navigate = useNavigate();
    const { setAllProducts } = useContext(Context)

    function verProductos (categoria){
        fetch(`https://eaty-three.vercel.app/api/productos/busqueda-por-categoria/${categoria}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              Accept: "application/json",
            },
          })
            .then((res) => res.json())
            .then((data) => {
              setAllProducts(data);
            })
            .then(() => navigate("/productos"));
    }

    return (
        <div sx={{
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
        }}
        className={styles.oferta}
        onClick={() => verProductos(titulo)}
        >
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
        </div>
    )
}

export default Oferta