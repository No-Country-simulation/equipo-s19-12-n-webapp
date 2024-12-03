import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Modal, Box, IconButton, Typography, Select, MenuItem, InputAdornment, FormControlLabel, Checkbox, styled } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import SelectorInput from '../../atomos/Selector/SelectorInput';


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


const categorias = ['Comida saludable y nutricional', 'Panaderías y pastelería', 'Lácteos', 'Panadería', 'Snacks', 'No Perecederos'];

const ModalRegistrarComerciante = ({ open, onClose, openFrom, onBack }) => {
  function handleSubmit(e){
    e.preventDefault();
    console.log('Formulario enviado');
  }
  return (
    <Modal
      open={open}  // Controla si el modal está visible
      onClose={onClose}  // Llama a la función que cierra el modal
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {/*   contenedor engloba todo el contenido */}
      <Box sx={style}>
        {/*   contenedor engloba todo el formulario */}
        <form onSubmit={handleSubmit}>
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
                color: '#BDBDBD', // Color verde
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
                color: '#76B939', // Color verde
                textDecoration: 'underline', // Subrayado
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
            {/* box1 */}
            <Box
              sx={{
                display: 'flex', // Habilitar flexbox
                flexDirection: { xs: 'column', sm: 'row' }, // Cambiar la dirección según el tamaño de pantalla
                gap: 2, // Espacio entre los elementos
                mt: 2, // Margen superior
              }}
            >


            </Box>
            <TextField
              placeholder="CUIT" // Placeholder personalizado
              type="text"
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
            <TextField
              placeholder="Nombre del negocio" // Placeholder personalizado
              type="text"
              fullWidth
              variant="standard"
              InputProps={{
                disableUnderline: false,
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
            {/* box2 */}
            {/* tipo de negocio */}
            <SelectorInput categorias={categorias} onCategoriaSelect={(categoria) => console.log(categoria)} />
            {/* box3 */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>

              {/* Input para el número de teléfono */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {/* Input con prefijo de Argentina */}
                <TextField
                  variant="standard"
                  value="(+54)"
                  InputProps={{
                    readOnly: true,
                    startAdornment: (
                      <InputAdornment position="start">
                        🇦🇷
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    mt: 2,
                    width: '100px',
                    '& .MuiInputBase-input': {
                      fontFamily: 'Montserrat',
                      fontWeight: 400,
                      fontSize: '16px',
                      textAlign: 'center',
                    },
                    // Borde inferior en estado normal
                    '& .MuiInput-underline:before': {
                      borderBottom: '2px solid #76B939', // Borde inferior verde
                    },
                    // Borde inferior en estado hover
                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                      borderBottom: '2px solid #76B939', // Borde inferior verde en hover
                    },
                    // Borde inferior en estado focus
                    '& .MuiInput-underline:after': {
                      borderBottom: '2px solid #76B939', // Borde inferior verde cuando está en foco
                    },
                  }}
                />

                {/* Input para completar el número de teléfono */}
                <TextField
                  placeholder="Telefono Celular"
                  //               onChange={(e) => setTelefono(e.target.value)}
                  variant="standard"
                  sx={{
                    flex: 1, // Ocupa el espacio restante
                    mt: 2,
                    fontFamily: 'Montserrat',
                    '& .MuiInputBase-input': {
                      fontFamily: 'Montserrat',
                      fontWeight: 400,
                      fontSize: '16px',
                    },
                    // Borde inferior en estado normal
                    '& .MuiInput-underline:before': {
                      borderBottom: '2px solid #76B939', // Borde inferior verde
                    },
                    // Borde inferior en estado hover
                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                      borderBottom: '2px solid #76B939', // Borde inferior verde en hover
                    },
                    // Borde inferior en estado focus
                    '& .MuiInput-underline:after': {
                      borderBottom: '2px solid #76B939', // Borde inferior verde cuando está en foco
                    },
                  }}
                />

              </Box>
            </Box>
            <TextField
              placeholder="Ingresa tu correo electrónico" // Placeholder personalizado
              type="email"
              fullWidth
              //           value={email}
              //          onChange={(e) => setEmail(e.target.value)}
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
              //           value={password}
              //           onChange={(e) => setPassword(e.target.value)}
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
              //            value={confirmPassword}
              //            onChange={(e) => setConfirmPassword(e.target.value)}
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
            {/* Checkbox para aceptar términos y condiciones */}
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
            {/* Checkbox para aceptar recibir novedades y promociones */}
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
              label="Acepto recibir novedades y promociones"
            />
          </Box>
          <Button
          type="submit"
            variant="outlined"
            fullWidth // Hace que el botón abarque todo el ancho disponible
            sx={{
              mt: 4,
              borderColor: '#76B939', // Color del borde
              color: '#76B939', // Color del texto
              backgroundColor: 'white', // Fondo blanco
              borderRadius: '8px', // Bordes ligeramente redondeados
              padding: '12px 16px', // Tamaño del botón
              fontSize: '16px', // Tamaño de la fuente
              fontWeight: '500', // Peso del texto
              textTransform: 'none', // El texto permanece como está (no mayúsculas)
              textAlign: 'center', // Asegura que el texto esté centrado
              '&:hover': {
                borderColor: '#76B939', // Mantiene el borde verde al pasar el cursor
                backgroundColor: '#f8fdf5', // Fondo ligeramente verde al pasar el cursor
              },
            }}
          >
            Crear cuenta
          </Button>
        </form>
      </Box>

    </Modal>
  );
};

export default ModalRegistrarComerciante;
