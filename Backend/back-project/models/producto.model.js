import mongoose from "mongoose";

const schema = mongoose.Schema;

const productoSchema = new schema({
    nombre: String,
    desc: String,
    precio: Number,
    off: Number,
    stock: Number,
    img1: String,
    img2: String,
    img3: String,
    img4: String,
    comerciante: Number,
    vencimiento: Date,
    estado: String,
    categoria: String,
})

const Producto = mongoose.model("Producto", productoSchema, "Producto");

export default Producto;