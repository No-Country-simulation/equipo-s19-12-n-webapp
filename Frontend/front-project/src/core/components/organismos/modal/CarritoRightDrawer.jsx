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
import { useNavigate } from 'react-router-dom';

export default function CarritoRightDrawer({ open, onClose }) {
  const { carrito, eliminarDeCarrito, vaciarCarrito, detallesComerciante,datosUsuario,agregarVenta,venta,vaciarVenta} = useContext(Context);
  const [subtotal, setSubTotal] = useState(0);
  const [cantidadProductos, setCantidadProductos] = useState({});

  const navigate = useNavigate();
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
    vaciarVenta();
  }

  function botonIrApagar() {
    // Crear el array de productos en el formato solicitado
    const productosFormatoNuevo = carrito.map((producto) => ({
      id_producto: producto._id,
      cantidad: cantidadProductos[producto._id] || 1, // Usar 1 si no hay cantidad personalizada
    }));
  
    // Obtener la fecha actual en formato ISO
    const fechaActual = new Date().toISOString();
  
    // Crear el objeto con los campos requeridos
    const objetoOrden = {
      comerciante: detallesComerciante.cuit, // Asumiendo que detallesComerciante tiene el nombre del comerciante
      consumidor: datosUsuario.email, // Asegúrate de que el objeto usuario esté disponible en el contexto
      fecha: fechaActual,
      precioT: subtotal,
      detalle: productosFormatoNuevo,
    };
 //   agregarVenta(objetoOrden)
 //   console.log("Objeto Orden:", venta);
    agregarVenta(objetoOrden, (nuevaVenta) => {
      console.log("Venta actualizada:", nuevaVenta);
      navigate("/datos_personales");
    });
  
    
  }

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
    >
      <Box
        sx={{
          width: {xs: 300, md: 450, lg: 450},
          padding: 4,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

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
          {/* Botón de cierre */}
          <IconButton
            onClick={onClose}
            sx={{
              alignSelf: 'flex-start',  // Alineación del IconButton
            }}
          >
            <CloseIcon />
          </IconButton>

        </Box>
        {carrito.length !== 0 ? (
        <Box sx={{ display: 'flex', alignItems: 'center', height: 70}} style={{borderTop: "1px solid rgba(0, 0, 0, 0.2)", borderBottom: "1px solid rgba(0, 0, 0, 0.2)"}}>
          <img
            src={detallesComerciante.logo} // Coloca la URL de la imagen aquí
            alt="Imagen del comerciante"
            style={{ width: 50, height: 50, objectFit: 'cover', borderRadius: '50%', marginLeft:10 }} // Ajusta el tamaño y estilo de la imagen
          />
          <Box sx={{display: "flex", flexDirection: "column", justifyContent:"center", alignItems: "flex-start", height: "70px", width: "auto"}}>
          <Typography
            variant="body1"
            sx={{
              textAlign: 'start',
              fontFamily: 'Montserrat',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: 'normal',
              ml:4
            }}
          >
            {detallesComerciante.nombre}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: 'start',
              fontFamily: 'Montserrat',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
              ml:4
            }}
          >
            {detallesComerciante.rubro}
          </Typography>
          </Box>
        </Box>):null}

        {/*<Divider style={{border: "1px solid rgba(0, 0, 0, 0.2)"}} />*/}

        {/* Contenido del Drawer */}
        <Box sx={{ flexGrow: 1, overflowY: 'auto', textAlign: 'center' }}>
          {carrito.length === 0 ? (
            <Box sx={{ mt: {xs: 10, md: 20, lg: 20} }}>
              <img
                src={imagenCarritoVacio}
                alt="Carrito vacío"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </Box>
          ) : (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1, marginTop: 4}}>
              {carrito.map((producto) => {
                const cantidad = cantidadProductos[producto._id] || 1;
                return (
                  <Card key={producto._id} sx={{
                    width: 500, height: 102, display: 'flex', alignItems: 'center', boxShadow: 'none',
                    border: 'none', justifyContent: "space-evenly"
                  }}>
                    <CardMedia
                      component="img"
                      sx={{ width: "auto", height: {xs: "50%", md: "100%", lg: "100%"} }}
                      image={producto.img1}
                      alt={producto.nombre}
                    />
                    <CardContent sx={{ display: "flex", height: "100%", gap: "1vh", justifyContent: "center", flexDirection:"column", alignItems: "center"}}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="h6" sx={{
                          textAlign: 'center',
                          fontFamily: 'Montserrat',
                          fontSize: {xs: "0.8rem", md: "16px", lg: "16px"},
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
                        backgroundColor: '#FAFAFA',
                        padding: '0 2px',
                        borderRadius: 1,
                        borderColor: '#76B939',  // Establecer el color del borde como verde
                        borderStyle: 'solid',    // Establecer el estilo del borde
                        borderWidth: '2px'       // Establecer el grosor del borde
                      }}>
                        {/* Botones de decremento e incremento */}
                        <Button onClick={() => disminuirCantidad(producto)} sx={{
                          minWidth: 20, height: 20, padding: 0, fontSize: '16px', color: 'white', backgroundColor: "#76B939"
                        }}>
                          -
                        </Button>
                        <Typography
                          variant="body1"
                          sx={{
                            fontSize: '16px',
                            color: '#76B939',
                          }}
                        >
                          {cantidad}
                        </Typography>
                        <Button onClick={() => aumentarCantidad(producto)} sx={{
                          minWidth: 20, height: 20, padding: 0, fontSize: '16px', color: 'white', backgroundColor: "#76B939"
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
            width: {xs:"100%", md: "100%", lg: "100%"},
            height: "auto",
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: "flex-end",
            alignItems: "center",
            borderTop: '1px solid rgba(0, 0, 0, 0.3)',  // Borde superior gris
            borderLeft: 'none',  // Sin borde izquierdo
            borderRight: 'none',  // Sin borde derecho
            borderBottom: 'none',  // Sin borde inferior
          }}>
            <Box sx={{
              display: 'flex',
              width: "100%",
              height: {xs: "4vh", md: "6vh", lg: "6vh"},
              justifyContent: 'space-between',
              alignItems: 'center',
              fontWeight: 500,
              borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
            }}>
              <Typography variant="h6" sx={{fontFamily: 'Montserrat', fontSize: {xs: "0.8rem", md: "1rem", lg: "1.2rem"}}}>Subtotal</Typography>
              <Typography variant="h6" sx={{fontFamily: 'Montserrat', fontSize: {xs: "0.8rem", md: "1rem", lg: "1.2rem"}}}>${subtotal}</Typography>
            </Box>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: "100%",
              height: {xs: "4vh", md: "6vh", lg: "6vh"},
              borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
            }}>
              <Typography variant="h6" sx={{fontFamily: 'Montserrat', fontSize: {xs: "0.8rem", md: "1rem", lg: "1.2rem"}}}>Delivery</Typography>
              <Typography variant="h6" sx={{fontFamily: 'Montserrat', fontSize: {xs: "0.8rem", md: "1rem", lg: "1.2rem"}}}>${0}</Typography>
            </Box>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: "100%",
              height: {xs: "4vh", md: "6vh", lg: "6vh"},
              borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
              marginBottom: 6,
            }}>
              <Typography variant="h6" sx={{fontFamily: 'Montserrat', fontSize: {xs: "0.8rem", md: "1rem", lg: "1.2rem"}}}>Total</Typography>
              <Typography variant="h6" sx={{fontFamily: 'Montserrat', fontSize: {xs: "0.8rem", md: "1rem", lg: "1.2rem"}}}>${subtotal}</Typography>
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
                onClick={botonIrApagar}
                sx={{
                  width: '80%',
                  height: 40,
                  fontSize: '16px',
                  backgroundColor: "#F87C01",
                  fontFamily: 'Montserrat',
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
                  fontFamily: 'Montserrat',
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


