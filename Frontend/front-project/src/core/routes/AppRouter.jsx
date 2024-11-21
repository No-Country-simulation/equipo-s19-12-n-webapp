import { createBrowserRouter } from 'react-router-dom'
import LoginView from '../../features/login/LoginView'
import Inicio from '../../features/inicio/Inicio'
import Categorias from '../../features/categorias/Categorias'
import Perfil from '../../features/perfil/Perfil'
import Soporte from '../../features/soporte/Soporte'

export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <Inicio></Inicio>,
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