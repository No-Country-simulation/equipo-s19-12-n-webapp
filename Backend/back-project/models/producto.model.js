import mongoose from "mongoose";

const schema = mongoose.Schema;

const productoSchema = new schema({
    nombre: String,
    desc: String,
    precio: Number,
    stock: Number,
    img: String,
    comerciante: Number,
    vencimiento: Date
})

const Producto = mongoose.model("Producto", productoSchema, "Producto");

export default Producto;