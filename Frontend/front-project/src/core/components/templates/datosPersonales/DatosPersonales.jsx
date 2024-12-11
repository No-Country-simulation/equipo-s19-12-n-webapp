import React, { useContext, useRef, useState } from 'react';
import imagenDatosPersonales from '../../../../../public/assets/images/datos_personales.svg';
import { Box, Button, Card, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../../context/Context';

const DatosPersonales = () => {
  /* const [formData, setFormData] = useState({
    email: '',
    nombre: '',
    apellido: '',
    dni: '',
    telefono: ''
  }); */
  const {carrito,datosUsuario}=useContext(Context)
  console.log(carrito)
  const formRef = useRef(null);
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    console.log('Formulario enviado');
    const formData = new FormData(formRef.current)
    const email = formData.get("email");
    const nombre = formData.get("nombre");
    const apellido = formData.get("apellido");
    const dni = formData.get("dni");
    const telefono = formData.get("telefono");
    console.log(email)
    console.log(nombre)
    navigate("/metodos_de_pago");
  }


  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ width: 500, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 10 }}>
          <img
            src={imagenDatosPersonales}
            alt="proceso de compra"
            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          />
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between', // Alinea los elementos con espacio entre ellos
            alignItems: 'center', // Alinea los elementos verticalmente al centro
            padding: 2,
          }}
        >
          {/* Texto a la izquierda */}
          <Typography
            variant="body1"
            sx={{
              color: '#000',
              textAlign: 'center', // Centrado del texto
              fontFamily: 'Montserrat',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: 'normal',
            }}
          >
            Datos personales
          </Typography>


          {/* Texto a la derecha */}
          <Typography
            variant="body1"
            sx={{
              color: '#000',
              textAlign: 'center', // Centrado del texto
              fontFamily: 'Montserrat',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: 'normal',
            }}
          >
            Método de pago
          </Typography>
        </Box>
      </Box>

      {/* Texto "Datos personales" en la parte inferior izquierda */}

      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 3 }}>
        {/* Texto "Datos personales" fuera de la Card y alineado con la Card */}
        <Typography
          variant="body1"
          sx={{
            fontFamily: 'Montserrat',
            fontSize: '30px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: 'normal',
            width: '800px', // Alinea con el tamaño de la Card
          }}
        >
          Datos personales
        </Typography>
      </Box>

      <Card sx={{
        width: '800px',
        height: '500px',
        mb: 15,
        flexShrink: 0,
        borderRadius: '20px',
        background: '#FAFAFA',
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      }}>
        {/* Formulario */}
        <form ref={formRef} onSubmit={handleSubmit}>
          {/* Campo de Email */}
          <Box sx={{ width: '50%', marginBottom: 1 }}>
            <Typography variant="body2" sx={{
              color: '#303030',
              fontFamily: 'Montserrat',
              fontSize: '20px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: 'normal',
            }}>
              Correo electrónico
            </Typography>
            <TextField
              name="email"
              type="email"
              fullWidth
              margin="normal"
              value={datosUsuario.email}
              required
              sx={{
                '& .MuiOutlinedInput-root': {
                  border: 'none',
                  '& fieldset': {
                    border: 'none',
                  },
                },
                '& .MuiInputBase-root': {
                  borderBottom: '2px solid #909090', // Cambia el borde inferior al color #909090
                },
              }}
            />
          </Box>

          {/* Campos Nombre y Apellido en el mismo nivel */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
            {/* Campo de Nombre */}
            <Box sx={{ width: '48%' }}>
              <Typography variant="body2" sx={{
                color: '#303030',
                fontFamily: 'Montserrat',
                fontSize: '20px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: 'normal',
              }}>
                Nombre
              </Typography>
              <TextField
                label="Ingresa tu nombre"
                name="nombre"
                type="text"
                fullWidth
                margin="normal"
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    border: 'none',
                    '& fieldset': {
                      border: 'none',
                    },
                  },
                  '& .MuiInputBase-root': {
                    borderBottom: '2px solid #909090', // Cambia el borde inferior al color #909090
                  },
                }}
              />
            </Box>

            {/* Campo de Apellido */}
            <Box sx={{ width: '48%' }}>
              <Typography variant="body2" sx={{
                color: '#303030',
                fontFamily: 'Montserrat',
                fontSize: '20px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: 'normal',
              }}>
                Apellido
              </Typography>
              <TextField
                label="Ingresa tu apellido"
                name="apellido"
                type="text"
                fullWidth
                margin="normal"
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    border: 'none',
                    '& fieldset': {
                      border: 'none',
                    },
                  },
                  '& .MuiInputBase-root': {
                    borderBottom: '2px solid #909090', // Cambia el borde inferior al color #909090
                  },
                }}
              />
            </Box>
          </Box>

          {/* Campos DNI y Teléfono en el mismo nivel */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, marginTop: 2 }}>
            {/* Campo de DNI */}
            <Box sx={{ width: '48%' }}>
              <Typography variant="body2" sx={{
                color: '#303030',
                fontFamily: 'Montserrat',
                fontSize: '20px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: 'normal',
              }}>
                DNI
              </Typography>
              <TextField
                label="Ingresa tu numero de documento"
                name="dni"
                type="text"
                fullWidth
                margin="normal"
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    border: 'none',
                    '& fieldset': {
                      border: 'none',
                    },
                  },
                  '& .MuiInputBase-root': {
                    borderBottom: '2px solid #909090', // Cambia el borde inferior al color #909090
                  },
                }}
              />
            </Box>

            {/* Campo de Teléfono */}
            <Box sx={{ width: '48%' }}>
              <Typography variant="body2" sx={{
                color: '#303030',
                fontFamily: 'Montserrat',
                fontSize: '20px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: 'normal',
              }}>
                Teléfono/Movil
              </Typography>
              <TextField
                label="Ingresa tu numero de Teléfono"
                name="telefono"
                type="tel"
                fullWidth
                margin="normal"
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    border: 'none',
                    '& fieldset': {
                      border: 'none',
                    },
                  },
                  '& .MuiInputBase-root': {
                    borderBottom: '2px solid #909090', // Cambia el borde inferior al color #909090
                  },
                }}
              />
            </Box>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                width: '80%',
                height: 30,
                fontSize: '16px',
                backgroundColor: "#F87C01",
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#F87C01',
                },
                marginTop: 2,
                marginBottom: 3, // Aumenta el margen inferior
              }}
            >
              Ir a modo de pago
            </Button>
          </Box>
        </form>
      </Card>
    </Box>
  );
};

export default DatosPersonales;


