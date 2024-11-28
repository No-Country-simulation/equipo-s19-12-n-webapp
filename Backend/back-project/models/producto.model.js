import mongoose from "mongoose";

const schema = mongoose.Schema;

const productoSchema = new schema({
    Nombre: String,
    desc: String,
    precio: Number,
    stock: Number,
    img: String,
    comerciante: Number
})

const Producto = mongoose.model("Producto", productoSchema, "Producto");

export default Producto;