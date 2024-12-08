import React, { useEffect, useRef, useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Modal, Box, IconButton, Typography, Select, MenuItem, InputAdornment, FormControlLabel, Checkbox, styled, Grid } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import SelectorInput from '../../atomos/Selector/SelectorInput';
import usePostFetch from '../../../services/usePostFetch';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%', // El modal ocupará un 80% del ancho de la pantalla en dispositivos móviles
  maxWidth: 700, // El modal no será más ancho de 400px en pantallas grandes
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
  const formRef = useRef(null);
  const [categoria, setCategoria] = useState("");

  const { postData, data, loading, error } = usePostFetch('https://eaty-three.vercel.app/api/comerciante');
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
    console.log('Formulario enviado');
    const formData = new FormData(formRef.current)
    const cuit = formData.get("cuit");
    const nombreNegocio = formData.get("nombreNegocio");
    const caracteristica = formData.get("caracteristica")
    const telefono = formData.get("telefono");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    console.log("cuit:" + cuit);
    console.log("nombre del negocio:" + nombreNegocio);
    console.log("tipo de negocio:" + categoria);
    console.log("caracteristica:" + caracteristica);
    console.log("telefono:" + telefono);
    console.log("email:" + email);
    console.log("password:" + password);
    console.log("confirmar:" + confirmPassword);
    onClose();
    //cuit, nombre, direccion, ciudad, telefono, logo, email, pass, img1, img2, img3
    const userData = {
      cuit,
      nombre:nombreNegocio,
      direccion: "",
      ciudad:"",
      telefono,
      logo: "",
      email,
      pass:password,
      img1: "",
      img2: "",
      img3: "",
      /* categoria,
      caracteristica, */
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
      {/*   contenedor engloba todo el contenido */}
      <Box sx={style}>
        {/*   contenedor engloba todo el formulario */}

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
        <form ref={formRef} onSubmit={handleSubmit}>
          {/* Inputs con solo borde inferior */}
          <Box sx={{ marginTop: 3 }}>

            <Grid container spacing={2}>
              {/* Primer TextField */}
              <Grid item xs={12} sm={6}>
                <TextField
                  placeholder="CUIT"
                  type="text"
                  name="cuit"
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
              </Grid>

              {/* Segundo TextField */}
              <Grid item xs={12} sm={6}>
                <TextField
                  placeholder="Nombre del negocio"
                  type="text"
                  name="nombreNegocio"
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
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              {/* Selector de tipo de negocio */}
              <Grid item xs={12} sm={4}>
                <SelectorInput
                  categorias={categorias}
                  onCategoriaSelect={(categoria) => setCategoria(categoria)}
                  placeholder={"Tipo de negocio"}
                  placeholderColor={"rgba(0, 0, 0, 0.54)"}
                />
              </Grid>

              {/* Caja para los campos de teléfono */}
              <Grid item xs={12} sm={8}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {/* Caja para el número de teléfono */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    {/* Input con prefijo de Argentina */}
                    <TextField
                      variant="standard"
                      value="(+54)"
                      name='caracteristica'
                      InputProps={{
                        readOnly: true,
                        startAdornment: (
                          <InputAdornment position="start">
                            🇦🇷
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        mt: 3,
                        width: '100px',
                        '& .MuiInputBase-input': {
                          fontFamily: 'Montserrat',
                          fontWeight: 400,
                          fontSize: '16px',
                          textAlign: 'center',
                        },
                        '& .MuiInput-underline:before': {
                          borderBottom: '2px solid #76B939',
                        },
                        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                          borderBottom: '2px solid #76B939',
                        },
                        '& .MuiInput-underline:after': {
                          borderBottom: '2px solid #76B939',
                        },
                        '@media (max-width:600px)': {
                          mt: 0, // Margen superior en pantallas móviles
                        },
                      }}
                    />

                    {/* Input para completar el número de teléfono */}
                    <TextField
                      placeholder="Telefono Celular"
                      name='telefono'
                      variant="standard"
                      sx={{
                        mt: 3,
                        flex: 1, // Ocupa el espacio restante
                        fontFamily: 'Montserrat',
                        '& .MuiInputBase-input': {
                          fontFamily: 'Montserrat',
                          fontWeight: 400,
                          fontSize: '16px',
                        },
                        '& .MuiInput-underline:before': {
                          borderBottom: '2px solid #76B939',
                        },
                        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                          borderBottom: '2px solid #76B939',
                        },
                        '& .MuiInput-underline:after': {
                          borderBottom: '2px solid #76B939',
                        },
                        '@media (max-width:600px)': {
                          mt: 0, // Margen superior en pantallas móviles
                        },
                      }}
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
            {/* caja 3 */}
            <Grid container spacing={2}>
              {/* Primer campo de correo electrónico */}
              <Grid item xs={12} sm={6}>
                <TextField
                  placeholder="Ingresa tu correo electrónico"
                  type="email"
                  name="email"
                  fullWidth
                  variant="standard"
                  InputProps={{
                    disableUnderline: false, // Asegura que solo el borde inferior se muestre
                  }}
                  sx={{
                    mt: 3,
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
                    '@media (max-width:600px)': {
                          mt: 2, // Margen superior en pantallas móviles
                        },
                  }}
                />
              </Grid>

              {/* Segundo campo de contraseña */}
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Contraseña"
                  type="password"
                  name="password"
                  fullWidth
                  placeholder="Ingrese una contraseña"
                  variant="standard"
                  InputProps={{
                    disableUnderline: false, // Asegura que solo el borde inferior se muestre
                  }}
                  sx={{
                    mt: 1,
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
                    '@media (max-width:600px)': {
                      mt: 0, // Margen superior en pantallas móviles
                    },
                  }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              {/* Campo de confirmar contraseña */}
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Confirmar Contraseña"
                  type="password"
                  name="confirmPassword"
                  fullWidth
                  placeholder="Confirme la contraseña"
                  variant="standard" // Cambiado a "standard" para mostrar solo el borde inferior
                  InputProps={{
                    disableUnderline: false, // Asegura que solo el borde inferior se muestre
                  }}
                  sx={{
                    mt: 1,
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
              </Grid>
            </Grid>
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
                marginTop: 0,
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
          </Box>

        </form>
      </Box>

    </Modal>
  );
};

export default ModalRegistrarComerciante;
