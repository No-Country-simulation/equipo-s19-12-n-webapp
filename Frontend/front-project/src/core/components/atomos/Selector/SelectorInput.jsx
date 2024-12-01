import React, { useState } from 'react';
import { MenuItem, Select, FormControl, Box } from '@mui/material';

const SelectorInput = ({ categorias, onCategoriaSelect }) => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');

  const handleChange = (event) => {
    setCategoriaSeleccionada(event.target.value);
    onCategoriaSelect(event.target.value); // Llamar al callback para pasar el valor seleccionado
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0 }}>
      {/* Selector con tipografía unificada */}
      <FormControl fullWidth variant="standard">
        <Select
          value={categoriaSeleccionada}
          onChange={handleChange}
          displayEmpty
          renderValue={(selected) => {
            return selected || 'tipo de negocio'; // Placeholder
          }}
          sx={{
            mt: 2,
            fontFamily: 'Montserrat',
            '& .MuiInputBase-input': {
              fontFamily: 'Montserrat', // Estilo de la fuente
            },
            '&:before': {
                    borderBottom: '2px solid #76B939', // Borde inferior verde
                  },
                  '&:hover:not(.Mui-disabled):before': {
                    borderBottom: '2px solid #76B939',
                  },
                  '&:after': {
                    borderBottom: '2px solid #76B939',
                  },
          }}
        >
          {categorias.map((categoria) => (
            <MenuItem
              key={categoria}
              value={categoria}
              sx={{
                fontFamily: 'Montserrat', // Aplicar Montserrat en las opciones
                fontWeight: 400, // Mantener peso uniforme
                fontSize: '16px', // Ajustar tamaño a los demás campos
                color: '#303030', // Color uniforme
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