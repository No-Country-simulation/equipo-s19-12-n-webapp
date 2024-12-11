import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./core/routes/AppRouter";
//import { AuthProvider } from "./core/auth/providers/AuthProvider";
import { useState } from "react";
import { Context } from "./core/context/Context";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [usuario, setUsuario] = useState(null);
  const [datosUsuario,setDatosUsuario]=useState(null);
  const [carrito,setCarrito]=useState([]);
  const [venta,setVenta]=useState(null);

  if (process.env.NODE_ENV !== 'production') {
    console.warn = () => {};  // Suprimir los warnings en desarrollo
  }

  // aca va la logica para modificar
const iniciarSesion=(usuario)=>{
  setIsLoggedIn(true);
  setUsuario(usuario);
}
const cerrarSesion =()=>{
  setIsLoggedIn(false);
  setUsuario(null);
  setDatosUsuario(null);
}

const guardarDatosUsuario=(datos)=>{
  setDatosUsuario(JSON.parse(datos));
}
const agregarAcarrito=(producto)=>{
  setCarrito([...carrito,producto])
};
const eliminarDeCarrito = (id) => {
  const nuevoCarrito = carrito.filter(producto => producto._id !== id);
  setCarrito(nuevoCarrito);
 
};
const vaciarCarrito=()=>{
  setCarrito([])
}
const agregarVenta = (nuevaVenta, callback) => {
  setVenta(nuevaVenta); // Actualiza el estado
  if (callback) {
    callback(nuevaVenta); // Ejecuta el callback con la nueva venta
  }
};
  const vaciarVenta = ()=>{
    setVenta(null)
  }

const [allProducts, setAllProducts] = useState([])
const [actualProduct, setActualProduct] = useState({_id: 0, nombre: "", desc: "", precio: 0, off: 0, stock: 0, img1: "", img2: "", img3: "", img4: "", comerciante: 0, vencimiento: ""})
const [menuArticulo, setMenuArticulo] = useState(0)
const [detallesComerciante, setDetallesComerciante] = useState({_id: 0, cuit: 0, nombre: "", logo: "", direccion: "", ciudad: 0, img1: "", img2: "", img3: ""})

  return <>
  {/* se envian los datos al contexto */}
    <Context.Provider value={{
            isLoggedIn: isLoggedIn, // se usa?
            allProducts,
            actualProduct,
            menuArticulo,
            detallesComerciante,
            setDetallesComerciante,
            setMenuArticulo,
            setActualProduct,
            setAllProducts,
            iniciarSesion,
            cerrarSesion,
            usuario,// comerciante o cliente
            datosUsuario,
            guardarDatosUsuario,
            carrito,
            agregarAcarrito,
            eliminarDeCarrito,
            vaciarCarrito,
            agregarVenta,
            vaciarVenta,
            venta
        }}>
          <RouterProvider router={AppRouter}></RouterProvider>
    </Context.Provider>
  </>
}

export default App;
