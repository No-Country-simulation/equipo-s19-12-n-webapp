import React from "react";
import { Box, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";

export default function Estrellas() {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue); // Actualiza el estado de las estrellas seleccionadas
    console.log("Cantidad de estrellas:", newValue); // Imprime el valor en la consola
  };

  return (
    <div>
      <Box
        component="fieldset"
        mb={3}
        borderColor="transparent"
        sx={{
          width: "100%", // Asegura que ocupe todo el ancho disponible
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: "16px", sm: "18px", md: "20px" }, // Ajuste de tamaño de fuente
            marginBottom: "8px",
          }}
        ></Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={handleChange}
          sx={{
            fontSize: { xs: 24, sm: 30, md: 36 }, // Ajuste de tamaño de las estrellas
          }}
        />
      </Box>
    </div>
  );
}

{
  /* <Estrellas></Estrellas> */
}
