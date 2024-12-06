import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./core/routes/AppRouter";
//import { AuthProvider } from "./core/auth/providers/AuthProvider";
import { useState } from "react";
import { Context } from "./core/context/Context";




function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [usuario, setUsuario] = useState(null);
  const [datosUsuario,setDatosUsuario]=useState(null)

  if (process.env.NODE_ENV !== 'production') {
    console.warn = () => {};  // Suprimir los warnings en desarrollo
  }

  // aca va la logica para modificar isLoggedIn
const iniciarSesion=(usuario)=>{
  setIsLoggedIn(true);
  setUsuario(usuario)
}
const cerrarSesion =()=>{
  setIsLoggedIn(false);
  setUsuario(null);
  setDatosUsuario(null);
}

const guardarDatosUsuario=(datos)=>{
  setDatosUsuario(datos);
}

const [allProducts, setAllProducts] = useState([])

  return <>
  {/* se envian los datos al contexto */}
    <Context.Provider value={{
            isLoggedIn: isLoggedIn,
            allProducts,
            setAllProducts,
            iniciarSesion,
            cerrarSesion,
            usuario,// comerciante o cliente
            datosUsuario,
            guardarDatosUsuario
        }}>
          <RouterProvider router={AppRouter}></RouterProvider>
    </Context.Provider>
  </>
}

export default App;
