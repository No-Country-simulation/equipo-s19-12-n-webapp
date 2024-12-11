import { Box, Button, Divider, Typography } from '@mui/material';
import React from 'react';
import imagenConfirmacion from '../../../../../public/assets/images/confirmacion.svg';
import imagenTilde from '../../../../../public/assets/images/confirmacion_tilde.svg';

const Confirmacion = () => {
    // Array de productos de ejemplo
    const productos = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4', 'Producto 5'];

    return (
        <>
            <Box
                sx={{
                    display: 'flex', // Usa flexbox para alinear elementos horizontalmente
                    justifyContent: 'center', // Centra el contenido en el eje horizontal
                    alignItems: 'center', // Centra el contenido en el eje vertical
                    height: '100vh', // Hace que el componente ocupe todo el alto de la pantalla
                    width: '100%', // Asegura que ocupe todo el ancho de la pantalla
                }}
            >
                {/* Contenedor para el contenido (Box principal) */}
                <Box
                    sx={{
                        width: '594px', // Ancho específico
                        height: '715px', // Alto específico
                        display: 'flex', // Flexbox para centrar el contenido dentro
                        justifyContent: 'flex-start',
                        alignItems: 'center', // Centra el contenido verticalmente
                        flexDirection: 'column', // Alinea los elementos verticalmente
                        padding: 2, // Espaciado interno
                    }}
                >
                    {/* Contenedor con la tilde encima del título */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column', // Alinea verticalmente la tilde y el título
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center', // Centra el texto del título
                            padding: 2,
                        }}
                    >
                        <Box
                            component="img"
                            src={imagenTilde} // Imagen de la tilde
                            alt="Imagen de confirmación"
                            sx={{
                                height: '76px', // Tamaño de la imagen
                                width: '76px', // Tamaño de la imagen
                                marginBottom: 2, // Espaciado entre la tilde y el título
                            }}
                        />
                        <Box
                            sx={{
                                width: '572px', // Ancho específico
                                height: '39px', // Alto específico
                                fontFamily: 'Montserrat', // Tipo de fuente
                                fontSize: '32px', // Tamaño de la fuente
                                fontStyle: 'normal', // Estilo de fuente
                                fontWeight: 600, // Peso de la fuente
                                lineHeight: 'normal', // Interlineado
                                textAlign: 'center', // Centra el texto dentro del Box
                            }}
                        >
                            Tu compra se realizó exitosamente
                        </Box>
                    </Box>

                    {/* Box 2 */}
                    <Box
                        sx={{
                            width: '594px', // Ancho específico
                            height: '319px', // Alto específico
                            textAlign: 'flex-start',
                            display: 'flex', // Usamos flexbox
                            flexDirection: 'column', // Alineamos los elementos verticalmente
                            justifyContent: 'flex-start',
                            padding: 2, // Espaciado interno
                        }}
                    >
                        <Box ><Typography
                            sx={{
                                fontFamily: 'Montserrat',   // Tipo de fuente
                                fontSize: '24px',           // Tamaño de la fuente
                                fontStyle: 'normal',        // Estilo de la fuente
                                fontWeight: 600,            // Peso de la fuente
                                lineHeight: 'normal',       // Interlineado
                            }}
                        >
                            nombre del comercio
                        </Typography></Box>
                        <Box ><Typography
                            sx={{
                                fontFamily: 'Montserrat',   // Tipo de fuente
                                fontSize: '16px',           // Tamaño de la fuente
                                fontStyle: 'normal',        // Estilo de la fuente
                                fontWeight: 500,            // Peso de la fuente
                                lineHeight: 'normal',       // Interlineado
                                marginTop: '4px'
                            }}
                        >
                            Direccion del comercio
                        </Typography></Box>
                        <Box sx={{ marginBottom: 1, display: 'flex', flexDirection: 'normal', justifyContent: 'flex-start' }}>
                            <Typography
                                sx={{
                                    fontFamily: 'Montserrat',   // Tipo de fuente
                                    fontSize: '20px',           // Tamaño de la fuente
                                    fontStyle: 'normal',        // Estilo de la fuente
                                    fontWeight: 600,            // Peso de la fuente
                                    lineHeight: 'normal',       // Interlineado
                                    marginTop: '4px'
                                }}
                            >
                                Fecha:
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: 'Montserrat',   // Tipo de fuente
                                    fontSize: '16px',           // Tamaño de la fuente
                                    fontStyle: 'normal',        // Estilo de la fuente
                                    fontWeight: 400,            // Peso de la fuente
                                    lineHeight: 'normal',       // Interlineado
                                    textAlign: 'left',         // Alinea el texto a la izquierda
                                    marginTop: '8px',
                                    marginLeft: '4px',
                                }}
                            >
                                Tu texto aquí
                            </Typography>
                        </Box>
                        <Box sx={{ marginBottom: 1, display: "flex", flexDirection: 'normal', }}><Typography
                            sx={{
                                fontFamily: 'Montserrat',   // Tipo de fuente
                                fontSize: '20px',           // Tamaño de la fuente
                                fontStyle: 'normal',        // Estilo de la fuente
                                fontWeight: 600,            // Peso de la fuente
                                lineHeight: 'normal',       // Interlineado
                            }}
                        >
                            Hora:
                        </Typography>
                            <Typography
                                sx={{
                                    fontFamily: 'Montserrat',   // Tipo de fuente
                                    fontSize: '16px',           // Tamaño de la fuente
                                    fontStyle: 'normal',        // Estilo de la fuente
                                    fontWeight: 400,            // Peso de la fuente
                                    lineHeight: 'normal',       // Interlineado
                                    marginTop: '4px',
                                    marginLeft: '4px',
                                }}
                            >
                                Tu texto aquí
                            </Typography></Box>
                        <Box sx={{ marginBottom: 1 }}><Typography
                            sx={{
                                fontFamily: 'Montserrat',   // Tipo de fuente
                                fontSize: '24px',           // Tamaño de la fuente
                                fontStyle: 'normal',        // Estilo de la fuente
                                fontWeight: 600,            // Peso de la fuente
                                lineHeight: 'normal',       // Interlineado
                            }}
                        >
                            Pedido
                        </Typography></Box>
                        {/* Box para el listado de productos */}
                        <Box
                            sx={{
                                width: '198px', // Ancho específico
                                height: '80px', // Alto específico
                                borderBottom: '2px solid black', // Solo el borde inferior azul
                                overflowY: 'auto', // Habilita el scroll vertical si el contenido excede el tamaño
                                padding: 1, // Espaciado interno
                            }}
                        >
                            {productos.map((producto, index) => (
                                <Box key={index} sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                                    {/* Viñeta al comienzo del nombre del producto */}
                                    <Box component="span" sx={{ marginRight: 1 }}>•</Box>
                                    <Box component="span">{producto}</Box>
                                </Box>
                            ))}
                        </Box>
                        <Box
                            sx={{
                                display: 'flex', // Alinea los textos uno al lado del otro
                                justifyContent: 'normal', // Distribuye el espacio entre los textos
                                width: '100%', // Asegura que ocupe el ancho completo
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: 'Montserrat',   // Tipo de fuente
                                    fontSize: '24px',           // Tamaño de la fuente
                                    fontStyle: 'normal',        // Estilo de la fuente
                                    fontWeight: 600,            // Peso de la fuente
                                    lineHeight: 'normal',       // Interlineado
                                }}
                            >
                                Total:
                            </Typography>

                            <Typography
                                sx={{
                                    fontFamily: 'Montserrat',   // Tipo de fuente
                                    fontSize: '24px',           // Tamaño de la fuente
                                    fontStyle: 'normal',        // Estilo de la fuente
                                    fontWeight: 600,            // Peso de la fuente
                                    lineHeight: 'normal',       // Interlineado
                                    color: '#76B939',
                                    marginLeft: '4px'
                                }}
                            >
                                $9999
                            </Typography>
                        </Box>

                    </Box>
                    {/* box 3 */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',  // Los elementos estarán uno debajo del otro
                            alignItems: 'center',     // Alinea los elementos en el centro
                            padding: 2,               // Espaciado interno
                            width: '100%',            // Asegura que el Box ocupe todo el ancho
                            maxWidth: '600px',        // Máximo ancho
                            bgcolor: 'background.paper', // Fondo del Box
                        }}
                    >
                        {/* Número de compra */}
                        <Typography
                            sx={{
                                fontFamily: 'Montserrat',
                                fontSize: '24px',
                                fontStyle: 'normal',
                                fontWeight: 600,
                                lineHeight: 'normal',
                                marginBottom: 2,        // Espacio debajo del texto
                            }}
                        >
                            Tu número de compra es #254789GG
                        </Typography>

                        {/* Párrafo con la descripción */}
                        <Typography
                            sx={{
                                fontFamily: 'Montserrat',
                                fontSize: '16px',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                lineHeight: 'normal',
                                textAlign: 'center',    // Centra el texto dentro del Box
                                marginBottom: 4,        // Espacio debajo del párrafo
                            }}
                        >
                            Gracias por tu compra. Tu pedido ha sido recibido y procesado con éxito.
                            Este código te permitirá hacer el seguimiento de tu pedido y recibir actualizaciones sobre el estado del envío.
                        </Typography>

                        {/* Botón para descargar el comprobante */}
                        <Button
                            variant="contained"
                            sx={{
                                display: 'flex',          // Hace que el botón use flexbox
                                padding: '8px',           // Ajusta el padding del botón
                                justifyContent: 'center', // Centra el contenido dentro del botón
                                alignItems: 'center',     // Alinea los elementos en el centro
                                gap: '12px',              // Espacio entre los elementos dentro del botón
                                alignSelf: 'stretch',     // Hace que el botón ocupe todo el ancho
                                backgroundColor: '#F87C01', // Color de fondo del botón
                                color: 'white',           // Color del texto del botón
                                fontSize: '16px',         // Tamaño de la fuente
                                fontWeight: 600,          // Peso de la fuente
                                borderRadius: '8px',      // Bordes redondeados
                                textTransform: 'none',    // Evita que el texto se transforme en mayúsculas
                                '&:hover': {
                                    backgroundColor: '#F87C01',
                                },
                            }}
                        >
                            Descargar Comprobante
                        </Button>
                    </Box>

                </Box>

                {/* Imagen al lado del Box */}
                <Box
                    component="img"
                    src={imagenConfirmacion} // URL de la imagen
                    alt="Imagen de confirmación"
                    sx={{
                        height: '594px', // Igual a la altura del Box
                        width: '600px', // Ajusta el ancho automáticamente para mantener la proporción
                        borderRadius: '8px', // Bordes redondeados
                        marginLeft: 2, // Espaciado entre el Box y la imagen
                    }}
                />
            </Box >
        </>
    );
};

export default Confirmacion;


