export let baralhos = []
let id = 0

export function postDeck(req,res){
    const { nome } = req.body
    if(!nome){
        res.status(400).send("O baralho precisa ter um nome.")
    }

    id++
    const baralho = {
        id, 
        nome
    }

    baralhos.push(baralho)

    res.status(200).send(`Baralho ${baralho.nome} criado com sucesso, ID do baralho: ${baralho.id}!`)
}