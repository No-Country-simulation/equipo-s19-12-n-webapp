import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Box } from '@mui/material';
import { Menu as MenuIcon, AccountCircle } from '@mui/icons-material';  // Importamos solo los íconos necesarios
import Enlace from "../../atomos/Enlace/Enlace.jsx";
import SelectorMenu from '../../atomos/Selector/SelectorMenu.jsx';
import ImagenGenerica from '../../atomos/Imagen/ImagenGenerica.jsx';
import logo from "../../../../../public/assets/images/logo.svg";

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);  // Estado para el menú
    const [openMenu, setOpenMenu] = useState(false); // Estado para abrir/cerrar el menú móvil

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpenMenu(true);  // Abre el menú móvil cuando se hace clic en el ícono
    };

    const handleCloseMenu = () => {
        setOpenMenu(false); // Cierra el menú móvil
    };

    const handleUserClick = () => {
        console.log('Perfil de usuario');
        // Aquí podrías redirigir a la página del perfil del usuario o mostrar un menú
    };

    const categorias = ['Frutas y Verduras', 'Carnes y Pescados', 'Lácteos', 'Panadería', 'Snacks', 'No Perecederos'];

    const handleCategoriaSelect = (categoria) => {
        console.log('Categoría seleccionada:', categoria);
    };

    return (
        <AppBar position="sticky" sx={{ backgroundColor: '#FFFFFF' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                {/* Icono para el menú en móvil */}
                <IconButton
                    edge="start"
                    onClick={handleMenuClick}
                    sx={{ display: { xs: 'block', sm: 'none' } }} // Solo visible en móvil
                >
                    <MenuIcon />
                </IconButton>

                {/* Logo (centrado en móviles y alineado a la izquierda en escritorio) */}
                <Box sx={{
                    display: { xs: 'none', sm: 'flex' },  // Ocultar en móvil y mostrar en pantallas grandes
                    alignItems: 'center',  // Aseguramos que todo esté centrado verticalmente
                    flexGrow: 0,  // Evitamos que se expanda
                    justifyContent: 'flex-start', // Alinea el logo a la izquierda
                }}>
                    <ImagenGenerica
                        src={logo}
                        alt="Imagen de ejemplo"
                        sx={{
                            width: '249px',  // Establece el ancho del contenedor
                            height: '112px',  // Establece la altura del contenedor
                        }}
                    />
                </Box>

                {/* Menú de navegación centrado (pantallas grandes) */}
                <Box sx={{
                    display: { xs: 'none', sm: 'flex' },  // Ocultar en móvil y mostrar en pantallas grandes
                    alignItems: 'center',  // Alineamos verticalmente
                    justifyContent: 'center',  // Centramos horizontalmente
                    gap: 2,  // Espaciado entre los elementos
                    flexGrow: 1,  // Permite que este bloque ocupe el espacio disponible
                }}>
                    <Enlace pagina="/" texto="Inicio" tipo="enlace_navbar" />
                    <SelectorMenu categorias={categorias} onCategoriaSelect={handleCategoriaSelect} />
                    <Enlace pagina="/" texto="Conoce Eaty" tipo="enlace_navbar" />
                    <Enlace pagina="/" texto="Ayuda" tipo="enlace_navbar" />
                </Box>

                {/* Icono de usuario en la versión de escritorio */}
                <Box sx={{
                    display: { xs: 'none', sm: 'flex' },  // Solo visible en pantallas grandes
                    alignItems: 'center',  // Alineamos verticalmente
                    ml: 2,  // Un margen para separar el icono
                }}>
                    <IconButton
                        sx={{
                            color: '#303030',
                            width: 48,  // Ancho del icono
                            height: 48,  // Alto del icono
                        }}
                        onClick={handleUserClick}
                    >
                        <AccountCircle sx={{ fontSize: 48 }} /> {/* Ajustamos el tamaño del icono */}
                    </IconButton>
                </Box>

                {/* Menú de navegación para móvil (en el icono de menú) */}
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
    );
};

export default Navbar;
