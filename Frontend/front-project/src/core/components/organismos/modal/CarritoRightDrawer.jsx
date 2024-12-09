import React, { useContext, useEffect, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Button, Card, CardContent, CardMedia, Divider } from '@mui/material';
import { Context } from '../../../context/Context';
import imagenCarritoVacio from '../../../../../public/assets/images/carrito_vacio.svg';
import iconoBorrar from '../../../../../public/assets/images/icono-delete.svg';

export default function CarritoRightDrawer({ open, onClose }) {
  const { carrito, eliminarDeCarrito, vaciarCarrito } = useContext(Context);
  const [subtotal, setSubTotal] = useState(0);
  const [cantidadProductos, setCantidadProductos] = useState({});

  useEffect(() => {
    // Calcula el subtotal sumando los precios de todos los productos
    const nuevoSubTotal = carrito.reduce((acc, producto) => acc + producto.precio * (cantidadProductos[producto._id] || 1), 0);
    setSubTotal(nuevoSubTotal);
  }, [carrito, cantidadProductos]); // El efecto se ejecutará cada vez que el carrito o las cantidades cambien

  // Aumentar cantidad
  function aumentarCantidad(producto) {
    setCantidadProductos(prev => ({
      ...prev,
      [producto._id]: (prev[producto._id] || 1) + 1
    }));
  }

  // Disminuir cantidad
  function disminuirCantidad(producto) {
    setCantidadProductos(prev => {
      const nuevaCantidad = (prev[producto._id] || 1) - 1;
      if (nuevaCantidad > 0) {
        return { ...prev, [producto._id]: nuevaCantidad };
      }
      return prev;
    });
  }
   // Eliminar producto y restablecer cantidad a 1
   function eliminarDeCarritoConReset(idProducto) {
    eliminarDeCarrito(idProducto); // Eliminar del carrito
    setCantidadProductos((prev) => {
      const nuevoEstado = { ...prev };
      delete nuevoEstado[idProducto];  // Restablecer cantidad a 1 (eliminar el registro de cantidad)
      return nuevoEstado;
    });
  }

    // Vaciar el carrito y restablecer todas las cantidades a 1
    function vaciarCarritoConReset() {
      vaciarCarrito(); // Vaciar el carrito
      setCantidadProductos({}); // Restablecer todas las cantidades a 1
    }

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
    >
      <Box
        sx={{
          width: 542,
          padding: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Botón de cierre */}
        <IconButton
          onClick={onClose}
          sx={{
            alignSelf: 'flex-end',
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Título en la parte superior */}
        <Typography variant="h6" component="h2" sx={{
          color: '#303030',
          fontFamily: 'Montserrat',
          fontSize: '32px',
          fontWeight: 600,
          marginBottom: 2,
        }}>
          Mi carrito
        </Typography>
        <Divider sx={{ borderColor: 'black', borderWidth: 1 }} />

        {/* Contenido del Drawer */}
        <Box sx={{ flexGrow: 1, overflowY: 'auto', textAlign: 'center' }}>
          {carrito.length === 0 ? (
            <Box sx={{ mt: 20 }}>
              <img
                src={imagenCarritoVacio}
                alt="Carrito vacío"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </Box>
          ) : (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1 }}>
              {carrito.map((producto) => {
                const cantidad = cantidadProductos[producto._id] || 1;
                return (
                  <Card key={producto._id} sx={{
                    width: 500, height: 102, display: 'flex', alignItems: 'center', boxShadow: 'none',
                    border: 'none',
                  }}>
                    <CardMedia
                      component="img"
                      sx={{ width: 106, height: 102 }}
                      image={producto.img1}
                      alt={producto.nombre}
                    />
                    <CardContent sx={{ flex: 1 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="h6" sx={{
                          textAlign: 'center',
                          fontFamily: 'Montserrat',
                          fontSize: '16px',
                          fontWeight: 500,
                        }}>
                          {producto.nombre}
                        </Typography>
                      </Box>

                      <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: 137,
                        height: 23,
                        backgroundColor: '#F87C01',
                        padding: '0 5px',
                        borderRadius: 1,
                      }}>
                        {/* Botones de decremento e incremento */}
                        <Button onClick={() => disminuirCantidad(producto)} sx={{
                          minWidth: 20, height: 20, padding: 0, fontSize: '16px', color: 'white',
                        }}>
                          -
                        </Button>
                        <Typography
                          variant="body1"
                          sx={{
                            fontSize: '16px',
                            color: 'white',
                          }}
                        >
                          {cantidad}
                        </Typography>
                        <Button onClick={() => aumentarCantidad(producto)} sx={{
                          minWidth: 20, height: 20, padding: 0, fontSize: '16px', color: 'white',
                        }}>
                          +
                        </Button>
                      </Box>
                    </CardContent>

                    <Box sx={{
                      width: 100,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: 1,
                    }}>
                      <IconButton onClick={() => eliminarDeCarritoConReset(producto._id)} sx={{ color: 'red' }}>
                        <img
                          src={iconoBorrar}
                          alt="Eliminar"
                          style={{ width: 24, height: 24 }}
                        />
                      </IconButton>
                      <Typography variant="body1" color="text.primary" sx={{ color: "#76B939" }}>
                        ${producto.precio}
                      </Typography>
                      <Typography variant="body1" color="text.primary" sx={{ textDecoration: 'line-through' }}>
                        ${parseInt(producto.precio) * 1.5}
                      </Typography>
                    </Box>
                  </Card>
                );
              })}
            </Box>
          )}
        </Box>

        {/* Subtotal, delivery, total */}
        {carrito.length > 0 && (
          <Box sx={{
            width: 480,
            height: 308,
            border: '1px solid #000',
            padding: 2,
            display: 'flex',
            flexDirection: 'column',
            borderTop: '2px solid rgba(0, 0, 0, 0.3)',
          }}>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontWeight: 500,
              marginBottom: 2,
              borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
            }}>
              <Typography variant="h6">Subtotal</Typography>
              <Typography variant="h6">${subtotal}</Typography>
            </Box>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 2,
              borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
            }}>
              <Typography variant="h6">Delivery</Typography>
              <Typography variant="h6">${0}</Typography>
            </Box>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 2,
            }}>
              <Typography variant="h6">Total</Typography>
              <Typography variant="h6">${subtotal}</Typography>
            </Box>

            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              marginBottom: 2,
            }}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  width: '80%',
                  height: 50,
                  fontSize: '16px',
                  backgroundColor: "#F87C01",
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: '#F87C01',
                  },
                }}
              >
                Ir a Pagar
              </Button>

              <Button
                variant="text"
                color="secondary"
                onClick={() => vaciarCarritoConReset()}
                sx={{
                  width: '80%',
                  height: 50,
                  fontSize: '16px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 1,
                  textTransform: 'none',
                  color: 'black',
                  '&:hover': {
                    backgroundColor: 'white',
                  },
                }}
              >
                <IconButton sx={{ color: 'red' }}>
                  <img
                    src={iconoBorrar}
                    alt="Eliminar"
                    style={{ width: 24, height: 24 }}
                  />
                </IconButton>
                Vaciar el Carrito
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Drawer>
  );
}


