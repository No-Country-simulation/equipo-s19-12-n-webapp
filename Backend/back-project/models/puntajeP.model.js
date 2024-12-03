import mongoose from "mongoose";

const schema = mongoose.Schema;

const puntajePSchema = new schema({
    producto: String,
    consumidor: String,
    puntaje: Number,
})

const PuntajeP = mongoose.model("PuntajeP", puntajePSchema, "PuntajeP");

export default PuntajeP;