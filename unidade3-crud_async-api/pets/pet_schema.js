import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    especie: {
        type: String,
        required: true
    },
    idade: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
})

export const Pet = mongoose.model('pet', petSchema)