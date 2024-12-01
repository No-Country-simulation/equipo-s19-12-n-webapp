import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Box } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import Enlace from "../../atomos/Enlace/Enlace.jsx";
import SelectorMenu from '../../atomos/Selector/SelectorMenu.jsx';
import ImagenGenerica from '../../atomos/Imagen/ImagenGenerica.jsx';
import logo from "../../../../../public/assets/images/logo.svg";
import SelectorUsuario from '../../atomos/Selector/SelectorUsuario.jsx';
import ModalRegistrarCliente from '../../organismos/modal/ModalRegistrarCliente.jsx';  // Modal de registro cliente
import ModalSesionCliente from '../../organismos/modal/ModalSesionCliente.jsx';  // Modal de sesión cliente
import ModalSesionComerciante from '../../organismos/modal/ModalSesionComerciante.jsx';  // Modal de sesión comerciante
import ModalRegistrarComerciante from '../../organismos/modal/ModalRegistrarComerciante.jsx';  // Modal de registro comerciante


// Opciones del selector
const opciones = [
    'iniciar sesion cliente',
    'iniciar sesion comerciante',
    'Registrar cliente',
    'registrar comerciante'
];

const categorias = ['Frutas y Verduras', 'Carnes y Pescados', 'Lácteos', 'Panadería', 'Snacks', 'No Perecederos'];

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null); // Estado para el menú
    const [openMenu, setOpenMenu] = useState(false); // Estado para abrir/cerrar el menú móvil
    const [openRegistrarCliente, setOpenRegistrarCliente] = useState(false); // Estado para el modal de registro cliente
    const [openSesionCliente, setOpenSesionCliente] = useState(false); // Estado para el modal de sesión cliente
    const [openSesionComerciante, setOpenSesionComerciante] = useState(false); // Estado para el modal de sesión comerciante
    const [openRegistrarComerciante, setOpenRegistrarComerciante] = useState(false); // Estado para el modal de registro comerciante

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpenMenu(true);
    };

    const handleCloseMenu = () => setOpenMenu(false);

    // Función para manejar la opción seleccionada
    const handleOpcionSelect = (opcion) => {
        if (opcion === "Registrar cliente") {
            setOpenRegistrarCliente(true); // Abrir el modal de registro de cliente
        } else if (opcion === "iniciar sesion cliente") {
            setOpenSesionCliente(true); // Abrir el modal de sesión cliente
        } else if (opcion === "iniciar sesion comerciante") {
            setOpenSesionComerciante(true); // Abrir el modal de sesión comerciante
        } else if (opcion === "registrar comerciante") {
            setOpenRegistrarComerciante(true); // Abrir el modal de registro comerciante
        }
    };

    return (
        <>
            <AppBar position="sticky" sx={{ backgroundColor: '#FFFFFF' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {/* Icono para el menú en móvil */}
                    <IconButton
                        edge="start"
                        onClick={handleMenuClick}
                        sx={{ display: { xs: 'block', sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    {/* Logo */}
                    <Box sx={{
                        display: { xs: 'none', sm: 'flex' },
                        alignItems: 'center',
                        flexGrow: 0,
                        justifyContent: 'flex-start',
                    }}>
                        <ImagenGenerica
                            src={logo}
                            alt="Imagen de ejemplo"
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
                    <SelectorUsuario
                        opciones={opciones}
                        opcionElegida={handleOpcionSelect} // Llama a la función que maneja las opciones
                    />

                    {/* Menú móvil */}
                    <Menu
                        anchorEl={anchorEl}
                        open={openMenu}
                        onClose={handleCloseMenu}
                    >
                        <MenuItem onClick={handleCloseMenu} sx={{ color: '#303030' }}>Inicio</MenuItem>
                        <MenuItem onClick={handleCloseMenu} sx={{ color: '#303030' }}>Productos</MenuItem>
                        <MenuItem onClick={handleCloseMenu} sx={{ color: '#303030' }}>Contacto</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>

            {/* Modales */}

            <ModalSesionCliente
                open={openSesionCliente}  // Controla si el modal de sesión está visible
                onClose={() => setOpenSesionCliente(false)}  // Cierra el modal de sesión cliente
            />

            <ModalSesionComerciante
                open={openSesionComerciante}  // Controla si el modal de sesión comerciante está visible
                onClose={() => setOpenSesionComerciante(false)}  // Cierra el modal de sesión comerciante
            />

            <ModalRegistrarCliente
                open={openRegistrarCliente}  // Controla si el modal está visible
                onClose={() => setOpenRegistrarCliente(false)}  // Cierra el modal de registro cliente
                openFrom={"NavBar"}
            />            

            <ModalRegistrarComerciante
                open={openRegistrarComerciante}  // Controla si el modal de registro comerciante está visible
                onClose={() => setOpenRegistrarComerciante(false)}  // Cierra el modal de registro comerciante
                openFrom={"NavBar"}    
            />
        </>
    );
};

export default Navbar;




