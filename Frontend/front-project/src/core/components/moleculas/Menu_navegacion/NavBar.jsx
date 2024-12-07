import React, { useContext, useState } from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Box, Container, Tooltip, Typography } from '@mui/material';
import { AccountCircle, Menu as MenuIcon } from '@mui/icons-material';
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

const categorias = ['Frutas y Verduras', 'Carnes y Pescados', 'Lácteos', 'Panadería', 'Snacks', 'No Perecederos'];

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null); // Estado para abrir el menú hamburguesa
    const [anchorElUser, setAnchorElUser] = useState(null); // Estado para el menú de usuario
    const [openRegistrarCliente, setOpenRegistrarCliente] = useState(false);
    const [openSesionCliente, setOpenSesionCliente] = useState(false);
    const [openSesionComerciante, setOpenSesionComerciante] = useState(false);
    const [openRegistrarComerciante, setOpenRegistrarComerciante] = useState(false);

    const { usuario, cerrarSesion } = useContext(Context); // Contexto
    
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
                <Container maxWidth="xl">
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                        {/* Icono para el menú hamburguesa */}
                        <IconButton
                            edge="start"
                            onClick={handleOpenNavMenu}
                            sx={{ display: { xs: 'block', sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>

                        {/* Logo */}
                        <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
                            <ImagenGenerica
                                src={logo}
                                alt="Logo"
                                sx={{ width: '249px', height: '112px' }}
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
                            <Enlace pagina="/" texto="Conoce Eaty" tipo="enlace_navbar" />
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
                                sx={{ mt: '45px' }}
                                anchorEl={anchorElUser}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {(usuario ===null) && opciones.map((setting) => (
                                    <MenuItem key={setting} onClick={() => handleOpcionSelect(setting)}>
                                        <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                                    </MenuItem>
                                ))}
                                {usuario === "cliente" && opcionesSesionCliente.map((setting) => (
                                    <MenuItem key={setting} onClick={() => handleOpcionSelect(setting)}>
                                        <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                                    </MenuItem>
                                ))}
                                {usuario === "comerciante" && opcionesSesionComerciante.map((setting) => (
                                    <MenuItem key={setting} onClick={() => handleOpcionSelect(setting)}>
                                        <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
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
                            <MenuItem onClick={handleCloseNavMenu}>Inicio</MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>Productos</MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>Contacto</MenuItem>
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




