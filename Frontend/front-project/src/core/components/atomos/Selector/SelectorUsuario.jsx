import React, { useState } from 'react';
import { MenuItem, Select, FormControl, Box, IconButton } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

const SelectorUsuario = ({ opciones, opcionElegida }) => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');

  const handleChange = (event) => {
   // setCategoriaSeleccionada(event.target.value);
   opcionElegida(event.target.value); // Llamar al callback para pasar el valor seleccionado
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      {/* "Categoría" select */}
      <FormControl sx={{ minWidth: 200 }}>
        <Select
          value={categoriaSeleccionada}
          onChange={handleChange}

          displayEmpty
          renderValue={(selected) => {
          //  if (!selected) {
              return <Box
              sx={{
                  display: 'flex', // Asegura que se muestre en todas las pantallas
                  alignItems: 'center', // Alineación vertical
                  justifyContent: 'flex-end', // Alineación horizontal hacia la derecha
                  flexGrow: 1, // Permite que el Box ocupe espacio disponible
                  ml: 2, // Margen a la izquierda
              }}
          >
              <IconButton
                  sx={{
                      color: '#303030',
                      width: 48, // Ancho del ícono
                      height: 48, // Alto del ícono
                  }}
                  onClick={handleChange}
              >
                  <AccountCircle sx={{ fontSize: 48 }} /> {/* Tamaño del ícono */}
              </IconButton>
          </Box>
          //  }
           // return selected; // Devuelve la categoría seleccionada
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