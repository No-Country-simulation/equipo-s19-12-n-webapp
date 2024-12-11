import { Box, Button, Card, TextField, Typography, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import React, { useContext, useEffect, useRef, useState } from 'react';
import imagenDatosPersonales from '../../../../../public/assets/images/metodos_de_pago.svg';
import iconoTarjetaDeDebito from '../../../../../public/assets/images/icono_tarjeta_debito.svg';
import iconoTarjetaDeCredito from '../../../../../public/assets/images/icono_tarjeta_credito.svg';
import iconoMercadoPago from '../../../../../public/assets/images/icono_mercadopago.svg';
import { Context } from '../../../context/Context';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../../organismos/SearchBar/SearchBar';
import usePostFetch from '../../../services/usePostFetch';

const MetodosDePago = () => {
  //  const formRef = useRef(null);
  const {vaciarVenta,vaciarCarrito,venta}=useContext(Context);

    const [selectedButton, setSelectedButton] = useState(null); // Estado para el botón seleccionado
    const [numeroTarjeta, setNumeroTarjeta] = useState(0); // Estado para el mes de vencimiento
    const [cuotas, setCuotas] = useState(""); // Estado para el mes de vencimiento
    const [mesVencimiento, setMesVencimiento] = useState(''); // Estado para el mes de vencimiento
    const [anioVencimiento, setAnioVencimiento] = useState(''); // Estado para el año de vencimiento
    const [codigoSeguridad, setCodigoSeguridad] = useState(''); // Estado para el código de seguridad
    const [nombreApellido, setNombreApellido] = useState(''); // Estado para nombre y apellido
    const [direccion, setDireccion] = useState(''); // Estado para la dirección

    const navigate = useNavigate();

    // Función para manejar el cambio de selección
    const handleButtonClick = (buttonId) => {
        setSelectedButton(buttonId); // Cambia el estado al botón seleccionado
    };

    const { postData, data, loading, error } = usePostFetch('https://eaty-three.vercel.app/api/compra/añadirCompra');
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
        console.log(numeroTarjeta)
        console.log(cuotas)
        console.log(mesVencimiento)
        console.log(anioVencimiento)
        console.log(codigoSeguridad)
        console.log(nombreApellido)
        console.log(direccion)
        console.log(selectedButton)
        if(selectedButton===null){
            alert("Seleccione un método de pago")
        }else{
            console.log("enviando:"+venta)
            await postData(venta);
            /* vaciarVenta();
            vaciarCarrito();
            alert("su compra se realizo exitosamente,sera redireccionado al inicio");
            navigate("/"); */
        }

        
    }

    return (
        <>
        <SearchBar></SearchBar> 
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
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 2 }}>
                    {/* Texto a la izquierda */}
                    <Typography
                        variant="body1"
                        sx={{
                            color: '#000',
                            textAlign: 'center',
                            fontFamily: 'Montserrat',
                            fontSize: '16px',
                            fontWeight: 600,
                        }}
                    >
                        Datos personales
                    </Typography>

                    {/* Texto a la derecha */}
                    <Typography
                        variant="body1"
                        sx={{
                            color: '#000',
                            textAlign: 'center',
                            fontFamily: 'Montserrat',
                            fontSize: '16px',
                            fontWeight: 600,
                        }}
                    >
                        Método de pago
                    </Typography>
                </Box>
            </Box>

            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 3 }}>
                <Typography
                    variant="body1"
                    sx={{
                        fontFamily: 'Montserrat',
                        fontSize: '30px',
                        fontWeight: 700,
                        lineHeight: 'normal',
                        width: '800px',
                        mt: 10,
                    }}
                >
                    Metodos de Pago
                </Typography>
            </Box>

            <Card sx={{ width: '800px', height: '600px', mb: 15, borderRadius: '20px', background: '#FAFAFA', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}>
                {/* Botones centrados*/}
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: 4 }}> {/* Cambié aquí el marginTop */}
                    {/* Botón 1 - Tarjeta de Débito */}
                    <Button
                        variant="contained"
                        color={selectedButton === 1 ? 'success' : 'inhert'}
                        onClick={() => handleButtonClick(1)}
                        style={{
                            width: '200px', borderRadius: 10, textTransform: 'none',
                            height: '65px', display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}
                    >
                        <img src={iconoTarjetaDeDebito} alt="Tarjeta de débito" style={{ width: 24, height: 24, marginRight: 8 }} />
                        Tarjeta Débito
                    </Button>

                    {/* Botón 2 - Tarjeta de Crédito */}
                    <Button
                        variant="contained"
                        color={selectedButton === 2 ? 'success' : 'inhert'}
                        onClick={() => handleButtonClick(2)}
                        style={{
                            width: '200px', borderRadius: 10, textTransform: 'none',
                            height: '65px', display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}
                    >
                        <img src={iconoTarjetaDeCredito} alt="Tarjeta de crédito" style={{ width: 24, height: 24, marginRight: 8 }} />
                        Tarjeta Crédito
                    </Button>

                    {/* Botón 3 - MercadoPago */}
                    <Button
                        variant="contained"
                        color={selectedButton === 3 ? 'success' : 'inhert'}
                        onClick={() => handleButtonClick(3)}
                        style={{
                            width: '200px', borderRadius: 10, textTransform: 'none',
                            height: '65px', display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}
                    >
                        <img src={iconoMercadoPago} alt="MercadoPago" style={{ width: 24, height: 24, marginRight: 8 }} />
                        Mercado Pago
                    </Button>
                </Box>

                {/* Formulario */}
                <form onSubmit={handleSubmit}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
                        {/* Campo de número de tarjeta */}
                        <Box sx={{ width: '48%' }}>
                            <Typography variant="body2" sx={{ color: '#303030', fontFamily: 'Montserrat', fontSize: '20px', fontWeight: 600 }}>
                                Número
                            </Typography>
                            <TextField
                                label="Ingresa tu número de tarjeta"
                                name="numeroTarjeta"
                                type="number"
                                fullWidth
                                margin="normal"
                                required
                                value={numeroTarjeta}
                                onChange={(e) => setNumeroTarjeta(e.target.value)}
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

                        {/* Campo de cuotas */}
                        <Box sx={{ width: '48%' }}>
                            <Typography variant="body2" sx={{ color: '#303030', fontFamily: 'Montserrat', fontSize: '20px', fontWeight: 600 }}>
                                Cuotas
                            </Typography>
                            <TextField
                                label="cuotas"
                                name="cuotas"
                                type="text"
                                fullWidth
                                margin="normal"
                                required
                                value={cuotas}
                                onChange={(e) => setCuotas(e.target.value)}
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

                    {/* Campo Fecha de Vencimiento */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, marginTop: 2 }}>
                        <Box sx={{ width: '48%' }}>
                            <Typography variant="body2" sx={{ color: '#303030', fontFamily: 'Montserrat', fontSize: '20px', fontWeight: 600 }}>
                                Fecha de Vencimiento
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
                                <FormControl fullWidth required sx={{
                                    mt: 2,
                                    '& .MuiOutlinedInput-root': {
                                        border: 'none',
                                        '& fieldset': {
                                            border: 'none',
                                        },
                                    },
                                    '& .MuiInputBase-root': {
                                        borderBottom: '2px solid #909090', // Cambia el borde inferior al color #909090
                                    },
                                }}>
                                    <InputLabel>Mes</InputLabel>
                                    <Select
                                        value={mesVencimiento}
                                        onChange={(e) => setMesVencimiento(e.target.value)}
                                        label="Mes"
                                    >
                                        {[...Array(12).keys()].map((index) => (
                                            <MenuItem key={index} value={index + 1}>
                                                {index + 1}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <FormControl fullWidth required sx={{
                                    mt: 2,
                                    '& .MuiOutlinedInput-root': {
                                        border: 'none',
                                        '& fieldset': {
                                            border: 'none',
                                        },
                                    },
                                    '& .MuiInputBase-root': {
                                        borderBottom: '2px solid #909090', // Cambia el borde inferior al color #909090
                                    },
                                }}>
                                    <InputLabel>Año</InputLabel>
                                    <Select
                                        value={anioVencimiento}
                                        onChange={(e) => setAnioVencimiento(e.target.value)}
                                        label="Año"
                                    >
                                        {[...Array(20).keys()].map((index) => (
                                            <MenuItem key={index} value={2024 + index}>
                                                {2024 + index}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Box>
                        </Box>

                        {/* Campo Código de Seguridad */}
                        <Box sx={{ width: '48%' }}>
                            <Typography variant="body2" sx={{ color: '#303030', fontFamily: 'Montserrat', fontSize: '20px', fontWeight: 600 }}>
                                Código de Seguridad
                            </Typography>
                            <TextField
                                label="Ingresa el código"
                                name="codigoSeguridad"
                                type="number"
                                fullWidth
                                margin="normal"
                                value={codigoSeguridad}
                                onChange={(e) => setCodigoSeguridad(e.target.value)}
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

                    {/* Campo Nombre y Apellido + Dirección */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, marginTop: 2 }}>
                        <Box sx={{ width: '48%' }}>
                            <Typography variant="body2" sx={{ color: '#303030', fontFamily: 'Montserrat', fontSize: '20px', fontWeight: 600 }}>
                                Nombre y Apellido
                            </Typography>
                            <TextField
                                label="Ingresa tu nombre y apellido"
                                name="nombreApellido"
                                type="text"
                                fullWidth
                                margin="normal"
                                value={nombreApellido}
                                onChange={(e) => setNombreApellido(e.target.value)}
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

                        <Box sx={{ width: '48%' }}>
                            <Typography variant="body2" sx={{ color: '#303030', fontFamily: 'Montserrat', fontSize: '20px', fontWeight: 600 }}>
                                Dirección
                            </Typography>
                            <TextField
                                label="Ingresa tu dirección"
                                name="direccion"
                                type="text"
                                fullWidth
                                margin="normal"
                                value={direccion}
                                onChange={(e) => setDireccion(e.target.value)}
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

                    {/* Botón Final */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            sx={{
                                width: '80%',
                                height: 30,
                                fontSize: '16px',
                                backgroundColor: '#F87C01',
                                textTransform: 'none',
                                '&:hover': { backgroundColor: '#F87C01' },
                                marginTop: 2,
                                marginBottom: 3,
                            }}
                        >
                            Finaliza compra
                        </Button>
                    </Box>
                </form>
            </Card>
        </Box>
        </>);
};

export default MetodosDePago;
