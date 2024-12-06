import React, { useState } from 'react';
import { MenuItem, Select, FormControl, Box } from '@mui/material';

const SelectorInput = ({ categorias, onCategoriaSelect, placeholder, placeholderColor }) => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  const [bordeVerde, setBordeVerde] = useState(false);

  const handleChange = (event) => {
    setCategoriaSeleccionada(event.target.value);
    setBordeVerde(true); // Cambiar borde a verde al seleccionar una categoría
    onCategoriaSelect(event.target.value); // Llamar al callback para pasar el valor seleccionado
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0 }}>
      <FormControl fullWidth variant="standard">
        <Select
          value={categoriaSeleccionada}
          onChange={handleChange}
          displayEmpty
          renderValue={(selected) => selected || placeholder}
          sx={{
            mt: 1,
            fontFamily: 'Montserrat',
            '& .MuiInputBase-root': {
              fontFamily: 'Montserrat',
              color: categoriaSeleccionada ? '#303030' : placeholderColor || '#B0B0B0',
            },
            width: '100%',
            padding: '8px 0',
            '& .MuiInput-underline:before': {
              borderBottom: bordeVerde ? '2px solid #76B939' : '2px solid #B0B0B0', // Borde dinámico
            },
            '& .MuiInput-underline:hover:before': {
              borderBottom: bordeVerde ? '2px solid #76B939' : '2px solid #B0B0B0', // Borde verde en hover si está activado
            },
            '& .MuiInput-underline:after': {
              borderBottom: bordeVerde ? '2px solid #76B939' : '2px solid #B0B0B0', // Borde verde al enfocar si está activado
            },
            '@media (max-width:600px)': {
              mt: 0, // Margen superior en pantallas móviles
            },
          }}
        >
          {categorias.map((categoria) => (
            <MenuItem
              key={categoria}
              value={categoria}
              sx={{
                fontFamily: 'Montserrat',
                fontWeight: 400,
                fontSize: '16px',
                color: '#303030',
              }}
            >
              {categoria}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectorInput;