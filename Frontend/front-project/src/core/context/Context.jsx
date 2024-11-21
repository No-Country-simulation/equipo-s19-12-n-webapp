
/* 1- creacion de contex
   2- authProviders en la carpeta auth->providers (para proveer los datos)
   3- envolver las rutas  
   4- el hook(use_auth.js) es el que se usa para obtener los datos*/

import { createContext } from "react";

export const Context = createContext();