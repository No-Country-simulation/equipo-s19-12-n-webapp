import mongoose from "mongoose";

const schema = mongoose.Schema;

const compraSchema = new schema({
    consumidor: String,
    comerciante: Number,
    precioT: Number,
    fecha: Date,
})

const Compra = mongoose.model("Compra", compraSchema, "Compra");

export default Compra;