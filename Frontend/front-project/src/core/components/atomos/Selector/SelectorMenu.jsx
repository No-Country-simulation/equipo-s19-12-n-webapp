import React, { useState, useContext } from 'react';
import { Context } from '../../../context/Context';
import { useNavigate } from 'react-router-dom';
import { MenuItem, Select, FormControl, Box } from '@mui/material';

const SelectorMenu = ({ categorias, onCategoriaSelect }) => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');

  const handleChange = (event) => {
    setCategoriaSeleccionada(event.target.value);
    onCategoriaSelect(event.target.value); // Llamar al callback para pasar el valor seleccionado
  };

  const navigate = useNavigate();
  const { setAllProducts } = useContext(Context);

  function buscarCategoria (cat) {
    fetch(`https://eaty-three.vercel.app/api/productos/busqueda-por-categoria/${cat}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setAllProducts(data);
        })
        .then(() => navigate("/productos"));
  }

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
            <MenuItem key={categoria} value={categoria} onClick={() => buscarCategoria(categoria)}>
              {categoria}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

     
    </Box>
  );
};

export default SelectorMenu;