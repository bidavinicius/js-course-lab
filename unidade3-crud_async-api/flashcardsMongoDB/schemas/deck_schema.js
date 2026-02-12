import mongoose from "mongoose";

const deckSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    }
})

export const Deck = mongoose.model('deck', deckSchema)