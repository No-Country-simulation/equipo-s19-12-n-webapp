import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dontenv from "dotenv"
import routerProducto from "./routes/routesProducto.js"
import routerComerciante from "./routes/routesComerciante.js"
import routerCompra from "./routes/routesCompra.js"
import routerConsumidor from "./routes/routesConsumidor.js"
import routerDetalleC from "./routes/routesDetalleC.js"
import routerPuntajeC from "./routes/routesPuntajeC.js"
import routerPuntajeP from "./routes/routesPuntajeP.js"

const app = express();
dontenv.config();
const port = process.env.PORT || 5000;

/* Data Base Conection */
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@proyects.kxrihqg.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Base de datos conectada"))
  .catch((e) => console.log(e));

  /* Midlewares */ 
app.use(express.json());
app.use(cors()); // Aqui se pueden añadir todas las aplicaciones que tienen acceso al servidor, si no se añade nada por defecto deja entrar a todo el mundo.
app.use(express.urlencoded({ extended: true }));
app.use("/api/productos", routerProducto);
app.use("/api/comerciante", routerComerciante);
app.use("/api/compra", routerCompra);
app.use("/api/consumidor", routerConsumidor);
app.use("/api/detalleC", routerDetalleC);
app.use("/api/puntajeC", routerPuntajeC);
app.use("/api/puntajeP", routerPuntajeP);

app.listen(port);