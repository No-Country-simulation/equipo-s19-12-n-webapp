import React, { useContext, useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
//import { Link } from 'react-router-dom';
import { Link } from '@mui/material';
//import { Link as RouterLink } from 'react-router-dom';
import ModalRegistrarComerciante from './ModalRegistrarComerciante';
import ModalRestablecer from './ModalRestablecer';
import { Context } from '../../../context/Context';
import usePostFetch from '../../../services/usePostFetch';


// Estilo del modal con breakpoints
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%', // El modal ocupará un 80% del ancho de la pantalla en dispositivos móviles
    maxWidth: 400, // El modal no será más ancho de 400px en pantallas grandes
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '16px', // Agrega bordes redondeados aquí
    '@media (max-width:600px)': {
        width: '90%', // El modal ocupa el 90% del ancho en dispositivos pequeños
        padding: '16px', // Menos padding en móviles
    },
};

function ModalSesionComerciante({ open, onClose }) {
    const [openRegistrarComerciante, setOpenRegistrarComerciante] = useState(false);
    const [openRestablecer, setOpenRestablecer] = useState(false); // Estado para el modal de restablecer
    const formRef = useRef(null);

    function abrirRegistrarCliente() {
        setOpenRegistrarComerciante(true);
    }
    function cerrarRegistrarComerciante() {
        setOpenRegistrarComerciante(false);
    }

    function handleOpenModalRegisrarComerciante() {
        console.log("abrir modal registrar comerciante")
        setOpenRegistrarComerciante(true)
    }
    function handleCerrarModalRegisrarComerciante() {
        console.log("cerrar los 2 modales")
        onClose();
        setOpenRegistrarComerciante(false)
    }
    function atras() {
        console.log("cerrar modal de registro")
        setOpenRegistrarComerciante(false)
        setOpenRestablecer(false)
    }
    function handleOpenModalRestablecer() {
        console.log("abrir modal restablecer contraseña")
        setOpenRestablecer(true)
    }
    function handleCerrarModalRestablecer() {
        console.log("cerrar los 2 modales")
        onClose();
        setOpenRestablecer(false)
    }

    const { postData, data, loading, error } = usePostFetch('https://eaty-three.vercel.app/api/comerciante/login');
    useEffect(() => {

        if (error) {
            console.log('Error:', error);
        } else {
            if (data) {
                // usuario: cliente
                const userData = {
                    id: data._id,
                    cuit: data.cuit,
                    nombre: data.nombre,
                    email: data.email,
                    direccion: data.direccion,
                    ciudad: data.ciudad,
                    telefono: data.telefono,
                    logo: data.logo,
                    img1: data.img1,
                    img2: data.img2,
                    img3: data.img3,
                };
                guardarSesionComerciante(JSON.stringify(userData));
                console.log("contexto:" + JSON.stringify(userData))
                /* {"_id":"67527b70457df8a560780458","cuit":20,"nombre":"el heavy","email":"elheavy@hotmail.com","pass":"elheavy","direccion":"","ciudad":null,"telefono":2020,"logo":"","img1":"","img2":"","img3":"","__v":0} */
            }
        }
    }, [data, error]); // Se ejecuta cuando 'data' cambie

    /* contexto */
    const { iniciarSesion, guardarDatosUsuario } = useContext(Context)
    function guardarSesionComerciante(datos) {

        iniciarSesion("comerciante")
        guardarDatosUsuario(datos)

    }

    async function handleSubmit(e) {
        e.preventDefault();
        console.log('Formulario enviado');
        onClose();
        const formData = new FormData(formRef.current)
        const email = formData.get("email");
        const password = formData.get("password");
        console.log("email:" + email);
        console.log("contraseña:" + password);
        const userData = {
            email,
            pass: password,
        };

        await postData(userData);
    }
    
    return (
        <>
            <Modal
                open={open} // Controla si el modal está visible
                onClose={onClose} // Llama a la función que cierra el modal
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {/* Botón de cerrar (ícono de cruz) */}
                    <IconButton
                        onClick={onClose}
                        sx={{
                            position: 'absolute',
                            top: 8,
                            right: 8,
                            color: 'black',
                        }}
                    >
                        <CloseIcon />
                    </IconButton>

                    {/* Título del modal */}
                    <Typography
                        id="modal-modal-title"
                        sx={{
                            fontFamily: 'Montserrat',
                            color: '#212121',
                            fontWeight: 700,
                            textAlign: 'center',
                            marginTop: 5, // Ajuste para bajar el título
                            fontSize: {
                                xs: '20px',   // En pantallas pequeñas (xs, móviles)
                                sm: '25px',   // En pantallas medianas (sm, tabletas)
                                md: '30px',   // En pantallas grandes (md, escritorio)
                            },
                        }}
                    >
                        Bienvenido
                    </Typography>


                    {/* Descripción */}
                    <Typography
                        id="modal-modal-description"
                        sx={{
                            mt: 2,
                            textAlign: 'center',
                            color: '#212121',
                        }}
                    >
                        comerciante.
                    </Typography>

                    <form ref={formRef} onSubmit={handleSubmit}>
                        {/* Formulario de inicio de sesión */}
                        <Box sx={{ mt: 3 }}>
                            <TextField
                                placeholder="Ingresa tu correo electrónico" // Placeholder personalizado
                                type="email"
                                name='email'
                                fullWidth
                                variant="standard" // Cambiamos a "standard" para mostrar solo el borde inferior
                                InputProps={{
                                    disableUnderline: false, // Asegura que solo el borde inferior se muestre
                                }}
                                sx={{
                                    mt: 2,
                                    fontFamily: 'Montserrat',
                                    '& .MuiInputBase-input': {
                                        fontFamily: 'Montserrat', // Estilo de la fuente
                                    },
                                    '& .MuiInput-underline:before': {
                                        borderBottomColor: '#76B939', // Borde inferior verde
                                    },
                                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                                        borderBottomColor: '#76B939', // Borde inferior verde al pasar el cursor
                                    },
                                }}
                            />
                            <TextField
                                placeholder="Ingresa tu contraseña" // Placeholder personalizado
                                type="password"
                                name='password'
                                fullWidth
                                variant="standard" // Cambiamos a "standard" para mostrar solo el borde inferior
                                InputProps={{
                                    disableUnderline: false, // Asegura que solo el borde inferior se muestre
                                }}
                                sx={{
                                    mt: 2,
                                    fontFamily: 'Montserrat',
                                    '& .MuiInputBase-input': {
                                        fontFamily: 'Montserrat', // Estilo de la fuente
                                    },
                                    '& .MuiInput-underline:before': {
                                        borderBottomColor: '#76B939', // Borde inferior verde
                                    },
                                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                                        borderBottomColor: '#76B939', // Borde inferior verde al pasar el cursor
                                    },
                                }}
                            />


                            {/* Checkbox y enlace */}
                            <Box
                                sx={{
                                    mt: 2,
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    '@media (max-width:600px)': {
                                        flexDirection: 'column', // En móvil, apila los elementos
                                        alignItems: 'flex-start', // Alinea el checkbox a la izquierda
                                    },
                                }}
                            >
                                {/* Checkbox para recordar */}
                                <FormControlLabel
                                    control={<Checkbox color="primary" />}
                                    label="Recordar"
                                    sx={{
                                        fontFamily: 'Montserrat',
                                        fontSize: '16px',
                                        color: '#303030',
                                        marginRight: 'auto', // Empuja el enlace hacia la derecha
                                    }}
                                />

                                {/* Enlace para "¿Olvidaste tu contraseña?" */}
                                <Link
                                    href="#"
                                    underline="hover"
                                    onClick={handleOpenModalRestablecer}
                                    sx={{
                                        fontFamily: 'Montserrat',
                                        fontSize: '16px',
                                        color: '#76B939',
                                        fontWeight: '600',
                                        mt: { xs: 1, sm: 0 }, // Margen superior solo en dispositivos pequeños
                                    }}
                                >
                                    ¿Olvidaste tu contraseña?
                                </Link>
                            </Box>

                            {/* Botón de iniciar sesión */}
                            <Button
                                variant="outlined" // Utilizamos "outlined" para que el botón tenga bordes visibles
                                fullWidth
                                //                           onClick={iniciarSesionComerciante}
                                type='submit'
                                sx={{
                                    fontFamily: 'Montserrat',
                                    mt: 2,
                                    color: '#76B939', // Texto en verde
                                    bgcolor: '#FFFFFF', // Fondo blanco
                                    borderColor: '#76B939', // Borde verde
                                    textTransform: 'none', // Mantiene el texto sin convertir a mayúsculas
                                    '&:hover': {
                                        bgcolor: '#F0FFF0', // Fondo blanco con un ligero tono verde al pasar el cursor
                                        borderColor: '#76B939', // Mantiene el borde verde
                                    },
                                }}
                            >
                                Iniciar sesión
                            </Button>
                            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: { xs: 'column', sm: 'row' } }}>
                                {/* Texto "¿No tiene una cuenta?" */}
                                <Typography
                                    sx={{
                                        fontFamily: 'Montserrat',
                                        fontSize: '16px',
                                        color: '#303030', // Color del texto
                                        mr: { sm: 2 }, // Margen derecho solo en versiones sm (tablet y escritorio)
                                    }}
                                >
                                    ¿No tiene una cuenta?
                                </Typography>

                                {/* Enlace "Regístrese Aquí" */}
                                <Link
                                    href="#"
                                    underline="hover"
                                    onClick={handleOpenModalRegisrarComerciante}
                                    sx={{
                                        fontFamily: 'Montserrat',
                                        fontSize: '16px',
                                        color: '#76B939', // Color verde para el enlace
                                        fontWeight: '600', // Peso de la fuente

                                    }}
                                >
                                    Regístrese Aquí
                                </Link>
                            </Box>
                        </Box>
                    </form>
                </Box>
            </Modal>
            <ModalRegistrarComerciante open={openRegistrarComerciante} onClose={handleCerrarModalRegisrarComerciante} openFrom={""} onBack={atras} />
            <ModalRestablecer open={openRestablecer} onClose={handleCerrarModalRestablecer} openFrom={""} onBack={atras} />
        </>

    );
}

export default ModalSesionComerciante;
