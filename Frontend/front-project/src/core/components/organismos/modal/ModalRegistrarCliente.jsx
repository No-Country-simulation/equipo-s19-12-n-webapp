import React, { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IconButton, TextField, Button, Checkbox, FormControlLabel, Grid2 } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import usePostFetch from '../../../services/usePostFetch';


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

  const formRef = useRef(null);

  const handleTermsChange = (event) => {
    setTermsAccepted(event.target.checked);
  };

  const handlePromotionsChange = (event) => {
    setPromotionsAccepted(event.target.checked);
  };

  //https://api.thecatapi.com/v1/images/search
  //'https://eaty-three.vercel.app/api/consumidor'
  //'https://jsonplaceholder.typicode.com/posts'
  //POST https://reqres.in/api/users
  const { postData, data, loading, error } = usePostFetch('https://eaty-three.vercel.app/api/consumidor/');
  useEffect(() => {
    if (data) {
      console.log('Datos recibidos:', data);
    }
    if (error) {
      console.log('Error:', error);
    }
  }, [data,error]); // Se ejecuta cuando 'data' cambie

  async function handleSubmit(e) {
    e.preventDefault();
    onClose();
    const formData = new FormData(formRef.current)
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");
    console.log("email:" + email);
    console.log("contraseña:" + password);
    console.log("confirmar:" + confirmPassword);

    const userData = {
      email: email,
      pass: password,
    };
    await postData(userData);

  }

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
        {/* formulario */}
        <form ref={formRef} onSubmit={handleSubmit}>
          {/* Inputs con solo borde inferior */}
          <Box sx={{ marginTop: 3 }}>


            {/* Primer TextField */}
            <TextField
              placeholder="Ingresa tu correo electrónico"
              type="email"
              name='email'
              fullWidth
              variant="standard"
              InputProps={{
                disableUnderline: false,
              }}
              sx={{
                fontFamily: 'Montserrat',
                '& .MuiInputBase-input': {
                  fontFamily: 'Montserrat',
                },
                '& .MuiInput-underline:before': {
                  borderBottomColor: '#76B939',
                },
                '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                  borderBottomColor: '#76B939',
                },
              }}
            />

            {/* Segundo TextField */}
            <TextField
              label="Contraseña"
              type="password"
              name='password'
              fullWidth
              placeholder="Ingrese una contraseña"
              variant="standard"
              InputProps={{
                disableUnderline: false,
              }}
              sx={{
                fontFamily: 'Montserrat',
                '& .MuiInputBase-input': {
                  fontFamily: 'Montserrat',
                },
                '& .MuiInput-underline:before': {
                  borderBottomColor: '#76B939',
                },
                '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                  borderBottomColor: '#76B939',
                },
              }}
            />

            <TextField
              label="Confirmar Contraseña"
              type="password"
              name='confirmPassword'
              fullWidth
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
            type='submit'
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
        </form>
      </Box>
    </Modal>
  );
}

export default ModalRegistrarCliente;









