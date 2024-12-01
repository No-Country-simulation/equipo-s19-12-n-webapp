import React, { useState } from 'react';
import { MenuItem, Select, FormControl, Box } from '@mui/material';

const SelectorMenu = ({ categorias, onCategoriaSelect }) => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');

  const handleChange = (event) => {
    setCategoriaSeleccionada(event.target.value);
    onCategoriaSelect(event.target.value); // Llamar al callback para pasar el valor seleccionado
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
              return 'Categoría'; // Texto estático
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
          {categorias.map((categoria) => (
            <MenuItem key={categoria} value={categoria}>
              {categoria}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

     
    </Box>
  );
};

export default SelectorMenu;