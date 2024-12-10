import { createBrowserRouter } from 'react-router-dom'
import LoginView from '../../features/login/LoginView'
import Inicio from '../../features/inicio/Inicio'
import AgregarProductos from '../../features/agregarProductos/AgregarProductos'
import Perfil from '../../features/perfil/Perfil'
import Soporte from '../../features/soporte/Soporte'
import Layout from '../layouts/Layout'
import Productos from '../components/templates/Productos/Productos'
import Comprar from '../components/templates/compra/Comprar.jsx'
import PrivateRouteCliente from '../auth/components/PrivateRouteCliente.jsx'
import Articulo from '../components/templates/Articulo/Articulo.jsx'

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
        path: "/comprar",
        element: <PrivateRouteCliente><Layout><Comprar/></Layout></PrivateRouteCliente> ,
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