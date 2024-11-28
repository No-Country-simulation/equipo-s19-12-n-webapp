import React from 'react';
import { Button } from '@mui/material'; // Importamos el componente Button de MUI
import { Icon } from '@mui/material';   // Importamos el componente Icon de MUI para poder usar íconos

const BotonAgregarAcarrito = ({ colorFondo, colorLetra, Icono, texto }) => {
  return (
    <Button
      variant="contained" // Botón con fondo sólido
      sx={{
        backgroundColor: colorFondo,   // Color de fondo personalizado
        color: colorLetra,             // Color de texto e icono
        '&:hover': {
          backgroundColor: colorFondo, // Mantener el color de fondo en hover
        },
        fontSize: { xs: '10px', sm: '16px' }, // Reducir el tamaño del texto aún más en móviles
        fontWeight: 600,               // Peso semibold
        textTransform: 'none',         // Mantener el formato original del texto
        display: 'flex',
        alignItems: 'center',
        gap: { xs: 0.25, sm: 1 },        // Reducir aún más el gap entre icono y texto en móviles
        padding: { xs: '6px 8px', sm: '8px 16px' }, // Ajustar el padding en móviles
        borderRadius: '8px',           // Mantener bordes redondeados
      }}
      startIcon={Icono ? <Icon component={Icono} sx={{ fontSize: { xs: '16px', sm: '24px' } }} /> : null} // Reducir aún más el tamaño del icono en móvil
    >
      {texto}
    </Button>
  );
};

export default BotonAgregarAcarrito;