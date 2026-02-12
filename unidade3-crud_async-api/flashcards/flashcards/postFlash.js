import { baralhos } from "../baralhos/postDeck.js"
export let flashcards = []
let id = 0

export function postFlash(req,res){
    const { pergunta, resposta, idBaralho } = req.body
    if(baralhos.length == 0){
        res.status(400).send("Não há baralhos existentes para registrar o flashcard")
    }
    if(!pergunta||!resposta||!idBaralho){
        res.status(400).send("Você deve inserir todos os dados do flashcard")
    }

    id++
    const flashcard = {
        id,
        pergunta,
        resposta,
        idBaralho
    }

    flashcards.push(flashcard)

    res.status(200).send("Flashcard criado com sucesso!")
}