import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IconButton, TextField, Button, Checkbox, FormControlLabel } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';

// Estilo del modal
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

function ModalRegistrarCliente({ open, onClose, openFrom, onBack }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false); // Estado para el primer checkbox
  const [promotionsAccepted, setPromotionsAccepted] = useState(false); // Estado para el segundo checkbox

  const handleTermsChange = (event) => {
    setTermsAccepted(event.target.checked);
  };

  const handlePromotionsChange = (event) => {
    setPromotionsAccepted(event.target.checked);
  };

  return (
    <Modal
      open={open}  // Controla si el modal está visible
      onClose={onClose}  // Llama a la función que cierra el modal
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
          sx={{
            fontFamily: 'Montserrat',
            color: '#212121',
            fontSize: '25px',
            fontWeight: 700,
            textAlign: 'center',
            marginTop: 5, // Ajuste para bajar el título
            // Estilos responsivos
            '@media (min-width:600px)': {
              fontSize: '40px', // Tamaño de fuente en escritorio
              color: '#25282A', // Color del título en escritorio
            },
          }}
        >
          Crear Cuenta
        </Typography>

        <Box
          sx={{
            display: 'flex', // Configura el diseño como flexbox
            alignItems: 'center', // Alinea verticalmente los textos al centro
            gap: 2, // Espacio entre los textos
            marginTop: 1, // Margen superior del contenedor
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Montserrat',
              fontWeight: 600,
              fontSize: '20px',
              color: '#76B939', // Color verde
              textDecoration: 'underline', // Subrayado
              margin: 0, // Asegura que no haya márgenes externos
              '@media (min-width:600px)': {
                fontWeight: 500, // Peso en escritorio
                fontSize: '24px', // Tamaño de fuente en escritorio
              },
            }}
          >
            Cliente
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Montserrat',
              fontWeight: 600,
              fontSize: '20px',
              color: '#BDBDBD', // Color gris
              textDecoration: 'underline', // Subrayado
              margin: 0, // Asegura que no haya márgenes externos
              '@media (min-width:600px)': {
                fontWeight: 500, // Peso en escritorio
                fontSize: '24px', // Tamaño de fuente en escritorio
              },
            }}
          >
            Comerciante
          </Typography>
        </Box>

        {/* Inputs con solo borde inferior */}
        <Box sx={{ marginTop: 3 }}>
          <TextField
            placeholder="Ingresa tu correo electrónico" // Placeholder personalizado
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="standard" // Cambiado a "standard" para mostrar solo el borde inferior
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
          <TextField
            label="Contraseña"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingrese una contraseña"
            variant="standard" // Cambiado a "standard" para mostrar solo el borde inferior
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
          <TextField
            label="Confirmar Contraseña"
            type="password"
            fullWidth
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirme la contraseña"
            variant="standard" // Cambiado a "standard" para mostrar solo el borde inferior
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
        </Box>

        {/* Checkbox de aceptación de términos */}
        <Box sx={{ marginTop: 0.5, display: 'flex', alignItems: 'center' }}>
        <FormControlLabel
            control={
              <Checkbox
                //               checked={checked}
                //              onChange={handleCheckboxChange}
                name="acceptTerms"
                sx={{
                  color: '#76B939', // Color cuando no está marcado
                  '&.Mui-checked': {
                    color: '#76B939', // Color cuando está marcado
                  },
                }}
              />
            }
            label="Acepto términos y condiciones"
            sx={{
              marginTop: 2,
              fontFamily: 'Montserrat',
              fontSize: '16px',
            }}
          />
        </Box>

        {/* Checkbox de aceptación de novedades y promociones */}
        <Box sx={{ marginTop: 0.5, display: 'flex', alignItems: 'center' }}>
        <FormControlLabel
            control={
              <Checkbox
                //           checked={checkedTerms}
                //           onChange={handleTermsChange}
                name="acceptTerms"
                sx={{
                  color: '#76B939', // Color cuando no está marcado
                  '&.Mui-checked': {
                    color: '#76B939', // Color cuando está marcado
                  },
                }}
              />
            }
            label="Acepto términos y condiciones"
          />
        </Box>

        {/* Botón de registro con fondo blanco, bordes verdes y redondeados */}
        <Button
          variant="outlined" // Utilizamos "outlined" para que el botón tenga bordes visibles
          fullWidth
          sx={{
            fontFamily: 'Montserrat',
            mt: 2,
            color: '#76B939', // Texto en verde
            bgcolor: '#FFFFFF', // Fondo blanco
            borderColor: '#76B939', // Borde verde
            textTransform: 'none', // Mantiene el texto sin convertir a mayúsculas
            '&:hover': {
              bgcolor: '#F0FFF0', // Fondo blanco con un ligero tono verde al pasar el cursor
              borderColor: '#76B939', // Mantiene el borde verde
            },
          }}
        >
          Crear Cuenta
        </Button>

      </Box>
    </Modal>
  );
}

export default ModalRegistrarCliente;









