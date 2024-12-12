import { createBrowserRouter } from 'react-router-dom'
import LoginView from '../../features/login/LoginView'
import Inicio from '../../features/inicio/Inicio'
import AgregarProductos from '../../features/agregarProductos/AgregarProductos'
import Perfil from '../../features/perfil/Perfil'
import Soporte from '../../features/soporte/Soporte'
import Layout from '../layouts/Layout'
import Productos from '../components/templates/Productos/Productos'
import PrivateRouteCliente from '../auth/components/PrivateRouteCliente.jsx'
import Articulo from '../components/templates/Articulo/Articulo.jsx'
import DatosPersonales from '../components/templates/datosPersonales/DatosPersonales.jsx'
import MetodosDePago from '../components/templates/pagos/MetodosDePago.jsx'
import EditarProductos from '../../features/editarProducto/EditarProducto'
import Confirmacion from '../components/templates/confirmacion/Confirmacion.jsx'

export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element:<Layout><Inicio></Inicio></Layout> ,
    },
    {
        path: "/login",
        element: <LoginView/>,
    },
    {
        path: "/productos/articulo",
        element: <Layout><Articulo></Articulo></Layout>,
    },
    {
        path: "/productos",
        element: <Layout><Productos/></Layout>,
    },
    {
        path: "/agregarProductos",
        element: <Layout><AgregarProductos/></Layout>,
    },
    {
        path: "/metodos_de_pago",
        element: <PrivateRouteCliente><Layout><MetodosDePago/></Layout></PrivateRouteCliente> ,
    },
    {
        path: "/datos_personales",
        element: <PrivateRouteCliente><Layout><DatosPersonales/></Layout></PrivateRouteCliente> ,
    },
    {
        path: "/editarProductos/:id",
        element: <Layout><EditarProductos/></Layout>,
    },
    {
        path:"/confirmacion",
        element:<Layout><Confirmacion/></Layout>,
    },
    /*{
        path: "/perfil",
        element: <Perfil/>,
    },*/
    {
        path: "/soporte",
        element: <Layout><Soporte/></Layout> ,
    },
    {
        path: "*",
        element: <h1>error: ruta no encontrada</h1>,
    },
])