import { filmes } from "./postFilme.js";

export function attFilme(req, res){
    const idAtt = parseInt(req.params.id)
    const index = filmes.findIndex(filme => filme.id === idAtt)
    if(index == -1){
        return res.status(404).send("Nenhum filme com esse ID foi encontrado")
    }

    let filmeOriginal = filmes[index]
    let novoFilme = req.body

    const filmeAtualizado = {
        ...filmeOriginal,
        ...novoFilme
    }

    filmes[index] = filmeAtualizado
    res.status(200).send("Filme atualizado com sucesso")
}