import mongoose from "mongoose";

const schema = mongoose.Schema;

const detalleCSchema = new schema({
    compra: String,
    articulo: String,
    cantidad: Number,
})

const DetalleC = mongoose.model("DetalleC", detalleCSchema, "DetalleC");

export default DetalleC;