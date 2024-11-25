import mongoose from "mongoose";

const schema = mongoose.Schema;

const detalleCSchema = new schema({
    compra: Number,
    articulo: Number,
    cantidad: Number,
})

const DetalleC = mongoose.model("DetalleC", detalleCSchema, "DetalleC");

export default DetalleC;