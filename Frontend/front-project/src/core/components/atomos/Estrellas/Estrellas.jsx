import React from "react";
import Rating from "@mui/material/Rating";

export default function Estrellas() {
  // Estado local para controlar las estrellas
  const [value, setValue] = React.useState(4); // Setear un valor predeterminado de 4 estrellas

  // Suponiendo que tengo un valor para el tipo de usuario
  // Aca lo simulamos, puede ser "comerciante" o "cliente"
  const userType = "comerciante"; // Cambia a "cliente" para probar la edición
  const isComerciante = userType === "comerciante"; // Verifica si es comerciante

  // Función para manejar el cambio de calificación (solo si es cliente)
  const handleChange = (event, newValue) => {
    if (!isComerciante) {
      setValue(newValue); // Actualiza el estado de las estrellas solo si es cliente
      console.log("Cantidad de estrellas:", newValue); // Imprime el valor en la consola
    }
  };

  return (
    <Rating
      name="simple-controlled"
      value={value}
      readOnly={isComerciante} // Hacer solo lectura si es comerciante
      onChange={handleChange} // Solo cambiar si no es comerciante
      sx={{
        fontSize: { xs: 24, sm: 30, md: 36 }, // Ajuste de tamaño de las estrellas
        paddingLeft: "1rem",
        paddingRight: "1rem",
      }}
    />
  );
}
