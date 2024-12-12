import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../../../context/Context';
import { useNavigate, useLocation } from 'react-router-dom';
import { MenuItem, Select, FormControl, Box } from '@mui/material';
import "./style_selector.css"

const SelectorMenu = ({ categorias, onCategoriaSelect }) => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');

  const handleChange = (event) => {
    setCategoriaSeleccionada(event.target.value);
    onCategoriaSelect(event.target.value); // Llamar al callback para pasar el valor seleccionado
  };

  const navigate = useNavigate();
  const location = useLocation();
  const { setAllProducts } = useContext(Context);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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
            fontSize: {xs: "1rem", md: "24px", lg: "24px"}, // Igual al tamaño de "Inicio"
            color: '#303030', 
            textAlign: 'center', 
          }}
          className='selectorCatNav'
        >
          {categorias.map((categoria) => (
            <MenuItem sx={{fontFamily: "Montserrat"}} key={categoria} value={categoria} onClick={() => buscarCategoria(categoria)}>
              {categoria}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

     
    </Box>
  );
};

export default SelectorMenu;