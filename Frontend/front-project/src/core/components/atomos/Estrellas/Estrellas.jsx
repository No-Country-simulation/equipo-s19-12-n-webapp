import React from 'react';
import { Box, Typography } from '@mui/material';    // Ahora se usa @mui/material en lugar de @material-ui/core
import Rating from '@mui/material/Rating'

export default function Estrellas() {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);  // Actualiza el estado de las estrellas seleccionadas
    console.log('Cantidad de estrellas:', newValue);  // Imprime el valor en la consola
  };

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        
        <Rating
          name="simple-controlled"
          value={value}
          onChange={handleChange} 
        />
      </Box>
   
    </div>
  );
}

{/* <Estrellas></Estrellas> */}
 
 
