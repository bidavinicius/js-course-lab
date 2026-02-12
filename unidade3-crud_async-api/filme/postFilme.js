export let filmes = []
let id = 0

export function postFilme(req, res){
    const { titulo, diretor, ano, genero } = req.body
    if(!titulo||!diretor||!ano||!genero){
        res.status(400).send("Você deve inserir todas as informações do filme")
    }
    id++

    let filme = {
        id,
        titulo,
        diretor,
        ano,
        genero
    }

    filmes.push(filme)

    res.status(200).send("Filme adicionado!")
}