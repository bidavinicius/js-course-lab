import { baralhos } from "./postDeck.js"

export function attDeck(req,res){
    const idAtt = parseInt(req.params.id)
    const index = baralhos.findIndex(baralho => baralho.id === idAtt)
    if(index == -1){
        return res.status(404).send("Nenhum baralho com esse ID foi encontrado")
    }

    let baralhoOriginal = baralhos[index]
    let novoBaralho = req.body

    const baralhoAtualizado = {
        ...baralhoOriginal,
        ...novoBaralho
    }

    baralhos[index] = baralhoAtualizado
    res.status(200).send("Baralho atualizado com sucesso")
}