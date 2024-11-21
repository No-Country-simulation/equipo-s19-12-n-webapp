import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dontenv from "dotenv"

const app = express();
dontenv.config();
const port = process.env.PORT || 5000;

  /* Midlewares */ 
app.use(express.json());
app.use(cors()); // Aqui se pueden añadir todas las aplicaciones que tienen acceso al servidor, si no se añade nada por defecto deja entrar a todo el mundo.
app.use(express.urlencoded({ extended: true }));

app.listen(port);