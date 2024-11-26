import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./core/routes/AppRouter";
//import { AuthProvider } from "./core/auth/providers/AuthProvider";
import { useState } from "react";
import { Context } from "./core/context/Context";




function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (process.env.NODE_ENV !== 'production') {
    console.warn = () => {};  // Suprimir los warnings en desarrollo
  }

  // aca va la logica para modificar isLoggedIn


  return <>
  {/* se envian los datos al contexto */}
  <Context.Provider value={{
            isLoggedIn: isLoggedIn,
        }}>
          <RouterProvider router={AppRouter}></RouterProvider>
  </Context.Provider>
  </>
  /* return (
    <AuthProvider>
      <RouterProvider router={AppRouter}></RouterProvider>
    </AuthProvider>
  ); */
}

export default App;
