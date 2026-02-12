import { Deck } from "../schemas/deck_schema.js";

const getDecks = async() => {
    try{
        return await Deck.find()
    }catch(error){
        console.error("Erro ao buscar os baralhos:", error.message)
        throw error
    }
}

export async function listDeck(req, res) {
    const decks = await getDecks()
    res.status(200).send(decks)
}