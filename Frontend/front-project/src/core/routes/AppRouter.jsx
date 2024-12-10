import { createBrowserRouter } from 'react-router-dom'
import LoginView from '../../features/login/LoginView'
import Inicio from '../../features/inicio/Inicio'
import AgregarProductos from '../../features/agregarProductos/AgregarProductos'
import Perfil from '../../features/perfil/Perfil'
import Soporte from '../../features/soporte/Soporte'
import Layout from '../layouts/Layout'
import Productos from '../components/templates/Productos/Productos'
import EditarProductos from '../../features/editarProducto/EditarProducto'

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
        path: "/productos",
        element: <Layout><Productos/></Layout>,
    },
    {
        path: "/agregarProductos",
        element: <Layout><AgregarProductos/></Layout>,
    },
    {
        path: "/editarProductos/674a6fdafd6b4dbe70401dc8",
        element: <Layout><EditarProductos/></Layout>,
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