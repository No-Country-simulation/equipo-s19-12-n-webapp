import { createBrowserRouter } from 'react-router-dom'
import LoginView from '../../features/login/LoginView'
import Inicio from '../../features/inicio/Inicio'
import Categorias from '../../features/categorias/Categorias'
import Perfil from '../../features/perfil/Perfil'
import Soporte from '../../features/soporte/Soporte'
import Layout from '../layouts/Layout'
import Productos from '../components/templates/Productos/Productos'

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
        path: "/categorias",
        element: <Layout><Categorias/></Layout>,
    },
    {
        path: "/perfil",
        element: <Perfil/>,
    },
    {
        path: "/soporte",
        element: <Layout><Soporte/></Layout> ,
    },
    {
        path: "*",
        element: <h1>error: ruta no encontrada</h1>,
    },
])