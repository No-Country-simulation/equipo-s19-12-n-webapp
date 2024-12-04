import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./core/routes/AppRouter";
//import { AuthProvider } from "./core/auth/providers/AuthProvider";
import { useState } from "react";
import { Context } from "./core/context/Context";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [usuario, setUsuario] = useState(null);

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
  setUsuario(null)
}

const [allProducts, setAllProducts] = useState([])
const [actualProduct, setActualProduct] = useState({_id: 0, nombre: "", desc: "", precio: 0, stock: 0, img: "", comerciante: 0, vencimiento: ""})
const [menuArticulo, setMenuArticulo] = useState(0)

  return <>
  {/* se envian los datos al contexto */}
    <Context.Provider value={{
            isLoggedIn: isLoggedIn,
            allProducts,
            actualProduct,
            menuArticulo,
            setMenuArticulo,
            setActualProduct,
            setAllProducts,
            iniciarSesion,
            cerrarSesion,
            usuario
        }}>
          <RouterProvider router={AppRouter}></RouterProvider>
    </Context.Provider>
  </>
}

export default App;
