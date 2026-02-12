import mongoose from "mongoose";

const movementSchema = new mongoose.Schema({
    idProduto: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "produto"
    },
    tipo: {
        type: String,
        required: true
    },
    quantidade: {
        type: Number,
        required: true
    },
    data: {
        type: Date,
        default: Date.now,
        required: false
    }
})

export const Movimento = mongoose.model('movimento', movementSchema)