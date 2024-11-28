import mongoose from "mongoose";

const schema = mongoose.Schema;

const puntajePSchema = new schema({
    producto: Number,
    consumidor: Number,
    puntaje: Number,
})

const PuntajeP = mongoose.model("PuntajeP", puntajePSchema, "PuntajeP");

export default PuntajeP;