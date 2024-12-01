import { Context } from "../../context/Context";
import { useState } from "react";

export const AUTH_KEY = "isLoggedIn";

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [allProducts, setAllProducts] = useState([])

  // aca va la logica a compartir en el contexto

  return (
    <>
      <Context.Provider
        value={{
          isLoggedIn: isLoggedIn,
          allProducts,
          setAllProducts,
        }}
      >
        {children}
      </Context.Provider>
    </>
  );
};
