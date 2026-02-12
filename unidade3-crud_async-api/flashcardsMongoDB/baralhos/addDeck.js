import { Deck } from "../schemas/deck_schema.js";

const createDeck = async (nome) => {
    try {
        const newDeck = new Deck({nome})
        return await newDeck.save()
    } catch (error) {
        console.error("Erro ao criar o baralho", error.message)
        throw error
    }
}

export async function addDeck(req,res){
    const {nome} = req.body
    const newDeck = await createDeck(nome)

    res.status(201).send({message: "Baralho criado com sucesso!", deck: newDeck})
}