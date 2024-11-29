import { Context } from "../../context/Context";
import { useState } from "react";

export const AUTH_KEY = "isLoggedIn";

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // aca va la logica a compartir en el contexto

  return (
    <>
      <Context.Provider
        value={{
          isLoggedIn: isLoggedIn,
        }}
      >
        {children}
      </Context.Provider>
    </>
  );

  // aca va la logica a compartir en el contexto

  return (
    <>
      <Context.Provider
        value={{
          isLoggedIn: isLoggedIn,
        }}
      >
        {children}
      </Context.Provider>
    </>
  );
};
