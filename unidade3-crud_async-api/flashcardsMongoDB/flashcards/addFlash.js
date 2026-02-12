import { Flashcard } from "../schemas/flashcard_schema.js";

const createFlashcard = async (pergunta, resposta, idBaralho) => {
    try {
        const newFlash = new Flashcard({pergunta, resposta, idBaralho})
        return await newFlash.save()
    } catch (error) {
        console.error("Erro ao criar o flashcard", error.message)
        throw error
    }
}

export async function addFlash(req,res){
    const {pergunta, resposta, idBaralho} = req.body
    const newFlash = await createBook(title, author, year, genre)

    res.status(201).send({message: "Flashcard criado com sucesso!", flashcard: newFlash})
}