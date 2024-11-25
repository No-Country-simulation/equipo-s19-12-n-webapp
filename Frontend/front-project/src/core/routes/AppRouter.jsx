import { createBrowserRouter } from 'react-router-dom'
import LoginView from '../../features/login/LoginView'
import Inicio from '../../features/inicio/Inicio'
import Categorias from '../../features/categorias/Categorias'
import Perfil from '../../features/perfil/Perfil'
import Soporte from '../../features/soporte/Soporte'
import Layout from '../layouts/Layout'

export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout>
                    <Inicio></Inicio>
                </Layout>,
    },
    {
        path: "/login",
        element: <LoginView/>,
    },
    {
        path: "/categorias",
        element: <Categorias/>,
    },
    {
        path: "/perfil",
        element: <Perfil/>,
    },
    {
        path: "/soporte",
        element: <Soporte/>,
    },
    {
        path: "*",
        element: <h1>error: ruta no encontrada</h1>,
    }, 
])