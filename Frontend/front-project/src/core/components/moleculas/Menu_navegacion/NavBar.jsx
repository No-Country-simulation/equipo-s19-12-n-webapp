import React, { useContext, useState } from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Box, Container, Tooltip, Typography } from '@mui/material';
import { AccountCircle, Menu as MenuIcon, Padding } from '@mui/icons-material';
import Enlace from "../../atomos/Enlace/Enlace.jsx";
import SelectorMenu from '../../atomos/Selector/SelectorMenu.jsx';
import ImagenGenerica from '../../atomos/Imagen/ImagenGenerica.jsx';
import logo from "../../../../../public/assets/images/logo.svg";
import SelectorUsuario from '../../atomos/Selector/SelectorUsuario.jsx';
import ModalRegistrarCliente from '../../organismos/modal/ModalRegistrarCliente.jsx';
import ModalSesionCliente from '../../organismos/modal/ModalSesionCliente.jsx';
import ModalSesionComerciante from '../../organismos/modal/ModalSesionComerciante.jsx';
import ModalRegistrarComerciante from '../../organismos/modal/ModalRegistrarComerciante.jsx';
import { Context } from '../../../context/Context.jsx';
import { useNavigate } from 'react-router-dom';
import "./style.css"

// Opciones del selector en caso de no haber sesión iniciada
const opciones = [
    'iniciar sesion cliente',
    'iniciar sesion comerciante',
    'Registrar cliente',
    'registrar comerciante'
];
// Opciones del selector en caso de sesión de cliente
const opcionesSesionCliente = [
    'cerrar sesion',
];
// Opciones del selector en caso de sesión de comerciante
const opcionesSesionComerciante = [
    'vender producto',
    'cerrar sesion',
];

