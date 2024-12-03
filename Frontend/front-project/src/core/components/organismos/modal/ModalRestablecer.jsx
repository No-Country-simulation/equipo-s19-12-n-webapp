import React from 'react';
import { Box, Button, Modal, Typography, TextField, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'; // Icono de cierre
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Icono de flecha hacia atrás
import imagenValidar from '../../../../../public/assets/images/validar.svg'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%', // El modal ocupará un 80% del ancho de la pantalla en dispositivos móviles
  maxWidth: 400, // El modal no será más ancho de 400px en pantallas grandes
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: '16px', // Agrega bordes redondeados aquí
  '@media (max-width:600px)': {
    width: '90%', // El modal ocupa el 90% del ancho en dispositivos pequeños
    padding: '16px', // Menos padding en móviles
  },
};

const ModalRestablecer = ({ open, onClose, openFrom, onBack }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {/* Contenedor de los botones de cerrar y volver atrás */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Mostrar la flecha de volver atrás solo si openFrom NO es 'NavBar' */}
          {openFrom !== 'NavBar' && (
            <IconButton
              onClick={onBack} // Llamamos a la función de "volver atrás"
              sx={{
                position: 'absolute',
                top: 8,
                left: 8,
                color: 'black',
              }}
            >
              <ArrowBackIcon />
            </IconButton>
          )}

          {/* Botón de cerrar (ícono de cruz) */}
          <IconButton
            onClick={onClose}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              color: 'black',
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Título del modal */}
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{
            fontFamily: 'Montserrat',
            color: '#212121',
            fontWeight: 700,
            textAlign: 'center',
            marginTop: 5, // Ajuste para bajar el título
            fontSize: {
              xs: '20px',   // En pantallas pequeñas (xs, móviles)
              sm: '25px',   // En pantallas medianas (sm, tabletas)
              md: '30px',   // En pantallas grandes (md, escritorio)
            },
          }}
        >
          Restablecer contraseña
        </Typography>

        {/* Imagen debajo del título */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <img
            src={imagenValidar} // Cambia esto por la URL de tu imagen
            alt="Imagen descriptiva"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </Box>
        {/* Texto debajo de la imagen */}
        <Typography
          sx={{ mt: 2, textAlign: 'center', fontFamily: 'Montserrat, sans-serif', fontSize: '12px' }}
        >
          Introduce el correo electrónico asociado a tu cuenta
        </Typography>

        {/* Campo de texto para correo electrónico */}
        <TextField
          placeholder="Ingresa tu correo electrónico" // Placeholder personalizado
          type="email"
          fullWidth
          variant="standard" // Cambiamos a "standard" para mostrar solo el borde inferior
          InputProps={{
            disableUnderline: false, // Asegura que solo el borde inferior se muestre
          }}
          sx={{
            mt: 2,
            fontFamily: 'Montserrat',
            '& .MuiInputBase-input': {
              fontFamily: 'Montserrat', // Estilo de la fuente
            },
            '& .MuiInput-underline:before': {
              borderBottomColor: '#76B939', // Borde inferior verde
            },
            '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
              borderBottomColor: '#76B939', // Borde inferior verde al pasar el cursor
            },
          }}
        />

        {/* Botón para enviar instrucciones */}
        <Button
          variant="outlined"
          fullWidth
          onClick={onBack} // Llamamos a la función de "volver atrás"
          sx={{
            mt: 4,
            mb:2,
            border: '1px solid #76B939', // Borde verde
            color: '#76B939', // Texto verde
            borderRadius: '6px', // Bordes suavemente redondeados
            textTransform: 'none', // Evita que el texto esté en mayúsculas
            padding: '10px 16px', // Tamaño ajustado
            fontFamily: 'Montserrat',
            fontWeight: 500,
            '&:hover': {
              backgroundColor: '#f0f9f4', // Fondo verde claro al pasar el cursor
              borderColor: '#76B939',
            },
          }}
        >
          Enviar instrucciones
        </Button>
      </Box>
    </Modal>
  );
};

export default ModalRestablecer;



