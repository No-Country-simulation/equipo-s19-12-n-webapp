import React, { useState } from 'react';
import { MenuItem, Select, FormControl, Box, IconButton } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

const SelectorUsuario = ({ opciones, opcionElegida, color }) => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');

  const handleChange = (event) => {
    // setCategoriaSeleccionada(event.target.value);
    opcionElegida(event.target.value); // Llamar al callback para pasar el valor seleccionado
  };

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      // Asegurarse de que el selector se alinee bien en el navbar
      justifyContent: { xs: 'center', sm: 'flex-end' },  // Alineación en xs (móvil) centrado, sm+ (tablet y escritorio) a la derecha
      flexGrow: 0, // No hacer que crezca el contenedor
    }}>
      {/* "Categoría" select */}
      <FormControl sx={{ minWidth: 200 }}>
        <Select
          value={categoriaSeleccionada}
          onChange={handleChange}
          displayEmpty
          renderValue={(selected) => {
            return (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  flexGrow: 1,
                  ml: 2,
                }}
              >
                <IconButton
                  sx={{
                    color: color,
                    width: 48, // Ancho del ícono
                    height: 48, // Alto del ícono
                  }}
                  onClick={handleChange}
                >
                  <AccountCircle sx={{ fontSize: 48 }} />
                </IconButton>
              </Box>
            );
          }}
          sx={{
            border: 'none',
            '.MuiOutlinedInput-notchedOutline': { border: 'none' },
            fontFamily: 'Montserrat',
            fontWeight: '600',
            fontSize: '24px', // Igual al tamaño de "Inicio"
            color: '#303030',
            textAlign: 'center',
          }}
        >
          {opciones.map((opcion) => (
            <MenuItem key={opcion} value={opcion}>
              {opcion}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectorUsuario;