const categorias = ['Frutas y Verduras', 'Carnes y Pescados', 'Lácteos', 'Bebidas', 'Panadería y Pastelería', 'Snacks y Golosinas', 'Alimentos no perecederos', 'Otros'];

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null); // Estado para abrir el menú hamburguesa
    const [anchorElUser, setAnchorElUser] = useState(null); // Estado para el menú de usuario
    const [openRegistrarCliente, setOpenRegistrarCliente] = useState(false);
    const [openSesionCliente, setOpenSesionCliente] = useState(false);
    const [openSesionComerciante, setOpenSesionComerciante] = useState(false);
    const [openRegistrarComerciante, setOpenRegistrarComerciante] = useState(false);

    const { usuario, cerrarSesion ,vaciarCarrito,vaciarVenta} = useContext(Context); // Contexto
    const navigate = useNavigate();
    
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget); // Abre el menú hamburguesa
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null); // Cierra el menú hamburguesa
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget); // Abre el menú de usuario
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null); // Cierra el menú de usuario
    };

    // Función para manejar la opción seleccionada
    const handleOpcionSelect = (opcion) => {
        if (opcion === "Registrar cliente") {
            setOpenRegistrarCliente(true);
            setAnchorElUser(null);
        } else if (opcion === "iniciar sesion cliente") {
            setOpenSesionCliente(true);
            setAnchorElUser(null);
        } else if (opcion === "iniciar sesion comerciante") {
            setOpenSesionComerciante(true);
            setAnchorElUser(null);
        } else if (opcion === "registrar comerciante") {
            setOpenRegistrarComerciante(true);
            setAnchorElUser(null);
        } else if (opcion === "cerrar sesion") {
            cerrarSesion();
            vaciarCarrito();
            vaciarVenta();
            navigate('/');
 //           setAnchorElUser(null);
        } else if (opcion === "vender producto") {
            console.log("vender producto");
            setAnchorElUser(null);
        }

        // Cerrar el menú hamburguesa al seleccionar una opción
        handleCloseNavMenu();
    };

    return (
        <>
            <AppBar position="sticky" sx={{ backgroundColor: '#FFFFFF' }}>
                <Container maxWidth="90%">
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 0 }}>

                        {/* Icono para el menú hamburguesa */}
                        <IconButton
                            edge="start"
                            onClick={handleOpenNavMenu}
                            sx={{ display: { xs: 'block', sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>

                        {/* Logo */}
                        <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', height: "112px" }}>
                            <ImagenGenerica
                                src={logo}
                                alt="Logo"
                                sx={{ width: 'auto', height: '100%' }}
                            />
                        </Box>

                        {/* Menú de navegación centrado */}
                        <Box sx={{
                            display: { xs: 'none', sm: 'flex' },
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 2,
                            flexGrow: 1,
                        }}>
                            <Enlace pagina="/" texto="Inicio" tipo="enlace_navbar" />
                            <SelectorMenu categorias={categorias} onCategoriaSelect={(categoria) => console.log(categoria)} />
                            <Enlace pagina="/" texto="Contacto" tipo="enlace_navbar" />
                            <Enlace pagina="/" texto="Ayuda" tipo="enlace_navbar" />
                        </Box>

                        {/* Icono de usuario */}
                        <Box sx={{ ml: 'auto' }}>
                            <Tooltip title="Abrir menú">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <AccountCircle sx={{ fontSize: 48, color: (usuario === "cliente" || usuario === "comerciante") ? '#76B939' : 'inherit' }} />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px'}}
                                anchorEl={anchorElUser}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {(usuario ===null) && <>
                                    <div className='subtituloSesion0'>Usuarios</div>
                                    <MenuItem sx={{ m: '6px'}} key={1} onClick={() => handleOpcionSelect('iniciar sesion cliente')}>
                                        <Typography sx={{ textAlign: 'center', fontFamily: "Montserrat" }}>Iniciar Sesión</Typography>
                                    </MenuItem>
                                    <MenuItem sx={{ m: '6px'}} key={2} onClick={() => handleOpcionSelect('Registrar cliente')}>
                                        <Typography sx={{ textAlign: 'center', fontFamily: "Montserrat" }}>Registrase</Typography>
                                    </MenuItem>
                                    <div className='subtituloSesion0'>Comerciantes</div>
                                    <MenuItem sx={{ m: '6px'}} key={3} onClick={() => handleOpcionSelect('iniciar sesion comerciante')}>
                                        <Typography sx={{ textAlign: 'center', fontFamily: "Montserrat" }}>Iniciar Sesión</Typography>
                                    </MenuItem>
                                    <MenuItem sx={{ m: '6px'}} key={4} onClick={() => handleOpcionSelect('registrar comerciante')}>
                                        <Typography sx={{ textAlign: 'center', fontFamily: "Montserrat" }}>Registrase</Typography>
                                    </MenuItem>
                                </>}
                                {usuario === "cliente" && opcionesSesionCliente.map((setting) => (
                                    <MenuItem sx={{ m: '6px'}} key={setting} onClick={() => handleOpcionSelect(setting)}>
                                        <Typography sx={{ textAlign: 'center', fontFamily: "Montserrat" }}>{setting}</Typography>
                                    </MenuItem>
                                ))}
                                {usuario === "comerciante" && opcionesSesionComerciante.map((setting) => (
                                    <MenuItem sx={{ m: '6px'}} key={setting} onClick={() => handleOpcionSelect(setting)}>
                                        <Typography sx={{ textAlign: 'center', fontFamily: "Montserrat" }}>{setting}</Typography>
                                    </MenuItem>
                                ))}
                                
                            </Menu>
                        </Box>

                        {/* Menú móvil */}
                        <Menu
                            anchorEl={anchorElNav}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                        >
                            <MenuItem sx={{fontFamily: "Montserrat"}} onClick={() => {handleCloseNavMenu(); navigate('/')}}>Inicio</MenuItem>
                            <MenuItem sx={{fontFamily: "Montserrat"}} onClick={() => {handleCloseNavMenu(); navigate('/productos')}}>Productos</MenuItem>
                            <MenuItem sx={{fontFamily: "Montserrat"}} onClick={() => {handleCloseNavMenu(); navigate('/')}}>Contacto</MenuItem>
                        </Menu>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Modales */}
            <ModalSesionCliente open={openSesionCliente} onClose={() => setOpenSesionCliente(false)} />
            <ModalSesionComerciante open={openSesionComerciante} onClose={() => setOpenSesionComerciante(false)} />
            <ModalRegistrarCliente open={openRegistrarCliente} onClose={() => setOpenRegistrarCliente(false)} openFrom={"NavBar"} />
            <ModalRegistrarComerciante open={openRegistrarComerciante} onClose={() => setOpenRegistrarComerciante(false)} openFrom={"NavBar"} />
        </>
    );
};

export default Navbar;




